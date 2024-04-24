import ReactMarkdown from "react-markdown";

import { getIntrotext, type Introtext } from "../lib/directus";

const IntroText = async () => {
  const data = (await getIntrotext()) as Introtext;

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
      {data.introtext}
    </ReactMarkdown>
  );
};

export default IntroText;
