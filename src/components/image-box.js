import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
  z-index: -1;
`;

export default ({ src }) => <Image src={src} />;
