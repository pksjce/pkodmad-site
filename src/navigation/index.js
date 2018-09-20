import React from "react";
import getPageList from "./page-list";
import Link from "gatsby-link";
import styled from "styled-components";
import { mainColor } from "../utils/const";

const LinkWrapper = styled(Link)`
  background-color: ${props => (props.selected ? mainColor : `white`)};
  color: ${props => (props.selected ? `white` : `black`)};
  border: 1px solid white;
  margin-right: 20px;
  padding: 0 5px;
  box-sizing: border-box;
  &:hover {
    box-sizing: border-box;
    border: 1px solid ${mainColor};
  }
`;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const pageList = getPageList();

export default ({ selected }) => {
  return (
    <Wrapper>
      {pageList.map(page => {
        return (
          <LinkWrapper
            to={page.link}
            selected={selected === page.id}
            key={page.id}
          >
            {page.name}
          </LinkWrapper>
        );
      })}
    </Wrapper>
  );
};
