import React from "react";
import Header from "../components/header";
import Paragraph, { TextWrapper } from "../components/paragraph";
import styled from "styled-components";
import Navigation from "../navigation";
import { mainColor } from "../utils/const";

const Name = styled.div`
  font-weight: bold;
  font-size: 1.3em;
  text-decoration: underline;
`;
const Description = styled.div`
  margin: 5px 0;
`;
const Conference = styled.div`
  margin: 5px 0;
`;
const Reference = styled.div`
  margin: 5px 0;
`;
const Youtube = styled.div`
  margin: 5px 0;
  a {
    color: ${mainColor};
  }
`;
const Slides = styled.div`
  margin: 5px 0;
  a {
    color: ${mainColor};
  }
`;

export default ({ data }) => {
  const talkList = data.allTalksJson.edges;
  return [
    <Paragraph>
      <Navigation selected="talks" />
      <Header>Talks</Header>
      {talkList.map(talks => {
        const { node } = talks;
        const {
          id,
          name,
          description,
          conference,
          conf_ref,
          location,
          youtube,
          slides
        } = node;
        return (
          <TextWrapper>
            <Name>{name}</Name>
            <Description>{description}</Description>
            <Conference>{`${conference} in ${location}`}</Conference>
            {conf_ref && (
              <Reference>
                <a href={conf_ref}>{`Talk details`}</a>
              </Reference>
            )}
            {youtube && (
              <Youtube>
                <a href={youtube} target="_blank">
                  Talk Video
                </a>
              </Youtube>
            )}
            {slides && (
              <Slides>
                <a href={slides} target="_blank">{`Presentation`}</a>
              </Slides>
            )}
          </TextWrapper>
        );
      })}
    </Paragraph>
  ];
};

export const talksQuery = graphql`
  query TalksQuery {
    allTalksJson {
      edges {
        node {
          id
          name
          description
          conference
          conf_ref
          location
          youtube
          slides
        }
      }
    }
  }
`;
