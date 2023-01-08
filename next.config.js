/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PB_API: process.env.PB_API
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
