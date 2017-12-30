import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import Paragraph, { SectionWrapper } from "../components/paragraph";

const TagHeader = styled.h1`
  margin-bottom: 10px;
`;

export default ({ data, pathContext }) => {
  return (
    <div>
      <Header>{`#${pathContext.tagName}`}</Header>
      {pathContext.nodes.map(node => {
        return (
          <SectionWrapper key={node.frontmatter.id}>
            <Paragraph>
              <h3>{node.frontmatter.title}</h3>
              <Paragraph>{node.excerpt}</Paragraph>
            </Paragraph>
          </SectionWrapper>
        );
      })}
    </div>
  );
};
