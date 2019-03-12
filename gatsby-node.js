const path = require("path");
const kebabCase = require("lodash/kebabCase");

const webpackLodashPlugin = require(`lodash-webpack-plugin`);

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const tagTemplate = path.resolve(`src/templates/tags-page.js`);
  const mediumPostTemplate = path.resolve(`src/templates/medium-post.js`);
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 150)
            html
            id
            frontmatter {
              date
              path
              title
              tags
            }
          }
        }
      }
      allMediumPub(limit: 1000) {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      console.log(result);
      return Promise.reject(result.errors);
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}
      });
    });
    result.data.allMediumPub.edges.forEach(({ node }) => {
      
      createPage({
        path: node.path,
        component: mediumPostTemplate
      });
    });
    const tagPageList = result.data.allMarkdownRemark.edges.reduce(
      (tagPageList, edge) => {
        const tags = edge.node.frontmatter.tags;
        tags.forEach(() => {
          if (!tagPageList[tags]) {
            tagPageList[tags] = [edge.node];
          } else {
            tagPageList[tags].push(edge.node);
          }
        });
        return tagPageList;
      },
      {}
    );
    Object.keys(tagPageList).forEach(tagName => {
      const nodes = tagPageList[tagName];
      createPage({
        path: "/tags/" + kebabCase(tagName),
        component: tagTemplate,
        context: {
          nodes,
          tagName
        }
      });
    });
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case `build-javascript`:
      config.plugin(`Lodash`, webpackLodashPlugin, null);

      break;
  }

  return config;
};
