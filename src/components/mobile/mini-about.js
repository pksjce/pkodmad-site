import React from "react";
import styled from "styled-components";
import MyImage from "../my-image";

const CenterPiece = styled.div`
  padding: 10px;
`;

const AboutWrapper = styled.div`
  width: fit-content;
  margin: 10px auto;
  background-color: darkslategrey;
  padding: 10px;
  color: white;
  border-radius: 10px;
`;

const NameText = styled.div`
  text-align: center;
  font-size: 2em;
  margin: 15px;
`;

const AboutText = styled.div`
  text-align: center;
`;
export default () => {
  return (
    <CenterPiece>
      <MyImage />
      <AboutWrapper>
        <NameText>Pavithra Kodmad</NameText>
        <AboutText>❤️ to code</AboutText>
        <AboutText>📚 Book nerd 🤓</AboutText>
        <AboutText>I ❤️ 🐈 and 🐕</AboutText>
      </AboutWrapper>
    </CenterPiece>
  );
};
