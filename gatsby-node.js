const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const tagTemplate = path.resolve(`src/templates/tags-page.js`);
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
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
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log(node.frontmatter.tags);
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}
      });
    });
    const tagPageList = result.data.allMarkdownRemark.edges.reduce(
      (tagPageList, edge) => {
        const tags = edge.node.frontmatter.tags;
        if (!tagPageList[tags]) {
          tagPageList[tags] = [edge.node];
        } else {
          tagPageList[tags].push(edge.node);
        }
        return tagPageList;
      },
      {}
    );
    Object.keys(tagPageList).forEach(tagName => {
      const nodes = tagPageList[tagName];
      createPage({
        path: "/" + tagName,
        component: tagTemplate,
        context: {
          nodes,
          tagName
        }
      });
    });
  });
};
