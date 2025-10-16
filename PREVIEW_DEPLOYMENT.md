# SuperCard Preview Deployment Guide

Simple guide for creating preview deployments of the SuperCard project.

## 🚀 Quick Preview Deploy

### Option 1: Manual Deploy
1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to deploy

### Option 2: CLI Preview Deploy
1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy preview:**
   ```bash
   ./deploy.sh
   ```

## 👀 Preview Deployment Features

- **Unique URL:** Each deployment gets a unique preview URL
- **Shareable:** Share the preview URL with others
- **Temporary:** Preview deployments are temporary
- **No Production Impact:** Safe for testing

## 📱 Preview URL Format

Your preview deployments will have URLs like:
- `https://deploy-preview-123--supercard-experiment.netlify.app`
- `https://random-name--supercard-experiment.netlify.app`

## 🔧 Commands

```bash
# Build and create preview
npm run build && netlify deploy --dir=dist

# Or use the script
./deploy.sh
```

## 🎯 What You Get

- ✅ Live preview of your changes
- ✅ Shareable URL for testing
- ✅ No impact on production
- ✅ Easy to create and destroy
- ✅ Perfect for demos and reviews

## 🚨 Troubleshooting

### Build Issues:
```bash
# Test build locally first
npm run build
npm run preview
```

### Deploy Issues:
```bash
# Check Netlify status
netlify status

# View logs
netlify logs
```

## 🎉 Success!

Once deployed, you'll have a live preview URL that you can share with anyone for testing and feedback!
