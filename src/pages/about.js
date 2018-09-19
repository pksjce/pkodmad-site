import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import MyImage from "../components/my-image";
import Header from "../components/header";
import Paragraph, {
  SectionWrapper,
  TextWrapper
} from "../components/paragraph";
import Navigation from "../navigation";

class IndexPage extends React.Component {
  render() {
    return (
      <Paragraph>
        <Navigation selected="about" />
        <Header>PAVITHRA KODMAD</Header>
        <TextWrapper>
          I'm Pavithra. I work as a Developer at Atlassian Headquarters in
          Sydney. I specialize in Front-end Technologies and have good
          experience at making Production ready applications. I try to{" "}
          <Link to="/tech-stuff">blog</Link> my learnings sometimes. I have also{" "}
          <Link to="talks">spoken</Link> about tech that I'm fascinated by.
        </TextWrapper>
      </Paragraph>
    );
  }
}

export default IndexPage;
