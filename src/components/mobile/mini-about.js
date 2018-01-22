import React from "react";
import styled from "styled-components";
import MyImage from "../my-image";
import Link from 'gatsby-link';
import Twitter from '../../assets/twitter.png';
import Github from '../../assets/github.png';

const CenterPiece = styled.div`
  padding: 10px;
`;

const AboutWrapper = styled.div`
  background-image: linear-gradient(white, lightyellow);
  box-shadow: 0 1px 2px grey;
  width: fit-content;
  margin: 10px auto;
  padding: 10px;
  color: black;
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

const SocialButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(2, 2fr) 1fr;
`

const GithubButton = styled.a`
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
`
const TwitterButton = styled.a`
  grid-column: 3;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
`

const Img = styled.img`
  height: 20px;
  width: 20px;
  margin-top: 32px;
`

const Label = styled.span``

export default () => {
  return (
    <CenterPiece>
      <MyImage />
      <AboutWrapper>
        <NameText>Pavithra Kodmad</NameText>
        <AboutText>❤️ to code</AboutText>
        <AboutText>📚 Book nerd 🤓</AboutText>
        <AboutText>I ❤️ <Link to='/cats'>🐈</Link> and 🐕</AboutText>
        <SocialButtons>
          <GithubButton href='https://github.com/pksjce'><Img src={Github} /><Label>pksjce</Label></GithubButton>
          <TwitterButton href='https://twitter.com/pkodmad'><Img src={Twitter} /><Label>pkodmad</Label></TwitterButton>
        </SocialButtons>
      </AboutWrapper>
    </CenterPiece>
  );
};
