import React from "react";
import Header from "../components/header";
import Paragraph, { SectionWrapper } from "../components/paragraph";
import Link from "gatsby-link";
import styled from "styled-components";

const LinkWrapper = styled(Link)`
  color: red;

  &:visited {
    color: brown;
  }
`;

export default ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  return [
    <SectionWrapper>
      <Paragraph>
        <Header fontSize={"3em"}>Tech Articles</Header>

        <ul>
          {nodes.reverse().map(node => (
            <li key={node.id}>
              <LinkWrapper
                style={{
                  textDecoration: `none`
                }}
                to={`${node.frontmatter.path}`}
              >
                {node.frontmatter.title} ({node.timeToRead} mins)
              </LinkWrapper>
            </li>
          ))}
        </ul>
      </Paragraph>
    </SectionWrapper>
  ];
};

export const pageQuery = graphql`
  query BlogPostQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            path
            date(formatString: "DD-MM-YYYY")
          }
        }
      }
    }
  }
`;
