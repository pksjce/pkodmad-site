import React from "react";
import Header from "../components/header";
import Paragraph, { SectionWrapper } from "../components/paragraph";
import Link from "gatsby-link";
import styled from "styled-components";
import { format,parseISO } from "date-fns";
import Navigation from "../navigation";
import { mainColor } from "../utils/const";

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
    text-decoration-color: ${mainColor};
  }
`;

export default ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => ({node: edge.node, date: edge.node.frontmatter.date}));
  const sorteddates = nodes.sort((a,b) => a.date -b.date).reverse()

  return [
    <Paragraph>
      <Navigation selected="tech-stuff" />
      <Header>Tech Articles</Header>
      {sorteddates.map(({node}) => {
        return (
        <ListContainer>
          <Date>{node.frontmatter.date}</Date>
          <Title to={`${node.frontmatter.path}`}>
            {node.frontmatter.title}
          </Title>
        </ListContainer>
      )})}
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
