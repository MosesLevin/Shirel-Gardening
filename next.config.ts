import { NextConfig } from 'next'
import { Configuration } from 'webpack'

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    // Rule for importing SVGs as React components
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      issuer: {
        and: [/\.[jt]sx?$/], // Ensure it applies only to JS/TS files
      },
    })

    // Rule for using SVGs as static assets in CSS
    config.module?.rules?.push({
      test: /\.svg$/,
      type: 'asset',
      issuer: {
        and: [/\.css$/], // Ensure it applies only to CSS files
      },
    })

    return config
  },
}

export default nextConfig
