/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: 'Cassiopeia Petrolíferos',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    // `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //     option: {
    //       trackingId: ``,
    //     }
    // }
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/icon.png',
      },
    },
    // Revisar como implementar esta parte!!!
    // {
    //   resolve: `gatsby-plugin-sharp`,
    //   options: {
    //     // Defaults used for gatsbyImageData and StaticImage
    //     defaults: {},
    //     // Relates to "options.failOn" in https://sharp.pixelplumbing.com/api-constructor#parameters
    //     failOn: `warning`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `pages`,
        // Path to the directory
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
  ],
}
