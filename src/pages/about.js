import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import MyImage from "../components/my-image";
import Header from "../components/header";
import Paragraph, {
  SectionWrapper,
  TextWrapper
} from "../components/paragraph";

class IndexPage extends React.Component {
  render() {
    return (
      <SectionWrapper>
        <Paragraph>
          <Header fontSize={"2em"}>PAVITHRA KODMAD</Header>
          <TextWrapper>
            I'm Pavithra. I work as a Developer at Atlassian Headquarters in
            Sydney. I specialize in Front-end Technologies and have good
            experience at making Production ready applications. I try to{" "}
            <Link to="/tech-stuff">blog</Link> my learnings sometimes. I have
            also <Link to="talks">spoken</Link> about tech that I'm fascinated
            by.
          </TextWrapper>
        </Paragraph>
      </SectionWrapper>
    );
  }
}

export default IndexPage;
