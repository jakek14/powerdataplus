# Cloudways Deployment Fix

## Current Issue
Your Next.js app is showing "Hello, your Node.js app is running on Cloudways!" instead of your actual application.

## Step-by-Step Fix

### 1. Cloudways Application Settings
1. Log into your Cloudways dashboard
2. Go to your application settings
3. Ensure these settings are correct:
   - **Application Type**: Node.js
   - **Node.js Version**: 18.x or higher
   - **Application Root**: Leave empty (should be root)

### 2. Environment Variables (CRITICAL)
In your Cloudways application settings, add these environment variables:
```
DEPLOYMENT_TYPE=cloudways
NODE_ENV=production
PORT=3000
```

### 3. Build Commands
Set these build commands in Cloudways:
- **Build Command**: `npm run build:cloudways`
- **Start Command**: `npm start`

### 4. Git Repository Settings
- **Repository**: Your GitHub repo URL
- **Branch**: main
- **Deploy Path**: Leave empty

### 5. Redeploy
1. Go to "Deployment via Git" in your app settings
2. Click "Deploy" to trigger a fresh deployment
3. Wait for the build to complete

### 6. Check Logs
If it still doesn't work:
1. Go to "Logs" in your app settings
2. Check "Application Logs" for any errors
3. Look for build errors or startup issues

### 7. Alternative: Manual Deployment
If Git deployment fails:
1. Download your code as ZIP
2. Upload via "Deployment via Git" → "Upload ZIP"
3. Set build and start commands as above

## Common Issues & Solutions

### Issue: Build fails
- Check Node.js version (must be 18+)
- Ensure all dependencies are in package.json
- Check for TypeScript errors

### Issue: App starts but shows blank page
- Check if PORT environment variable is set
- Verify DEPLOYMENT_TYPE=cloudways
- Check browser console for errors

### Issue: 404 errors
- Ensure basePath is not set for Cloudways
- Check routing configuration

## Verification
After deployment, your app should:
1. Show your actual website content
2. Have working navigation
3. Display images correctly
4. Work on mobile devices

## Support
If issues persist:
1. Check Cloudways application logs
2. Verify all environment variables are set
3. Contact Cloudways support with your app logs 