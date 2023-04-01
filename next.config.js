/** @type {import('next').NextConfig} */
require("dotenv").config()
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  // async headers() {
  //   return [
  //     {
  //       source: "/_next/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Origin", value: "http://localhost:3001/"},
  //       ],
  //     },
  //   ]
  // },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}