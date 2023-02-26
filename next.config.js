/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    //you need to insert BOTH KEYs in order to connect with Parse Server
    PARSE_APP_ID: 'PARSE_APP_ID',
    PARSE_REST_KEY: 'PARSE_REST_KEY'
  }
}

module.exports = nextConfig
