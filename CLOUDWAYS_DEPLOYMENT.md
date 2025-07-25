# Dual Deployment Guide: GitHub Pages + Cloudways

## Overview
This project is configured to work with both GitHub Pages (static export) and Cloudways (SSR) deployments using environment variables.

## GitHub Pages Deployment (Current)

### Current Setup
- **Repository**: `jakek14/darkmodeknownvisitors`
- **Branch**: `main`
- **Build Command**: `npm run build:github` or `npm run export`
- **Deployment**: Automatic via GitHub Actions

### Environment Variables
```bash
DEPLOYMENT_TYPE=github-pages
NODE_ENV=production
```

## Cloudways Deployment

### Prerequisites
- Cloudways account
- Git repository access
- Domain name (optional)

### Deployment Steps

#### 1. Create Application on Cloudways
1. Log into Cloudways dashboard
2. Click "Add Application"
3. Choose your server
4. Select "Node.js" as application type
5. Choose Node.js version 18 or higher
6. Set application name (e.g., "knownvisitors")
7. Click "Add Application"

#### 2. Configure Application Settings
1. Go to Application Settings
2. Set the following:
   - **Application Name**: knownvisitors
   - **Application URL**: your-domain.com
   - **PHP Version**: Not applicable (Node.js app)
   - **Node.js Version**: 18.x or higher

#### 3. Git Deployment
1. In Application Settings, go to "Deployment via Git"
2. Add your GitHub repository:
   - **Repository**: `jakek14/darkmodeknownvisitors`
   - **Branch**: `main`
3. Click "Deploy"

#### 4. Environment Variables (IMPORTANT)
Add these environment variables in Cloudways:
```bash
DEPLOYMENT_TYPE=cloudways
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

#### 5. Build Commands
Cloudways will automatically run:
- `npm install` (install dependencies)
- `npm run build` (builds for Cloudways by default)
- `npm start` (start the server)

#### 6. Domain Configuration
1. Go to "Domain Management"
2. Add your custom domain
3. Point DNS to Cloudways nameservers
4. Enable SSL certificate

## Configuration Details

### Dual Configuration System
The project uses `DEPLOYMENT_TYPE` environment variable to switch between:

#### GitHub Pages Mode (`DEPLOYMENT_TYPE=github-pages`)
- ✅ Static export (`output: 'export'`)
- ✅ Base path for repository name
- ✅ Unoptimized images
- ✅ Trailing slashes

#### Cloudways Mode (`DEPLOYMENT_TYPE=cloudways` or not set)
- ✅ Server-side rendering (SSR)
- ✅ Image optimization enabled
- ✅ Compression enabled
- ✅ No base path

### Available Scripts
```bash
npm run build          # Default build (Cloudways mode)
npm run build:github   # GitHub Pages build
npm run build:cloudways # Cloudways build
npm run export         # GitHub Pages export
```

## Important Notes

### Environment Variables
- **GitHub Pages**: `DEPLOYMENT_TYPE=github-pages`
- **Cloudways**: `DEPLOYMENT_TYPE=cloudways` (or leave unset)

### Performance Differences
- **GitHub Pages**: Static files, faster initial load, no server costs
- **Cloudways**: SSR, better SEO, dynamic features, server costs

### Troubleshooting
- If build fails on Cloudways, ensure `DEPLOYMENT_TYPE=cloudways`
- If GitHub Pages breaks, ensure `DEPLOYMENT_TYPE=github-pages`
- Check Node.js version (18+ required for Cloudways)

## Post-Deployment Testing
1. Test all pages and functionality
2. Verify images load correctly
3. Check mobile responsiveness
4. Test form submissions (if any)
5. Monitor performance

## Support
- Cloudways Support: Available 24/7
- GitHub Pages: Automatic deployment
- Next.js Documentation: https://nextjs.org/docs 