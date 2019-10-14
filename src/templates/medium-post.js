import React from "react";
import Header from "../components/header";
import Paragraph from "../components/paragraph";
import Navigation from "../navigation";

export default function Template(props) {
  const { mediumPub: article } = props.data;
  return [
    <Paragraph>
      <Navigation selected="writing" />
      <Header>{article.title}</Header>
      <div dangerouslySetInnerHTML={{ __html: article.post }} />
    </Paragraph>
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
