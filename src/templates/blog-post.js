import React from "react";
import Helmet from "react-helmet";
import Header from "../components/header";
import styled from "styled-components";

const PostParagraph = styled.div`
background-color: white;
padding: 5px 40px;
font-size: 14px;
font-family: serif;
line-height: 20px;
`

const Date = styled.div`
  font-size: 0.7em;
  text-align: right;
  margin-bottom: 5px;
`;

export default function Template(props) {
  const { markdownRemark: post } = props.data;
  return (
    <PostParagraph>
      <Header fontSize={"1.3em"}>{post.frontmatter.title}</Header>
      <Date>{post.frontmatter.date}</Date>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </PostParagraph>
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
