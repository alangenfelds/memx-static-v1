module.exports = {
  siteMetadata: {
    title: `MEMX v1`,
    description: `MEMX Static v1`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    "gatsby-plugin-ffmpeg",
    {
      resolve: `gatsby-remark-videos`,
      options: {
        pipelines: [
          {
            name: "vp9",
            transcode: chain =>
              chain
                .videoCodec("libvpx-vp9")
                .noAudio()
                .outputOptions(["-crf 20", "-b:v 0"]),
            maxHeight: 480,
            maxWidth: 900,
            fileExtension: "webm",
          },
          {
            name: "h264",
            transcode: chain =>
              chain.videoCodec("libx264").noAudio().videoBitrate("1000k"),
            maxHeight: 480,
            maxWidth: 900,
            fileExtension: "mp4",
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/persons`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "videos",
        path: `${__dirname}/src/video`,
      },
    },
    {
      resolve: `gatsby-remark-copy-linked-files`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `memx-static-v1`,
        short_name: `Memx`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
