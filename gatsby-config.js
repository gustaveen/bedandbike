module.exports = {
  siteMetadata: {
    title: 'Bed and bike Öckerö',
    rrom: 'hej',
    rooms: [
      {
        name: 'room1',
        people: '2-3',
        bed: '2 x 90 cm',
        price: '1050 kr',
      },
      {
        name: 'room2',
        people: '2',
        bed: '2 x 90 cm',
        price: '1050 kr',
      }
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}

