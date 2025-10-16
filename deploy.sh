#!/bin/bash

# Netlify Preview Deployment Script for SuperCard Project
# Usage: ./deploy.sh

echo "🚀 Creating Preview Deployment for SuperCard..."

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Deploy preview
echo "👀 Creating Preview Deployment..."
npx netlify deploy --dir=dist

echo "🎉 Preview deployment complete!"
echo "📱 Check your Netlify dashboard for the preview URL"
