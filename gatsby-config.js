
module.exports = {
  siteMetadata: {
    title: `Pavithra Kodmad`,
    author: `Pavithra Kodmad`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: 'posts',
      },
    },{
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [] // gatsby-remark-prismjs, gatsby-remark-copy-linked-files, gatsby-remark-images
      }
    }],
}
