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
    }
  ],
}
