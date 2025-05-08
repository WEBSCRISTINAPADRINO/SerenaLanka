/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        '**/*.txt',
      ],
    },
  },
}

module.exports = nextConfig 