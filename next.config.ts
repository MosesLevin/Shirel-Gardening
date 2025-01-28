import { NextConfig } from 'next'
import { RuleSetRule } from 'webpack'

const nextConfig: NextConfig = {
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
