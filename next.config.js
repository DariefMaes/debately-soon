/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://debately-soon.sanity.studio/",
      },
    ];
  },
};

module.exports = nextConfig;
