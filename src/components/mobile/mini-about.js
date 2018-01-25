import React from "react";
import styled from "styled-components";
import MyImage from "../my-image";
import Link from 'gatsby-link';
import SocialButtons from '../social-buttons';

const CenterPiece = styled.div`
  padding: 10px;
`;

const AboutWrapper = styled.div`
  background: #00000087;
  box-shadow: 0 1px 2px grey;
  width: fit-content;
  margin: 10px auto;
  padding: 10px;
  color: white;
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

const Label = styled.span``

export default () => {
  return (
    <CenterPiece>
      <AboutWrapper>
        <MyImage />

        <NameText>Pavithra Kodmad</NameText>
        <AboutText>❤️ to code</AboutText>
        <AboutText>📚 Book nerd 🤓</AboutText>
        <AboutText>I ❤️ <Link to='/cats'>🐈</Link> and 🐕</AboutText>
        <SocialButtons />
      </AboutWrapper>
    </CenterPiece>
  );
};
