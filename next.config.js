/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@square/web-sdk', 'react-square-web-payments-sdk']);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = withTM({
  reactStrictMode: false,
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      stream: require.resolve('stream-browserify'),
    };
    
    // Add MiniCssExtractPlugin if needed
    if (!config.plugins) {
      config.plugins = [];
    }
    config.plugins.push(new MiniCssExtractPlugin());
    
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
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
