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
    
    // Remove max-w-7xl mx-auto ONLY from the full-width section wrappers
    // Pattern: w-full px-6 lg:px-12 2xl:px-20 max-w-7xl mx-auto → w-full px-6 lg:px-12 2xl:px-20
    const fixed = content
        .replace(/\bw-full px-6 lg:px-12 2xl:px-20 max-w-7xl mx-auto\b/g, 'w-full px-6 lg:px-12 2xl:px-20')
        .replace(/\bw-full max-w-7xl mx-auto px-6 lg:px-12 2xl:px-20\b/g, 'w-full px-6 lg:px-12 2xl:px-20');
    
    if (fixed !== content) {
        fs.writeFileSync(file, fixed, 'utf8');
        changedFiles++;
        console.log('Fixed:', file);
    }
});

console.log('Total files fixed:', changedFiles);
