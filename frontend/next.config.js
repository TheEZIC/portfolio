/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.DEV === "true" ? "standalone" : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  webpackDevMiddleware: (config) => {
    if (process.env.DEV === "true") {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    return config;
  },
}

module.exports = nextConfig
