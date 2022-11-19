import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  blogContent: string;
};

const MarkdownCard: React.FC<Props> = ({ blogContent }) => {
  return <ReactMarkdown children={blogContent} />;
};

export default MarkdownCard;
