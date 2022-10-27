/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = {
  images: {
    domains: ["thumbs.dreamstime.com"],
    // https://thumbs.dreamstime.com
  },
  nextConfig,
};

// module.exports = nextConfig
