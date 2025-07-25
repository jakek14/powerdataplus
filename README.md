# KnownVisitors - Dark Mode Landing Page

A modern, responsive landing page for KnownVisitors with dark mode design and smooth animations.

## Features

- 🌙 Dark mode design with green accent colors
- 📱 Fully responsive mobile-first design
- ⚡ Fast performance with Next.js 15
- 🎨 Smooth animations and transitions
- 🔧 Dual deployment support (GitHub Pages + Cloudways)
- 📊 Interactive timeline and dashboard components

## Deployment

This project supports dual deployment:
- **GitHub Pages**: Static export with automatic deployment
- **Cloudways**: SSR deployment with full optimization

See `CLOUDWAYS_DEPLOYMENT.md` for detailed deployment instructions.

## Development

```bash
npm install
npm run dev
```

## Build Commands

```bash
npm run build          # Default (Cloudways mode)
npm run build:github   # GitHub Pages build
npm run build:cloudways # Cloudways build
npm run export         # GitHub Pages export
```

## Recent Updates

- ✅ Fixed mobile scroll issues with timeline component
- ✅ Enhanced hero glow effects for better visual appeal
- ✅ Added dual deployment support for GitHub Pages and Cloudways
- ✅ Optimized build configuration for both platforms
