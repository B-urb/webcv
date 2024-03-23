"use client";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const BlogpostMarkdown = (props: { markdown: string }) => {
  return (
    <ReactMarkdown
      components={{
        code({ _, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              // @ts-ignore
              // TODO: Github issue

              style={dracula}
              showLineNumbers
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {props.markdown}
    </ReactMarkdown>
  );
};
