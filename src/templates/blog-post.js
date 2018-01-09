import React from "react";
import Helmet from "react-helmet";
import Header from "../components/header";
import Paragraph, { SectionWrapper } from "../components/paragraph";
import styled from "styled-components";

const Date = styled.div`
  font-size: 0.9em;
  font-family: "Ranga", cursive;
`;

export default function Template(props) {
  const { markdownRemark: post } = props.data;
  return (
    <Paragraph>
      <Header fontSize={"1.6em"}>{post.frontmatter.title}</Header>
      <Date>{post.frontmatter.date}</Date>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Paragraph>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
