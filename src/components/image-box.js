import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
`;

export default ({ src }) => <Image src={src} />;
