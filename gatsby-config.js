module.exports = {
  siteMetadata: {
    title: `Inkfolio`,
    description: `Tattoo Appointment Management`,
    author: `Inkfolio`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Inkfolio`,
        short_name: `Inkfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      },
      resolve: `gatsby-source-drupal7`,
      options: {
       baseUrl: `stagingsupply.htm-mbs.com`,
       apiBase: `restws_resource.json`,
      } 
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
  /* `gatsby-plugin-offline` */
  ]
};