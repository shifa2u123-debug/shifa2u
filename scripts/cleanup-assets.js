const fs = require('fs');
const path = require('path');

const MAP_FILE = path.join(process.cwd(), 'src', 'lib', 'asset-map.json');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

if (!fs.existsSync(MAP_FILE)) {
    console.error('Asset map not found!');
    process.exit(1);
}

const assetMap = JSON.parse(fs.readFileSync(MAP_FILE, 'utf8'));
let deletedCount = 0;

Object.keys(assetMap).forEach(key => {
    // key is "/about-us/foo.jpg"
    // remove leading slash to get relative path from public root
    const relativePath = key.startsWith('/') ? key.substring(1) : key;
    const fullPath = path.join(PUBLIC_DIR, relativePath);

    if (fs.existsSync(fullPath)) {
        try {
            fs.unlinkSync(fullPath);
            console.log(`Deleted ${relativePath}`);
            deletedCount++;
        } catch (e) {
            console.error(`Failed to delete ${relativePath}: ${e.message}`);
        }
    }
});

console.log(`Cleanup complete. Deleted ${deletedCount} files.`);
