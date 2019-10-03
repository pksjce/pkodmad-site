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
        <AboutText><span role='img'>❤️</span> to code</AboutText>
        <AboutText>📚 Book nerd 🤓</AboutText>
        <AboutText>
          I ❤️ <Link to="/cats">🐈</Link> and 🐕
        </AboutText>
        <SocialButtons />
      </AboutWrapper>
    </CenterPiece>
  );
};
