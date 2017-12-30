import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

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
  background-image: linear-gradient(firebrick, brown);
  border-radius: 20px;
  box-shadow: 0 1px 2px #ac1d1c;
  text-align: center;
  text-decoration: none;
  padding: 5px;
  color: white;
  text-shadow: 0 1px 2px #ac1d1c;
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
