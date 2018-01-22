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
  border-radius: 5px;
`;

const ContentWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 0.5fr 6fr 0.1fr;
  position: absolute;
`;
const Content = styled.div`
  height: 100%;
  position: relative;
`;

const Footer = styled.div`
  color: white;
  font-size: 0.7em;
  margin: 0 20px 20px 0;
  text-align: right;
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
        <ContentWrapper>
          {isFullPage(location.pathname)
            ? children()
            : [
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
            ]}
          <Footer>
            <div style={{ textDecoration: "underline" }}>Credits</div>
            <div>
              Powered by{" "}
              <a
                style={{ color: "#b2d4ff" }}
                href="https://www.gatsbyjs.org"
                target="_blank"
              >
                GatsbyJs
              </a>
            </div>
            <div>
              <a
                style={{ color: "#b2d4ff" }}
                href="http://tikspor.com/g/2017/01/inspiring-bookshelf-background-for-ipad-images-decoration-ideas.jpg"
                target="_blank"
              >
                Background Image
              </a>
            </div>
          </Footer>
        </ContentWrapper>
      </Wrapper>
    </div>
  );
};
TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
