import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const indexPath = join(__dirname, 'dist', 'index.html');
const indexHtml = readFileSync(indexPath, 'utf8');

// Replace /portfolio/ paths with root paths
const fixedHtml = indexHtml.replace(/\/portfolio\//g, '/');

writeFileSync(indexPath, fixedHtml, 'utf8');
console.log('Fixed paths in index.html');

