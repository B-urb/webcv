export const keelAnnotationsExp = {"keel.sh/policy": "all"}
export const keelAnnotationsDev = {"keel.sh/match-tag": "true", "keel.sh/policy": "all"}
export const keelAnnotationsProd = {"keel.sh/policy": "major"}

export const authAnnotation = {"traefik.ingress.kubernetes.io/router.middlewares": "dev-webcv-fw-auth@kubernetescrd"};
export const basicAuth2Annotation = {
  "ingress.kubernetes.io/auth-type": "basic",
  "ingress.kubernetes.io/auth-secret": "basic-auth"
}
