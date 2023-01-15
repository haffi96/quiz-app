/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PB_API: process.env.PB_API,
    PB_URL: process.env.PB_URL
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
