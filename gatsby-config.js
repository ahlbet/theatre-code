module.exports = {
  siteMetadata: {
    title: `Theatre and Code`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
        resolve: "gatsby-source-filesystem",
        options: {
          path: `${__dirname}/src/pages`,
          name: "pages"
        }
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`
    ]
};
