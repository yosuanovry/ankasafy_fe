/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dzvtizxtq/**',
      },
    ],
  },
  env: {
    NEXT_APP_URL: process.env.NEXT_APP_URL,
  },
}