import ReactMarkdown from "react-markdown";

const IntroText = (props: { introtext: string }) => {
  return (
    <ReactMarkdown
      className="dark:prose-p:text-dark-4
     dark:prose-headings:text-dark-4
      prose
       text-lg dark:prose-invert
       prose-headings:font-roboto
       md:text-2xl
       prose-ul:md:w-96"
    >
      {props.introtext}
    </ReactMarkdown>
  );
};

export default IntroText;
