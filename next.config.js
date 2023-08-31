/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "./",
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
