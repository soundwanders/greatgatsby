require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `JColetta`,
    description: `Jared Coletta Developer Portfolio`,
    author: `soundwanders`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#323299`,
        theme_color: `#323299`,
        display: `minimal-ui`,
        icon: `src/assets/icons/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
