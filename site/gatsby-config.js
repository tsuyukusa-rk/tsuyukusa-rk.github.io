module.exports = {
  siteMetadata: {
    title: 'fogGoat',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8
      },
    }
  ],
}
