const config = require("./src/data/config");

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    author: config.author,
  },
  plugins: [
   {
  resolve: "gatsby-source-graphql",
 options: {
  // This type will contain remote schema Query type
  typeName: "Query",
  // This is field under which it's accessible
  fieldName: "blah",
  // Url to query from
  url: "http://10.113.34.59:4000/graphql",
  // this is URL where served exposed its service in local
 },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "SWAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "swapi",
        // Url to query from
        url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.defaultTitle,
        short_name: "starter",
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icon: "./static/favicon/favicon-512.png",
      },
    },
    "gatsby-plugin-offline",
  ],
};
