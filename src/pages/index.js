import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import Title from "../components/home-titles";

import MyImage from "../components/my-image";
import { Menu, MiniAbout } from "../components/mobile";
import { TextWrapper } from "../components/paragraph";
import SocialButtons from "../components/social-buttons";
import Footer from "../components/footer";
import { mainColor } from "../utils/const";

const Page = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  @media (max-width: 420px) {
    display: none;
  }
`;

const MobilePage = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  grid-template-rows: 6fr 1fr 1fr;
  @media (min-width: 420px) {
    display: none;
  }
`;

const Center = styled.div`
  @media (max-width: 420px) {
    z-index: 0;
  }
  @media (min-width: 420px) {
    grid-area: 2 / 2 / 4 / 4;
    position: relative;
    opacity: 1;
    border: 2px solid ${mainColor};
  }
`;

const Sidebox1 = styled.div`
  @media (max-width: 420px) {
    display: none;
  }
  @media (min-width: 420px) {
    grid-area: 2 / 1 / 4 / 2;
    position: relative;
  }
`;

const Sidebox2 = styled.div`
  @media (max-width: 420px) {
    display: none;
  }
  @media (min-width: 420px) {
    grid-area: 2 / 4 / span 2 / span 1;
    position: relative;
  }
`;

const LinkColor = styled(Link)`
  color: ${mainColor};
`;

const Name = styled.div`
  font-family: "Special Elite", cursive;
  font-size: 3em;
  text-align: center;
  margin: 20px 0;
`;

const Box = styled.div`
  @media (max-width: 420px) {
    display: none;
  }
  position: relative;
`;

export default () => {
  return (
    <div>
      <MobilePage>
        <Center>
          <MiniAbout />
        </Center>
        <Menu />
        <Footer />
      </MobilePage>
      <Page>
        <Center>
          <MyImage />
          <Name>Pavithra Kodmad</Name>
          <TextWrapper>
            I'm Pavithra. I work as a Developer at Atlassian in Sydney. I
            specialize in Front-end Technologies and have good experience at
            making Production ready applications. I
            <LinkColor to="/tech-stuff"> blog</LinkColor> my learnings
            sometimes. I have also <LinkColor to="/talks">spoken </LinkColor>
            about tech that I'm fascinated by. Reading is my most notorious
            passion. My most neglected hobbies are
            <LinkColor to="/prose"> writing</LinkColor> and drawing. I love{" "}
            <LinkColor to="/cats"> cats </LinkColor>
          </TextWrapper>
          <SocialButtons />
        </Center>
        <Footer />
      </Page>
    </div>
  );
};
