import React from "react";
import Link from "gatsby-link";
import kebabCase from "lodash/kebabCase";
import Header from "../components/header";
import Paragraph, { SectionWrapper } from "../components/paragraph";

class TagsPageRoute extends React.Component {
  render() {
    const allTags = this.props.data.allMarkdownRemark.group;

    return (
      <Paragraph>
        <Header fontSize={"3em"}>Tags</Header>
        <ul>
          {allTags.map(tag => (
            <li key={tag.fieldValue}>
              <Link
                style={{
                  textDecoration: `none`
                }}
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Paragraph>
    );
  }
}

export default TagsPageRoute;

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
