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

// Pattern: match any container div that has px-6 lg:px-12 2xl:px-20 but NO max-w and NO mx-auto
// These are the "full bleed" containers that need centering
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Find: className="...px-6 lg:px-12 2xl:px-20..." without any max-w or mx-auto
    // Replace: add max-w-7xl mx-auto
    const newContent = content.replace(
        /(className=["'][^"']*?)\bpx-6 lg:px-12 2xl:px-20\b(?![^"']*?\bmax-w-)(?![^"']*?\bmx-auto\b)/g,
        '$1px-6 lg:px-12 2xl:px-20 max-w-7xl mx-auto'
    );

    if (newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        changedFiles++;
        console.log('Fixed:', file);
        changed = true;
    }
});

console.log('Total files fixed:', changedFiles);
