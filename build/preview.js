const path = require('path');
const {execSync} = require('child_process');
const fs = require('fs');
const {takeHtmlPageScreenshot} = require('./takeHtmlPageScreenshot');

const {URLS, DEFAULT_LANGUAGE} = require('./constants');

const MAX_SIZE_KB = 600;
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;

function optimizeImage(imagePath) {
    if (!fs.existsSync(imagePath)) {
        console.error(`Image not found: ${imagePath}`);
        return false;
    }

    let stats = fs.statSync(imagePath);
    let sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`Original image size: ${sizeKB} KB`);

    if (stats.size <= MAX_SIZE_BYTES) {
        console.log(`Image is already under ${MAX_SIZE_KB} KB, no optimization needed`);
        return true;
    }

    // Try to optimize the image by increasing compression
    // Start with moderate compression and increase if needed
    let compressionLevel = 6; // PNG compression: 0-9 (9 = maximum compression)
    let attempts = 0;
    const maxAttempts = 5;

    while (stats.size > MAX_SIZE_BYTES && attempts < maxAttempts) {
        attempts++;
        console.log(`Optimization attempt ${attempts}: compression level=${compressionLevel}`);
        
        try {
            // Use ImageMagick to optimize PNG with compression
            // -strip removes metadata
            // -define png:compression-level sets PNG compression (0-9, higher = more compression)
            // -define png:compression-filter sets filter (5 = adaptive)
            execSync(
                `magick "${imagePath}" -strip -define png:compression-level=${compressionLevel} -define png:compression-filter=5 "${imagePath}"`,
                { stdio: 'pipe' }
            );

            stats = fs.statSync(imagePath);
            sizeKB = (stats.size / 1024).toFixed(2);
            console.log(`Optimized size: ${sizeKB} KB`);

            if (stats.size <= MAX_SIZE_BYTES) {
                console.log(`✅ Image optimized successfully: ${sizeKB} KB (target: ≤${MAX_SIZE_KB} KB)`);
                return true;
            }

            // Increase compression for next attempt
            compressionLevel = Math.min(9, compressionLevel + 1);
        } catch (error) {
            console.error(`Error optimizing image: ${error.message}`);
            return false;
        }
    }

    if (stats.size > MAX_SIZE_BYTES) {
        console.log(`Compression alone not sufficient. Trying to resize image...`);
        
        // Try resizing as fallback - reduce dimensions while maintaining aspect ratio
        let scaleFactor = 0.95; // Start with 5% reduction
        let resizeAttempts = 0;
        const maxResizeAttempts = 10;
        const originalSize = stats.size;
        
        while (stats.size > MAX_SIZE_BYTES && resizeAttempts < maxResizeAttempts) {
            resizeAttempts++;
            console.log(`Resize attempt ${resizeAttempts}: scale=${(scaleFactor * 100).toFixed(0)}%`);
            
            try {
                // Get current dimensions
                const dimensions = execSync(
                    `magick identify -format "%wx%h" "${imagePath}"`,
                    { encoding: 'utf8' }
                ).trim();
                
                const [width, height] = dimensions.split('x').map(Number);
                const newWidth = Math.round(width * scaleFactor);
                const newHeight = Math.round(height * scaleFactor);
                
                console.log(`Resizing from ${width}x${height} to ${newWidth}x${newHeight}`);
                
                // Resize and re-optimize
                execSync(
                    `magick "${imagePath}" -resize ${newWidth}x${newHeight} -strip -define png:compression-level=9 -define png:compression-filter=5 "${imagePath}"`,
                    { stdio: 'pipe' }
                );
                
                stats = fs.statSync(imagePath);
                sizeKB = (stats.size / 1024).toFixed(2);
                console.log(`Resized size: ${sizeKB} KB`);
                
                if (stats.size <= MAX_SIZE_BYTES) {
                    console.log(`✅ Image optimized with resize: ${sizeKB} KB (target: ≤${MAX_SIZE_KB} KB)`);
                    return true;
                }
                
                // Reduce scale factor for next attempt
                scaleFactor -= 0.05;
                
                // Don't go below 70% of original size
                if (scaleFactor < 0.7) {
                    console.log(`Reached minimum scale factor (70%), stopping resize attempts`);
                    break;
                }
            } catch (error) {
                console.error(`Error resizing image: ${error.message}`);
                break;
            }
        }
        
        if (stats.size > MAX_SIZE_BYTES) {
            console.error(`❌ Failed to optimize image below ${MAX_SIZE_KB} KB. Final size: ${sizeKB} KB (original: ${(originalSize / 1024).toFixed(2)} KB)`);
            return false;
        }
    }

    return true;
}

(async () => {
    for (let item of URLS) {
        const screenshotPath = DEFAULT_LANGUAGE === item.lang
            ? path.resolve(__dirname, '..', 'site_preview.png')
            : path.resolve(__dirname, '..', item.lang, 'site_preview.png');

        await takeHtmlPageScreenshot({
            screenshotPath,
            width: 1200,
            height: 630,
            url: item.url
        });

        console.log(`\nOptimizing image: ${screenshotPath}`);
        optimizeImage(screenshotPath);
    }
})()
