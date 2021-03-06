import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { mainColor } from "../../utils/const";

const MenuGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  z-index: 1;
  grid-gap: 5px;
  padding: 5px;
`;

const MenuItem = styled(Link)`
  text-align: center;
  text-decoration: none;
  padding: 5px;
  border: 1px solid black;
  color: ${mainColor};
`;

export default () => {
  return (
    <MenuGrid>
      <MenuItem to="/about">About</MenuItem>
      <MenuItem to="/tech-stuff">Articles</MenuItem>
      <MenuItem to="/talks">Talks</MenuItem>
      <MenuItem to="/prose">Writings</MenuItem>
    </MenuGrid>
  );
};
