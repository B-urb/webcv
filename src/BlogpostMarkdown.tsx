import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula, prism} from "react-syntax-highlighter/dist/esm/styles/prism";
import {useContext} from "react";
import {UIContext} from "./context/ui-context";
export const BlogpostMarkdown = (props: {markdown: string}) => {
const {currentTheme} = useContext(UIContext)
  return <ReactMarkdown  children={props.markdown}  components={{
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
          <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              // @ts-ignore
              //TODO: Github issue
              style={currentTheme === "light" ? prism: dracula}
              showLineNumbers={true}
              language={match[1]}
              PreTag="div"
              {...props}
          />
      ) : (
          <code className={className} {...props}>
            {children}
          </code>
      )
    }
  }} />
}