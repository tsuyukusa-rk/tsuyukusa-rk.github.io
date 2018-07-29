const liveSchedule = require('./config/live-schedule.js')
const siteMetaData = require('./config/site-meta-data.js')
const poetry = require('./config/poetry.js')

module.exports = {
  siteMetadata: {
    ...siteMetaData,
    liveSchedule: liveSchedule,
    poetry: poetry
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
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "fogGoat",
        short_name: "fogGoat",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        // icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`
  ],
}
