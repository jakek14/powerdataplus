# Cloudways Production Deployment Fix

## Problem
- Server maxing out after 15 minutes
- `_next/webpack-hmr/` requests indicating development server is running
- Apache "Service Unavailable" errors

## Solution

### 1. Build the Application
```bash
npm run build:prod
```

### 2. Configure PM2 (if not already configured)
```bash
# Install PM2 globally if not installed
npm install -g pm2

# Start the application with PM2
pm2 start ecosystem.config.js
```

### 3. Alternative: Direct PM2 Start
```bash
pm2 start npm --name "knownvisitors-app" -- start
```

### 4. Environment Variables
Ensure these are set in Cloudways:
- `NODE_ENV=production`
- `DEPLOYMENT_TYPE=cloudways`
- `PORT=3000`

### 5. Verify Production Mode
Check that:
- No `_next/webpack-hmr/` requests in browser network tab
- Application runs on port 3000
- No development server logs

### 6. Restart Application
```bash
pm2 restart knownvisitors-app
```

### 7. Monitor Logs
```bash
pm2 logs knownvisitors-app
```

## Key Points
- Always use `npm run build:prod` before deployment
- Ensure `NODE_ENV=production` is set
- Use PM2 to manage the Node.js process
- Monitor memory usage and restart if needed 