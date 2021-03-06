import React from "react";
import Header from "../components/header";
import Paragraph, {
  SectionWrapper,
  TextWrapper
} from "../components/paragraph";
import Link from "gatsby-link";
import styled from "styled-components";
import Navigation from "../navigation";
import { mainColor } from "../utils/const";

const LinkWrapper = styled(Link)`
  color: black;
  &:hover {
    color: ${mainColor};
  }
  &:visited: {
    color: black;
  }
`;
class TagsPageRoute extends React.Component {
  render() {
    const allPosts = this.props.data.allMediumPub.edges;

    return (
      <Paragraph>
        <Navigation selected="writing" />
        <Header>Writings</Header>
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
    );
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
