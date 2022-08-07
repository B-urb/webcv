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
            return <ReactMarkdown className="text-center text-xs md:text-xl ">{data?.introtext!}</ReactMarkdown>
    }
}
export default IntroText;