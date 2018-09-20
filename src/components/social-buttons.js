import React from "react";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import styled from "styled-components";

const IconImg = styled.img`
  height: 40px;
  margin-top: 20px;
`;
const Wrapper = styled.div`
  text-align:center;
  width: 100%;
`;
const GithubButton = styled.a`
  margin-right: 20px;
`;
const TwitterButton = styled.a`
 
`;

const IconLabel = styled.span`
`;
export default () => {
  return (
    <Wrapper>
      <GithubButton href="https://github.com/pksjce" target="_blank">
        <IconImg src={github} />
      </GithubButton>
      <TwitterButton href="https://twitter.com/pkodmad" target="_blank">
        <IconImg src={twitter} />
      </TwitterButton>
    </Wrapper>
  );
};
