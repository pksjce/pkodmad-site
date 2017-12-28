import React from "react";
import Header from "../components/header";
import Paragraph, { SectionWrapper } from "../components/paragraph";
import Link from "gatsby-link";

export default ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  return [
    <div>
      <h1>Tech Articles</h1>
      <ul>
        {nodes.map(node => (
          <li key={node.id}>
            <Link
              style={{
                textDecoration: `none`
              }}
              to={`${node.frontmatter.path}`}
            >
              {node.frontmatter.title} ({node.timeToRead} mins)
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
