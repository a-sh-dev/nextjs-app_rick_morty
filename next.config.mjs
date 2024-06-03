/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/info/characters',
        destination: '/info/characters/1',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
