import React from "react";
import styled from "styled-components";

const Title = styled.div`
  position: absolute;
  align-items: center;
`;

export default ({ title }) => {
  return <Title>{title}</Title>;
};
