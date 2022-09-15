import ReactMarkdown from "react-markdown";


const IntroText = (props: {introtext: string}) => {

            return <ReactMarkdown className="prose md:min-w-[75vw] max-w-[90vw] dark:prose-invert dark:prose-p:text-yellow-300 dark:prose-headings:text-yellow-300">{props.introtext}</ReactMarkdown>

}


export default IntroText;