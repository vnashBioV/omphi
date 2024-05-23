// components/CodeBlock.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ value }) => {
  const { language, code } = value;
  return (
    <SyntaxHighlighter language={language} style={solarizedlight}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
