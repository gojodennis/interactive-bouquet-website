/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/interactive-bouquet-website/',
  basePath: '/interactive-bouquet-website',
}

export default nextConfig;
