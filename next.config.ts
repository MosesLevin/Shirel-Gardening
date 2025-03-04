import { NextConfig } from 'next'
import { RuleSetRule } from 'webpack'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // navbar
      {
        source: `/${encodeURIComponent('גינון')}`, // Hebrew path
        destination: '/gardening', // Internal ASCII-friendly path
      },
      {
        source: `/${encodeURIComponent('אודות')}`, // Hebrew path
        destination: '/about', // Internal ASCII-friendly path
      },
      {
        source: `/${encodeURIComponent('כתבות')}`, // Hebrew path
        destination: '/articles', // Internal ASCII-friendly path
      },
      {
        source: `/${encodeURIComponent('צור-קשר')}`, // Hebrew path
        destination: '/contact', // Internal ASCII-friendly path
      },
      // services
      {
        source: `/${encodeURIComponent('שירותים')}`, // Hebrew path
        destination: '/services', // Internal ASCII-friendly path
      },
      {
        source: `/${encodeURIComponent('שירותים')}/:slug*`, // Hebrew path
        destination: '/services/:slug*', // Internal ASCII-friendly path
      },
    ]
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(
      (rule: RuleSetRule) =>
        rule.test instanceof RegExp && rule.test.test('.svg')
    )

    if (fileLoaderRule) {
      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: {
            not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
          }, // exclude if *.svg?url
          use: {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        }
      )
    }

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
