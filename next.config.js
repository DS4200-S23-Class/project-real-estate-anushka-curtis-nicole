/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dvvjkgh94f2v6.cloudfront.net'],
  },
  headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
};

module.exports = nextConfig;
