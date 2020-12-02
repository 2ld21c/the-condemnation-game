module.exports = {
    siteMetadata: {
      title: `The Condemnation Game`,
      description: `Official site of the book The Condemnation Game, an unflinching look at the human condition.`,
      author: `Will Jay`,
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [`gatsby-remark-responsive-iframe`]
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `articles`,
          path: `${__dirname}/articles`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Special Elite`,
            `Questrial`,
            `Raleway`,
            `Rubik`,
            `Orbitron`,
            `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
          ],
          display: 'swap'
        }
    },

    ],
  }
  