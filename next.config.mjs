/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/interactive-bouquet-website/',
  basePath: '/interactive-bouquet-website',
  images: {
    unoptimized: true,
  },
}

export default nextConfig;

