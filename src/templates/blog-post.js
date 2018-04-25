import React from "react";
import Helmet from "react-helmet";
import Header from "../components/header";
import styled from "styled-components";
import "prismjs/themes/prism-twilight.css";
import Navigation from "../navigation";
import { mainColor } from "../utils/const";

const NavWrapper = styled.div`
  margin: auto;
  padding: 10px;
`;

const PostParagraph = styled.div`
  background-color: white;
  border-right: 1px solid ${mainColor};
  border-left: 1px solid ${mainColor};
  padding: 5px 40px;
  font-size: 14px;
  font-family: serif;
  line-height: 20px;
  @media (min-width: 600px) {
    margin: 10px 20%;
    font-size: 17px;
    line-height: 24px;
  }
  p {
    font-size: 20px;
    line-height: 32px;
  }
  a {
    color: ${mainColor};
  }
  pre {
    margin-bottom: 20px;
  }
`;

const Date = styled.div`
  font-size: 0.9em;
  text-align: left;
  margin-bottom: 20px;
  font-weight: bold;
  border-bottom: 1px solid ${mainColor};
`;

export default function Template(props) {
  const { markdownRemark: post } = props.data;
  return (
    <div>
      <NavWrapper>
        <Navigation selected="tech-stuff" />
      </NavWrapper>
      <PostParagraph>
        <Header>{post.frontmatter.title}</Header>
        <Date>{post.frontmatter.date}</Date>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </PostParagraph>
    </div>
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
