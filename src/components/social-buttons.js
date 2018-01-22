import React from "react";
import twitter from '../assets/twitter.png';
import github from '../assets/github.png';
import styled from 'styled-components';

const IconImg = styled.img`
  height: 40px;
  margin-top: 20px;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: white;
`
const GithubButton = styled.a`
  grid-column: 2;
  display:grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
`
const TwitterButton = styled.a`
  grid-column: 3;
  display:grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
`

const IconLabel = styled.span`
`
export default () => {
  return <Wrapper>
    <GithubButton href='https://github.com/pksjce' target="_blank">
      <IconImg src={github} /><IconLabel>pksjce</IconLabel>
    </GithubButton>
    <TwitterButton href='https://twitter.com/pkodmad' target="_blank">

      <IconImg src={twitter} /><IconLabel>pkodmad</IconLabel>
    </TwitterButton>
  </Wrapper>;
};
