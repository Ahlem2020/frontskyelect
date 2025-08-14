// Development configuration for instant changes
const development = {
  // Enable React Fast Refresh for instant updates
  fastRefresh: true,
  
  // Disable strict mode in development for faster rendering
  reactStrictMode: false,
  
  // Use faster source maps
  productionBrowserSourceMaps: false,
  
  // Optimize webpack for development
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Faster builds
      config.cache = {
        type: 'filesystem',
        allowCollectingMemory: true,
        buildDependencies: {
          config: [__filename],
        },
      }
      
      // Reduce bundle analysis overhead
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      }
      
      // Faster source maps
      config.devtool = 'eval-cheap-module-source-map'
    }
    
    return config
  }
}

module.exports = development
