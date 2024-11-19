/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        port: '',
        pathname: '/content/v1/**'
      },
      {
        protocol: 'http',
        hostname: '116.109.42.111',
        port: '1337',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: '172.30.10.85',
        port: '1337',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
        port: '',
        pathname: '/embed'
      }
    ]
  }
}

export default nextConfig
