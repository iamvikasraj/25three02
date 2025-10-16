# SuperCard Deployment Guide

This guide shows you how to deploy the SuperCard project to different Netlify environments.

## 🚀 Quick Deploy Options

### Option 1: Manual Deploy
1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to deploy

### Option 2: Netlify CLI Deploy
1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy using our script:**
   ```bash
   # Production deployment
   ./deploy.sh production
   
   # Staging deployment
   ./deploy.sh staging
   
   # Preview deployment
   ./deploy.sh preview
   ```

### Option 3: Git-based Deploy
1. **Connect your GitHub repository to Netlify**
2. **Set build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

## 🌐 Different Deployment Environments

### 1. **Production Site**
- **URL:** `https://supercard-experiment.netlify.app`
- **Purpose:** Live production site
- **Deploy:** `netlify deploy --prod`

### 2. **Staging Site**
- **URL:** `https://staging--supercard-experiment.netlify.app`
- **Purpose:** Testing before production
- **Deploy:** `netlify deploy`

### 3. **Preview Deployments**
- **URL:** `https://deploy-preview-123--supercard-experiment.netlify.app`
- **Purpose:** Feature testing and reviews
- **Deploy:** Automatic on pull requests

### 4. **Branch Deployments**
- **URL:** `https://feature-branch--supercard-experiment.netlify.app`
- **Purpose:** Feature development
- **Deploy:** Automatic on branch pushes

## 🔧 Environment Variables

You can set different environment variables for each deployment:

### Production
```bash
netlify env:set NODE_ENV production --context production
```

### Staging
```bash
netlify env:set NODE_ENV staging --context staging
```

## 📱 Multiple Site Deployments

### Create Additional Sites
1. **Go to Netlify Dashboard**
2. **Click "New site from Git"**
3. **Connect the same repository**
4. **Use different site names:**
   - `supercard-experiment-prod`
   - `supercard-experiment-staging`
   - `supercard-experiment-dev`

### Custom Domains
- **Production:** `supercard.com`
- **Staging:** `staging.supercard.com`
- **Dev:** `dev.supercard.com`

## 🎯 Deployment Commands

```bash
# Build and deploy to production
npm run build && netlify deploy --prod --dir=dist

# Build and deploy to staging
npm run build && netlify deploy --dir=dist

# Create a preview deployment
npm run build && netlify deploy --dir=dist

# Deploy specific branch
netlify deploy --branch=feature-branch --dir=dist
```

## 🔍 Monitoring Deployments

- **Netlify Dashboard:** Monitor all deployments
- **Deploy Logs:** Check build logs for errors
- **Performance:** Monitor site performance
- **Analytics:** Track visitor metrics

## 🚨 Troubleshooting

### Common Issues:
1. **Build fails:** Check Node.js version (use 18+)
2. **404 errors:** Ensure redirects are configured
3. **Slow loading:** Optimize images and assets
4. **CORS issues:** Check API endpoints

### Debug Commands:
```bash
# Check Netlify status
netlify status

# View deployment logs
netlify logs

# Test local build
npm run build && npm run preview
```

## 📋 Deployment Checklist

- [ ] Code is committed to Git
- [ ] Build passes locally (`npm run build`)
- [ ] Tests pass (if any)
- [ ] Environment variables are set
- [ ] Domain is configured (if custom)
- [ ] SSL certificate is active
- [ ] Analytics are tracking
- [ ] Performance is optimized

## 🎉 Success!

Once deployed, you'll have:
- ✅ Live production site
- ✅ Staging environment for testing
- ✅ Preview deployments for reviews
- ✅ Branch deployments for features
- ✅ Custom domains (optional)
- ✅ SSL certificates
- ✅ CDN distribution
- ✅ Form handling
- ✅ Analytics integration
