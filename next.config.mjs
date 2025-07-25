/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages deployment (when DEPLOYMENT_TYPE=github-pages)
  ...(process.env.DEPLOYMENT_TYPE === 'github-pages' && {
    output: 'export',
    trailingSlash: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/darkmodeknownvisitors/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/darkmodeknownvisitors' : '',
    images: {
      unoptimized: true
    }
  }),
  
  // Cloudways deployment (default or when DEPLOYMENT_TYPE=cloudways)
  ...(process.env.DEPLOYMENT_TYPE !== 'github-pages' && {
    images: {
      unoptimized: false
    },
    compress: true,
    poweredByHeader: false,
    experimental: {
      serverComponentsExternalPackages: []
    }
  })
};

export default nextConfig;
