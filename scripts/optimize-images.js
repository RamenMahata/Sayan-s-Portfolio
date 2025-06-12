const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const IMAGES_DIR = path.join(process.cwd(), 'public/images');
const QUALITY = 80;
const WIDTHS = [640, 768, 1024, 1280, 1536];

async function optimizeImage(filePath) {
  const parsed = path.parse(filePath);
  const outputDir = path.join(process.cwd(), 'public/optimized-images');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Generate responsive image sizes
    for (const width of WIDTHS) {
      if (width <= metadata.width) {
        const outputPath = path.join(
          outputDir,
          `${parsed.name}-${width}w${parsed.ext}`
        );

        if (!fs.existsSync(outputPath)) {
          await image
            .resize(width)
            .webp({ quality: QUALITY })
            .toFile(outputPath);
          
          console.log(`Generated: ${outputPath}`);
        }
      }
    }

    // Generate avif version
    const avifPath = path.join(
      outputDir,
      `${parsed.name}${parsed.ext.replace(/\.\w+$/, '.avif')}`
    );

    if (!fs.existsSync(avifPath)) {
      await image
        .avif({ quality: QUALITY })
        .toFile(avifPath);
      
      console.log(`Generated: ${avifPath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function optimizeAllImages() {
  try {
    const files = await glob(`${IMAGES_DIR}/**/*.{jpg,jpeg,png,webp}`);
    
    console.log(`Found ${files.length} images to optimize`);
    
    for (const file of files) {
      await optimizeImage(file);
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeAllImages();
