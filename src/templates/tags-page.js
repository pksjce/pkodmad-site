import React from "react";

export default ({ data, pathContext }) => {
  console.log(pathContext.nodes);
  return (
    <div>
      <div>{pathContext.tagName}</div>
      {pathContext.nodes.map(node => {
        return (
          <div>
            <div>{node.frontmatter.title}</div>
            <div>{node.excerpt}</div>
          </div>
        );
      })}
    </div>
  );
};
