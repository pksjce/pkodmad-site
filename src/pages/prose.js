import React from "react";
import Header from "../components/header";
import Paragraph, {
  SectionWrapper,
  TextWrapper
} from "../components/paragraph";
import Link from "gatsby-link";
import styled from "styled-components";

const LinkWrapper = styled(Link)`
  color: red;

  &:visited {
    color: brown;
  }
`;
class TagsPageRoute extends React.Component {
  render() {
    const allPosts = this.props.data.allMediumPub.edges;

    return [
      <Header fontSize={"1.6em"}>Writings</Header>,
      <SectionWrapper>
        <Paragraph>
          <ul>
            {allPosts.map(({ node }) => (
              <li key={node.id}>
                <LinkWrapper
                  style={{
                    textDecoration: `none`
                  }}
                  to={node.path}
                >
                  {node.title[0]}
                </LinkWrapper>
              </li>
            ))}
          </ul>
        </Paragraph>
      </SectionWrapper>
    ];
  }
}

export default TagsPageRoute;

export const pageQuery = graphql`
  query MediumQuery {
    allMediumPub(limit: 1000) {
      edges {
        node {
          id
          path
          title
        }
      }
    }
  }
`;
