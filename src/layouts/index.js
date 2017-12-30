import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import NavigationApp from "./navigation";
import "./grid.css";
import NavHeader from "../components/nav-header";
import LinkWrapper from "../components/link-wrapper";
import pageList from "../navigation/page-list";
import ImageBox from "../components/image-box";
import Wallpaper from "../assets/home_bookshelf.jpg";
import Header from "../components/header";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

const ContentWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 0.5fr 6fr;
  position: absolute;
`;
const Content = styled.div`
  height: 100%;
  position: relative;
`;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const isFullPage = path => {
  return path === "/";
};

const TemplateWrapper = ({ children, data, location }) => {
  const title = data.site.siteMetadata.title;
  const pages = pageList();
  return (
    <div>
      <Helmet title={title} />

      <Wrapper>
        <ImageBox src={Wallpaper} />
        {isFullPage(location.pathname) ? (
          children()
        ) : (
          <ContentWrapper>
            <NavHeader>
              {pages.map(page => (
                <LinkWrapper key={page.id}>{page.link}</LinkWrapper>
              ))}
            </NavHeader>
            <Content>{children()}</Content>
          </ContentWrapper>
        )}
      </Wrapper>
    </div>
  );
};
TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
