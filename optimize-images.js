import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImages() {
  const publicDir = path.join(__dirname, 'public');
  const files = fs.readdirSync(publicDir);
  
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg')) {
      const inputPath = path.join(publicDir, file);
      const outputPath = path.join(publicDir, file.replace(/\.(png|jpg)$/, '.webp'));
      
      console.log(`Optimizing ${file}...`);
      
      try {
        await sharp(inputPath)
          .resize(1024, 1024, { 
            fit: 'inside',
            withoutEnlargement: true 
          })
          .webp({ 
            quality: 85,
            effort: 6 
          })
          .toFile(outputPath);
        
        const originalSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${file} → ${file.replace(/\.(png|jpg)$/, '.webp')}`);
        console.log(`   Size: ${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(newSize / 1024 / 1024).toFixed(1)}MB (${savings}% smaller)`);
      } catch (error) {
        console.error(`❌ Error optimizing ${file}:`, error.message);
      }
    }
  }
  
  console.log('\n🎉 Image optimization complete!');
}

optimizeImages();
