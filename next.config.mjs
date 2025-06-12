/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/sayan-portfolio',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
