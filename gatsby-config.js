module.exports = {
  siteMetadata: {
    title: `Inkfolio`,
    description: `Tattoo Appointment Management`,
    author: `Inkfolio`
  },
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-drupal7`,
      options: {
       baseUrl: `https://mbs-signsupply.com/`,
       apiBase: `restws_resource.json`,
      },
          
    },
  /* `gatsby-plugin-offline` */
  ]
};