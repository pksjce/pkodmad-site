import React from "react";
import Header from "../components/header";
import Paragraph from "../components/paragraph";

export default ({ data, pathContext }) => {
  return (
    <Paragraph>
      <Header>{`#${pathContext.tagName}`}</Header>
      {pathContext.nodes.map(node => {
        return (
          <div>
            <h3>{node.frontmatter.title}</h3>
            <Paragraph>{node.excerpt}</Paragraph>
          </div>
        );
      })}
    </Paragraph>
  );
};
