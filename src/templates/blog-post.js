import React from "react";
import Helmet from "react-helmet";
import Header from "../components/header";
import Paragraph, { SectionWrapper } from "../components/paragraph";

export default function Template(props) {
  const { markdownRemark: post } = props.data;
  return [
    <Header fontSize={"1.6em"}>{post.frontmatter.title}</Header>,
    <SectionWrapper>
      <Paragraph>
        <h3>{post.frontmatter.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Paragraph>
    </SectionWrapper>
  ];
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
