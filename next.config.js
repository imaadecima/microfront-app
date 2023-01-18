require('@module-federation/nextjs-mf/src/include-defaults')

const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

module.exports = {
  webpack(config, options) {
    const { isServer } = options
    config.plugins.push(
      new NextFederationPlugin({
        name: 'next1',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          fe1: `fe1@https://microfront-header.vercel.app/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
        },
      })
    )

    return config
  },
}
