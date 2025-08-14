/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // Enable React Fast Refresh for instant component updates
  reactStrictMode: !isProd, // Disable in dev for faster rendering
  
  trailingSlash: true,
  basePath: "",
  assetPrefix: "",
  
  images: {
    loader: "default",
    path: "../../../assets",
    domains: ['upload.wikimedia.org', 'prod.cdn-medias.jeuneafrique.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Turbopack configuration for faster bundling (when using --turbo flag)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // Performance optimizations
  experimental: {
    // Enable modern bundling optimizations
    optimizePackageImports: ['react-bootstrap', '@mui/material', '@mui/icons-material'],
    // optimizeCss: true,
  },
  
  // Optimize transpilation for specific packages that need it
  transpilePackages: [
    "@fullcalendar/common",
    "@fullcalendar/daygrid", 
    "@fullcalendar/interaction",
    "@fullcalendar/react",
    "@fullcalendar/timegrid",
    "@fullcalendar/list"
  ],
  
  // Development-specific webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Enable filesystem caching for faster subsequent builds
      config.cache = {
        type: 'filesystem',
        allowCollectingMemory: true,
        buildDependencies: {
          config: [__filename],
        },
      }
      
      // Don't override devtool in development - let Next.js handle it
      // config.devtool = 'eval-cheap-module-source-map'
      
      // Reduce bundle analysis overhead in development
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      }
    }
    
    return config
  },
  
  output: 'standalone',
}

module.exports = nextConfig
