const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('src');
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove duplicate max-w-7xl mx-auto occurrences
    // Pattern: max-w-7xl mx-auto ... max-w-7xl mx-auto (duplicates)
    const deduped = content
        .replace(/\bmax-w-7xl mx-auto\b([\s\S]*?)\bmax-w-7xl mx-auto\b/g, 'max-w-7xl mx-auto$1')
        .replace(/\bmax-w-7xl\s+mx-auto\s+max-w-7xl\s+mx-auto\b/g, 'max-w-7xl mx-auto');
    
    // Also fix the specific double on same className string
    const fixed = deduped.replace(
        /(\bmax-w-7xl\s+mx-auto\b)([^"']*)\bmax-w-7xl\s+mx-auto\b/g,
        '$1$2'
    );
    
    if (fixed !== content) {
        fs.writeFileSync(file, fixed, 'utf8');
        changedFiles++;
        console.log('Fixed duplicates in:', file);
    }
});

console.log('Total files fixed:', changedFiles);
