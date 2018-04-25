import React from "react";
import Header from "../components/header";
import Paragraph, { SectionWrapper } from "../components/paragraph";
import Link from "gatsby-link";
import styled from "styled-components";
import { format } from "date-fns";

const ListContainer = styled.div`
  display: grid;
  @media (max-width: 420px) {
    grid-template-columns: 2fr 3fr;
  }
  grid-template-columns: 1fr 4fr;
  color: black;
  font-size: 15px;
`;

const Date = styled.div`
  color: #776f6a;
`;

const Title = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const sortedNodes = nodes.sort(
    (a, b) => format(a.frontmatter.date, "x") < format(b.frontmatter.date, "x")
  );
  return [
    <Paragraph>
      <Header fontSize={"3em"}>Tech Articles</Header>

      {sortedNodes.map(node => (
        <ListContainer>
          <Date>{format(node.frontmatter.date, "DD MMMM YYYY")}</Date>
          <Title to={`${node.frontmatter.path}`}>
            {node.frontmatter.title}
          </Title>
        </ListContainer>
      ))}
    </Paragraph>
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
            date(formatString: "MM/DD/YYYY")
          }
        }
      }
    }
  }
`;
