module.exports = {
  plugins: [
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
    `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `UA-93349937-2`,
    //   },
    // },
    // `gatsby-plugin-offline`,
  ],
}
