require("dotenv").config({
  path: '.env'
})

module.exports = {
  siteMetadata: {
    title: `McHacks`,
    description: `Dream, develop, and deploy at McHacks, Canada's favourite hackathon hosted annually at McGill University.`,
    author: `@hackmcgill`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        // The `spreadsheetId` is required, it is found in the url of your document:
        // https://docs.google.com/spreadsheets/d/<spreadsheetId>/edit#gid=0
        spreadsheetId: process.env.PEOPLE_GOOGLE_SPREADSHEET_IDENTIFIER,

        // Do not change. Unless data needs to be pulled from a specific sheet.
        typePrefix: "GoogleSpreadsheet",

        // Google Service Account
        credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS),

        // Default
        filterNode: () => true,
        mapNode: (node) => node,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `individualData`,
        path: `${__dirname}/src/components/Carousel`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mchacks`,
        short_name: `mchacks`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-120508272-3",
        head: true,
      },
    },
    `gatsby-plugin-client-side-redirect`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
