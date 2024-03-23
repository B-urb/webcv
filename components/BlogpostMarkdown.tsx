import React from 'react';
import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeProps {
  className?: string;
  children?: React.ReactNode;
}

const CodeComponent: React.FC<CodeProps> = ({
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <SyntaxHighlighter
      style={dracula}
      showLineNumbers
      language={match[1]}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export const BlogpostMarkdown: React.FC<{ markdown: string }> = ({
  markdown,
}) => {
  return (
    <ReactMarkdown
      components={{
        code: CodeComponent as Components['code'],
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};
