/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/destinos/:path*',
        destination: '/destinos/:path*',
      },
    ]
  },
}

module.exports = nextConfig 