module.exports = {
  siteMetadata: {
    title: `ARMSec 2018 :: Security Conference`,
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
      resolve: `gatsby-plugin-favicon`,
      options: {
        appName: 'ArmSec Conference', // Inferred with your package.json
        appDescription: 'ArmSec Conference is an annual international cybersecurity conference aiming at strengthening the cybersecurity community in Armenia and discussing the latest cybersecurity problems. Participants of the conference will be both Armenian and foreign leading specialists',
        developerName: 'Vahe Evoyan',
        developerURL: 'https://evoyan.org',
        lang: 'en-US',
        background: '#000',
        theme_color: '#000',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
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
