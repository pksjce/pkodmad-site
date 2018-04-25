import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import NavigationApp from "./navigation";
import "./grid.css";
import "../assets/prism.css";
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
`;

const ContentWrapper = styled.div`
  @media (min-width: 420px) {
    width: 100%;
    height: 100%;
  }
`;
const Content = styled.div`
  height: 100%;
  position: relative;
`;

const Footer = styled.div`
  color: white;
  font-size: 0.7em;
  position: sticky;
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
      <Helmet title={title}>
        <link rel="shortcut icon" href="pk-favicon.ico" type="image/x-icon" />
      </Helmet>

      <Wrapper>
        <ImageBox src={Wallpaper} />
        {isFullPage(location.pathname)
          ? children()
          : [
              <ContentWrapper>
                <NavHeader>
                  {pages.map(page => (
                    <LinkWrapper
                      key={page.id}
                      activeStyle={{
                        borderBottom: "3px solid white"
                      }}
                      to={page.link}
                    >
                      {page.name}
                    </LinkWrapper>
                  ))}
                </NavHeader>,
                <Content>{children()}</Content>
              </ContentWrapper>
            ]}
      </Wrapper>
    </div>
  );
};
TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
