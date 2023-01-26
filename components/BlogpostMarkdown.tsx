import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula, prism} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {useContext} from "react";
import {UIContext} from "../lib/ui-context";
export const BlogpostMarkdown = (props: {markdown: string}) => {
const {currentTheme} = useContext(UIContext)
  console.log("Theme is "+ currentTheme)
  return <ReactMarkdown  components={{
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
          <SyntaxHighlighter

              // @ts-ignore
              //TODO: Github issue

              style={currentTheme === "light" ? prism: dracula}
              showLineNumbers={true}
              language={match[1]}
              PreTag="div"
              {...props}
          >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
      ) : (
          <code className={className} {...props}>
            {children}
          </code>
      )
    }
  }} >{props.markdown}</ReactMarkdown>
}