/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@square/web-sdk', 'react-square-web-payments-sdk']);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = withTM({
  reactStrictMode: false,
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      stream: require.resolve('stream-browserify'),
    };
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
      ],
    });
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: false,
  },
});
