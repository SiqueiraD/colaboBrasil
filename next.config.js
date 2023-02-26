/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    //you need to insert BOTH KEYs in order to connect with Parse Server
    PARSE_APP_ID: process.env.PARSE_APP_ID,
    PARSE_REST_KEY: process.env.PARSE_REST_KEY
  }
}

module.exports = nextConfig
