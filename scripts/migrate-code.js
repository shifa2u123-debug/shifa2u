const fs = require('fs');
const path = require('path');

const MAP_FILE = path.join(process.cwd(), 'src', 'lib', 'asset-map.json');
const SRC_DIR = path.join(process.cwd(), 'src');

if (!fs.existsSync(MAP_FILE)) {
    console.error('Asset map not found!');
    process.exit(1);
}

const assetMap = JSON.parse(fs.readFileSync(MAP_FILE, 'utf8'));

// Sort keys by length descending to replace longest matches first
const keys = Object.keys(assetMap).sort((a, b) => b.length - a.length);

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    for (const key of keys) {
        // Replace all occurrences of the key with the value
        // key is like "/about-us/image.jpg"
        // value is "https://..."

        // We escape the key for regex
        const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedKey, 'g');

        content = content.replace(regex, assetMap[key]);
    }

    if (content !== originalContent) {
        console.log(`Updated ${path.relative(process.cwd(), filePath)}`);
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

function scanDirectory(directory) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);
        if (entry.isDirectory()) {
            scanDirectory(fullPath);
        } else if (entry.isFile() && /\.(tsx|ts|js|jsx|css|scss|html)$/.test(entry.name)) {
            replaceInFile(fullPath);
        }
    }
}

console.log('Starting code migration...');
scanDirectory(SRC_DIR);
console.log('Migration complete.');
