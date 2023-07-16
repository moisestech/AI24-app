/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: true
  },
  images: {
    domains: [
			'image.mux.com',
		],
  }
}

module.exports = nextConfig
