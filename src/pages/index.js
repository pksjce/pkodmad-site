import React from "react";
import styled from "styled-components";

import Title from "../components/home-titles";

import MyImage from "../components/my-image";
import { Menu, MiniAbout } from "../components/mobile";

const Page = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  @media (max-width: 420px) {
    display: none;
  }
`;

const MobilePage = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 6fr 1fr;
  @media (min-width: 420px) {
    display: none;
  }
  z-index: 1;
`;

const Center = styled.div`
  @media (max-width: 420px) {
    z-index: 0;
  }
  @media (min-width: 420px) {
    grid-area: 2 / 2 / 4 / 4;
    position: relative;
    opacity: 1;
    background: white;
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
      </MobilePage>
      <Page>
        <Center>
          <MyImage />
        </Center>
      </Page>
    </div>
  );
};
