/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/interactive-bouquet-website/",
  basePath: "/interactive-bouquet-website",
}

module.exports = nextConfig

