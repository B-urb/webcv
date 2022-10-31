import ReactMarkdown from "react-markdown";


const IntroText = (props: {introtext: string}) => {
    return <ReactMarkdown className="prose md:min-w-[20vw] max-w-[80vw] md:max-w-[50vw]
     dark:prose-invert
      dark:prose-p:text-dark-4
       text-lg md:text-2xl
       text-justify
       prose-ul:w-96
       dark:prose-headings:text-dark-4
       prose-headings:font-roboto">{props.introtext}</ReactMarkdown>

}


export default IntroText;