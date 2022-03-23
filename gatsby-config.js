const path = require('path')
const fs = require('fs');
const gracefulFs = require('graceful-fs');
const { resolve } = require('path');
gracefulFs.gracefulify(fs);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    siteUrl: "http://stagingsupply.htm-mbs.com/",
    title: "staging-d7",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-less`,
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-drupal7`,
      options: {
        baseUrl: `http://stagingsupply.htm-mbs.com/`,
        apiBase: `restws_resource.json`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-drupal7`,
      options: {
        baseUrl: `http://stagingsupply.htm-mbs.com/`,
        apiBase: `restws_resource.json`,
      },
    },
  ],
};
