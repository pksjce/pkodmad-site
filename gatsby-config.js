module.exports = {
  siteMetadata: {
    title: `Pavithra Kodmad`,
    author: `Pavithra Kodmad`
  },
  pathPrefix: "/",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: "posts"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: "data"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/cat_page`,
        name: "cat_page"
      }
    },
    {
      resolve: `gatsby-plugin-medium-publication`
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [] // gatsby-remark-prismjs, gatsby-remark-copy-linked-files, gatsby-remark-images
      }
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`
  ]
};
