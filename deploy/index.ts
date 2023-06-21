import * as pulumi from "@pulumi/pulumi";
import * as kubernetes from "@pulumi/kubernetes";
import {getProject, getStack, interpolate} from "@pulumi/pulumi";
import {createGitlabSecret} from "./src/util";
import {basicAuthAnnotation} from "./src/globals";
import {Ingress} from "@pulumi/kubernetes/networking/v1";
import {Deployment} from "@pulumi/kubernetes/apps/v1";

// Get some values from the stack configuration, or use defaults
const config = new pulumi.Config();
const k8sNamespace = config.get("namespace") || "default";
const baseUrl = config.get("url") || "default";
const numReplicas = config.getNumber("replicas") || 1;
const stackName = getStack()

const prefix = stackName === "prod" ? "" : stackName
const url = prefix === "" ? baseUrl : prefix + "." + baseUrl
const projectName = getProject()
const resourceName = prefix + projectName

const appLabels = {
    name: resourceName,
    app: resourceName
};

// Create a new namespace
const webServerNs = new kubernetes.core.v1.Namespace("webserver", {metadata: {
    name: k8sNamespace,
}});

const ingressAnnotation = stackName === "prod" ? {} : basicAuthAnnotation

// Create a new ConfigMap for the Nginx configuration


//Create Gitlab Secret
const pullSecret = process.env.CI_PULL_SECRET!
const secret = createGitlabSecret("pulumi", pullSecret, "gitlab-pull-secret", webServerNs)



// Create a new Deployment with a user-specified number of replicas

const deployment = new Deployment(resourceName, {

    metadata: {
        name: resourceName,
        namespace: webServerNs.metadata.name,
        labels: appLabels
    },
    spec: {
        "strategy": {
            "type": "Recreate"
        },
        selector: {
            matchLabels: appLabels
        },
        "template": {
            "metadata": {
                "labels": appLabels
            },
            "spec": {
                "containers": [
                    {
                        "name": resourceName,
                        "image": process.env.registryImage + ":" + process.env.imageTag,
                        "imagePullPolicy": "Always",
                        "env": [
                            {
                                "name": "url",
                                "value": url
                            }
                        ],
                        "ports": [
                            {
                                "name": "http",
                                "containerPort": 3000
                            }
                        ]
                    }
                ],
                imagePullSecrets: [
                    {"name": pulumi.interpolate `${secret.metadata.name}`}
                ]

            }
        }
    }
})

// Expose the Deployment as a Kubernetes Service
const service = new kubernetes.core.v1.Service(resourceName, {
    metadata: {
        namespace: webServerNs.metadata.name,
        name: resourceName
    },
    spec: {
            "ports": [
                {
                    "name": "http",
                    "port": 80,
                    "protocol": "TCP",
                    "targetPort": "http"
                }
            ],
        selector: appLabels,
    },
});
const ingress = new Ingress(resourceName, {
        metadata: {
            annotations: {
                "kubernetes.io/ingress.class": "traefik",
                "cert-manager.io/cluster-issuer": "letsencrypt",
                ...ingressAnnotation
            },
            namespace: webServerNs.metadata.name
        },

        spec: {
            tls: [{
                secretName: interpolate `${service.metadata.name}-tls`,
                hosts: [url]
            }],
            rules: [
                {
                    host: url,
                    http: {
                        paths: [{
                            pathType: "Prefix",
                            path: "/",
                            backend: {service: {name: interpolate `${service.metadata.name}`, port:{number: 80 }}}
                        }]
                    }
                }]
        }
    }
);



// Export some values for use elsewhere
export const deploymentName = deployment.metadata.name;
export const serviceName = service.metadata.name;
