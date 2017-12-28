import React from "react";
import styled from "styled-components";
import ImageBox from "../components/image-box";
import {
  Howls,
  Noface,
  EightHands,
  Catbus,
  Mononeke,
  Haku,
  Kiki,
  Totoro,
  Scarecrow,
  Spiders
} from "../components/home-page-images";
import Title from "../components/home-titles";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Page = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const Center = styled.div`
  grid-area: 2 / 2 / 4 / 4;
  position: relative;
  opacity: 1;
  background: white;
`;

const Sidebox1 = styled.div`
  grid-area: 2 / 1 / 4 / 2;
  position: relative;
`;

const Sidebox2 = styled.div`
  grid-area: 2 / 4 / span 2 / span 1;
  position: relative;
`;

const Box = styled.div`
  position: relative;
`;
export default () => {
  return (
    <Wrapper>
      <Page>
        <Box>
          <ImageBox src={Howls} />
          <Title title="Tag1" />
        </Box>
        <Box>
          <ImageBox src={EightHands} />
        </Box>
        <Box>
          <ImageBox src={Noface} />
        </Box>
        <Box>
          <ImageBox src={Spiders} />
        </Box>
        <Sidebox1>
          <ImageBox src={Kiki} />
        </Sidebox1>
        <Center />
        <Sidebox2>
          <ImageBox src={Totoro} />
        </Sidebox2>
        <Box>
          <ImageBox src={Haku} />
        </Box>
        <Box>
          <ImageBox src={Scarecrow} />
        </Box>
        <Box>
          <ImageBox src={Mononeke} />
        </Box>
        <Box>
          <ImageBox src={Catbus} />
        </Box>
      </Page>
    </Wrapper>
  );
};
