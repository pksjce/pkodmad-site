import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import NavigationApp from "./navigation";
import "./grid.css";
import NavHeader from "../components/nav-header";
import LinkWrapper from "../components/link-wrapper";
import pageList from "../navigation/page-list";

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const TemplateWrapper = ({ children, data, location }) => {
  const title = data.site.siteMetadata.title;
  const pages = pageList();
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <NavHeader>
        {pages.map(page => (
          <LinkWrapper key={page.id}>{page.name}</LinkWrapper>
        ))}
      </NavHeader>
      <div className="wrapper">
        <div className={location.pathname === "/" ? "full-content" : "content"}>
          {children()}
        </div>
      </div>
    </div>
  );
};
TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
