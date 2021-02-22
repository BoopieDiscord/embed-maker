/* eslint-disable @typescript-eslint/no-var-requires */

const config = {
  target: "serverless",
  poweredByHeader: false,
  distDir: "build",
  reactStrictMode: true,
  redirects: async () =>
    Promise.resolve([
      {
        source: "/discord",
        destination: "https://discord.gg/FAtJTcNsvT",
        permanent: false,
      },
      {
        source: "/bot",
        destination:
          "https://discord.com/oauth2/authorize?client_id=754356511613911051&scope=bot&permissions=2147483638",
        permanent: false,
      },
    ]),
}

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const withSourceMaps = require("@zeit/next-source-maps")

module.exports = withSourceMaps(withBundleAnalyzer(config))
