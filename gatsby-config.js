require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `JColetta`,
    description: `Jared Coletta Developer Portfolio`,
    author: `Jared Coletta`,
    siteUrl: `https://jcoletta.vercel.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://jcoletta.vercel.app/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,

      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/icons/favicon.png`, // This path is relative to the site's root
      },
    },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "GitHub",
    //     fieldName: "github",
    //     url: "https://api.github.com/graphql",
    //     fetchOptions: {},
    //   },
    // },

    `gatsby-plugin-offline`,
  ],
};
