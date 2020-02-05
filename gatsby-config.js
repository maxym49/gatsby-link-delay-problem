module.exports = {
  siteMetadata: {
    title: "App",
    description: `Extra app`,
    author: `MK`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `App`,
        short_name: `App`,
        start_url: `/`,
        background_color: `#fefefe`,
        theme_color: `#fcfcfc`,
        display: `standalone`,
        icon: `src/static/svg/icons/favicon.svg`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat:300,500,600,700,900', 'Palanquin:300,700', 'Lato:300,600,700']
        }
      }
    }
  ],
}
