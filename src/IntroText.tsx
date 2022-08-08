import {useQuery, UseQueryResult} from "react-query";
import {getIntrotext, Introtext} from "./api/directus";
import {OneItem} from "@directus/sdk";
import ReactMarkdown from "react-markdown";


const IntroText = () => {
    const {status,data, error} :UseQueryResult<OneItem<Introtext>, Error>= useQuery("introtext", getIntrotext)

    switch (status) {
        case "idle":
            return <div>idle</div>;
        case 'loading':
            return <span>Loading...</span>
        case 'error':
            return <span>Error: {error.message}</span>

        case "success":
            return <ReactMarkdown className="prose md:min-w-[75vw] max-w-[90vw] dark:prose-invert dark:prose-p:text-yellow-300 dark:prose-headings:text-yellow-300">{data?.introtext!}</ReactMarkdown>
    }
}
export default IntroText;