const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const { loadEnvConfig } = require('@next/env');

const projectDir = process.cwd();
loadEnvConfig(projectDir);

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const MAP_FILE = path.join(process.cwd(), 'src', 'lib', 'asset-map.json');

// Ensure src/lib exists
if (!fs.existsSync(path.dirname(MAP_FILE))) {
    fs.mkdirSync(path.dirname(MAP_FILE), { recursive: true });
}

const assetMap = {};

async function uploadFile(filePath) {
    const relativePath = path.relative(PUBLIC_DIR, filePath);
    // Normalize path separators to forward slashes for Cloudinary folder and map key
    const relativePathForward = relativePath.split(path.sep).join('/');

    const folder = path.dirname(relativePathForward);
    const publicId = path.basename(filePath, path.extname(filePath)); // filename without extension

    // Skip root files if they are not assets (like favicon.ico, etc). 
    // We'll upload everything that is an image/video/pdf.
    const ext = path.extname(filePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.pdf', '.mp4', '.webm'].includes(ext)) {
        console.log(`Skipping non-asset file: ${relativePathForward}`);
        return;
    }

    const stats = fs.statSync(filePath);
    if (stats.size > 10 * 1024 * 1024) { // 10MB limit for free Cloudinary
        console.log(`Skipping large file > 10MB: ${relativePathForward}`);
        return;
    }

    // Cloudinary options
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: false, // Don't re-upload if exists
        resource_type: 'auto', // auto-detect image/video/raw
        folder: folder === '.' ? '' : folder, // Upload to root if file is in public root
        public_id: publicId
    };


    try {
        console.log(`Uploading ${relativePathForward}...`);
        const result = await cloudinary.uploader.upload(filePath, options);

        // Map the local path (e.g. /img/foo.jpg) to the Cloudinary URL
        const key = `/${relativePathForward}`;
        assetMap[key] = result.secure_url;

        console.log(`Uploaded ${relativePathForward} -> ${result.secure_url}`);
    } catch (error) {
        console.error(`Failed to upload ${relativePathForward}:`, error.message);
    }
}

async function scanDirectory(directory) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);
        if (entry.isDirectory()) {
            await scanDirectory(fullPath);
        } else {
            await uploadFile(fullPath);
        }
    }
}

async function main() {
    console.log('Starting asset upload...');
    await scanDirectory(PUBLIC_DIR);

    console.log('Writing asset map...');
    fs.writeFileSync(MAP_FILE, JSON.stringify(assetMap, null, 2));
    console.log(`Asset map written to ${MAP_FILE}`);
}

main().catch(console.error);
