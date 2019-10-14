import React from "react";
import styled from "styled-components";
import MyImage from "../my-image";
import Link from "gatsby-link";
import SocialButtons from "../social-buttons";
import { mainColor } from "../../utils/const";

const CenterPiece = styled.div`
  padding: 10px;
`;

const AboutWrapper = styled.div`
  border: 2px solid ${mainColor};
  width: fit-content;
  margin: 10px auto;
  padding: 10px;
  border-radius: 10px;
`;

const NameText = styled.div`
  text-align: center;
  font-size: 2em;
  line-height: 1em;
  margin: 15px;
  font-family: "Special Elite", cursive;
`;

const AboutText = styled.div`
  text-align: center;
`;


export default () => {
  return (
    <CenterPiece>
      <AboutWrapper>
        <MyImage />

        <NameText>Pavithra Kodmad</NameText>
        <AboutText><span role='img' aria-label='heart emoji'>❤️</span> to code</AboutText>
        <AboutText><span role='img' aria-label='books emoji'>📚</span>Book nerd <span role='img' aria-label='spectacked emoji'>🤓</span></AboutText>
        <AboutText>
          I <span role='img' aria-label='heart emoji'>❤️</span> <Link to="/cats"><span role='img' aria-label='cat emoji'>🐈</span></Link> and <span role='img' aria-label='dog emoji'>🐕</span>
        </AboutText>
        <SocialButtons />
      </AboutWrapper>
    </CenterPiece>
  );
};
