/** @type {import('next').NextConfig} */

// allow images from https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5c86971f21359e93b7_Project%201-p-1600.jpeg
module.exports = {
  images: {
    domains: ["uploads-ssl.webflow.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/videos/", // Path where the videos will be copied in the build folder
          publicPath: "/_next/static/videos/", // Public URL path to access the videos on the server
        },
      },
    });
    return config;
  },
};
