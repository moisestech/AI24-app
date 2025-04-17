/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=0'
          }
        ],
      },
    ]
  },
  // Disable HTTPS redirects
  experimental: {
    forceSwcTransforms: true,
  },
  // Ensure we're not using any HTTPS-related features
  httpAgentOptions: {
    keepAlive: false
  },
  images: {
    domains: [
			'image.mux.com',
		],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    }
    config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx']
    return config
  },
}

module.exports = nextConfig
