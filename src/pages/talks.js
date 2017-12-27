import React from "react";
import Header from "../components/header";
import Paragraph, { SectionWrapper } from "../components/paragraph";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-row: 25% 25% 25% 25%s;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

const Items = styled.div`
  width: 250px;
  height: 250px;
  border: 4px solid black;
`;

const ItemNested = styled.div`
  margin: 20px;
  width: 160px;
  height: 210px;
`;

export default () => {
  return [
    <Header fontSize={36}>Talks</Header>,
    <SectionWrapper>
      <Grid>
        <Items>
          <ItemNested>1</ItemNested>
        </Items>
        <Items>
          <ItemNested>1</ItemNested>
        </Items>
        <Items>
          <ItemNested>1</ItemNested>
        </Items>
        <Items>
          <ItemNested>1</ItemNested>
        </Items>
        <Items>
          <ItemNested>1</ItemNested>
        </Items>
        <Items>
          <ItemNested>1</ItemNested>
        </Items>
        <Items>
          <ItemNested>1</ItemNested>
        </Items>
        <Items>
          <ItemNested>1</ItemNested>
        </Items>
      </Grid>
    </SectionWrapper>
  ];
};
