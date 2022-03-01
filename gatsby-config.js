module.exports = {
  siteMetadata: {
    title: `Inkfolio`,
    description: `Tattoo Appointment Management`,
    author: `Inkfolio`
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal7`,
      options: {
       baseUrl: `https://stagingsupply.htm-mbs.com/`,
       apiBase: `commerce_product.json`,
      } 
    },
  /* `gatsby-plugin-offline` */
  ]
};