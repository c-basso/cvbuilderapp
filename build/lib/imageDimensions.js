const sharp = require('sharp');

/**
 * Read pixel width/height from a local image file (formats supported by sharp).
 * Shared by `build/build.js` (inject og/twitter dimensions) and validators — not validation-only.
 *
 * @param {string} imagePath absolute path
 * @returns {Promise<{ width: number, height: number }>}
 */
async function readImageDimensions(imagePath) {
  const meta = await sharp(imagePath).metadata();
  if (meta.width == null || meta.height == null) {
    throw new Error(`could not read dimensions: ${imagePath}`);
  }
  return { width: meta.width, height: meta.height };
}

module.exports = { readImageDimensions };
