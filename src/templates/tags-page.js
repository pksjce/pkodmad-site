import React from "react";
import styled from "styled-components";
import Paragraph, { SectionWrapper } from "../components/paragraph";

const TagHeader = styled.h1`
  margin-bottom: 10px;
`;

export default ({ data, pathContext }) => {
  return (
    <div>
      <TagHeader>{`#${pathContext.tagName}`}</TagHeader>
      {pathContext.nodes.map(node => {
        return (
          <SectionWrapper key={node.frontmatter.id}>
            <h3>{node.frontmatter.title}</h3>
            <Paragraph>{node.excerpt}</Paragraph>
          </SectionWrapper>
        );
      })}
    </div>
  );
};
