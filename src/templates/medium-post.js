import React from "react";
import Helmet from "react-helmet";
import Header from "../components/header";
import Paragraph, { SectionWrapper } from "../components/paragraph";

export default function Template(props) {
  const { mediumPub: article } = props.data;
  return [
    <SectionWrapper>
      <Paragraph>
        <Header fontSize={"1.6em"}>{article.title}</Header>
        <div dangerouslySetInnerHTML={{ __html: article.post }} />
      </Paragraph>
    </SectionWrapper>
  ];
}

export const pageQuery = graphql`
  query MediumPostByPath($path: String!) {
    mediumPub(path: { eq: $path }) {
      id
      path
      title
      post
    }
  }
`;
