/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  images: {
    domains: [
      "res.cloudinary.com",
      "cdndev2.ntlogistics.vn",
      "kddi-h.assetsadobe3.com",
    ],
  },
};

module.exports = nextConfig;
