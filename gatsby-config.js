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
    siteUrl: "https://stagingsupply.htm-mbs.com/",
    title: "staging-d7",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-less`,
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-drupal7`,
      options: {
        baseUrl: `https://stagingsupply.htm-mbs.com/`,
        apiBase: `file.json`, // optional, defaults to `restws_resource.json`
        basicAuth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD,
        },
      },
    },
    `gatsby-source-drupal7`,
    {
      resolve: `gatsby-source-drupal7`,
      options: {
        baseUrl: `https://stagingsupply.htm-mbs.com/`,
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
        baseUrl: `https://stagingsupply.htm-mbs.com/`,
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'allFiles',
        imagePath: 'nodes[].data.url',
      },
    },
  ],
};
