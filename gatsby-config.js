module.exports = {
  siteMetadata: {
    title: `ARMSec 2019 :: Security Conference`,
    description: `ArmSec Conference is an annual international cybersecurity conference aiming at strengthening the cybersecurity community in Armenia and discussing the latest cybersecurity problems. Participants of the conference will be both Armenian and foreign leading specialists.`,
    canonicalUrl: 'https://www.armsec.org',
    image: 'https://www.armsec.org/armsec.png',
    social: {
      twitter: '@armsec',
      fbAppID: '',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ArmSec Conference',
        short_name: 'ArmSec Conference',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'src/favicon.png',
        description: 'ArmSec Conference is an annual international cybersecurity conference aiming at strengthening the cybersecurity community in Armenia and discussing the latest cybersecurity problems. Participants of the conference will be both Armenian and foreign leading specialists',
        lang: 'en',
        icon_options: {
          purpose: 'any maskable',
        },
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-8895497-4`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-offline`,
  ],
}
