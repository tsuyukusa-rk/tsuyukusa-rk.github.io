const liveSchedule = require('./config/live-schedule.js')
const siteMetaData = require('./config/site-meta-data.js')

console.log(liveSchedule)

module.exports = {
  siteMetadata: {
    ...siteMetaData,
    liveSchedule: liveSchedule
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
