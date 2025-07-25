/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/darkmodeknownvisitors/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/darkmodeknownvisitors' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
