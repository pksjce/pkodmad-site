import React from "react";
import styled from "styled-components";
import { mainColor } from "../utils/const";

const Wrapper = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
`;
export default () => {
  return [
    <Wrapper>
      Powered by &nbsp;
      <a
        style={{ color: mainColor }}
        href="https://www.gatsbyjs.org"
      >
        GatsbyJs
      </a>
    </Wrapper>
  ];
};
