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
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('src/components');
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // regex matches className="..." containing max-w-[1-7]xl without mx-auto
    const regex = /(className=[\"'][^\"']*?\bmax-w-[1-7]xl\b)(?![^\"']*?\bmx-auto\b)/g;
    
    if (regex.test(content)) {
        const newContent = content.replace(regex, '$1 mx-auto');
        fs.writeFileSync(file, newContent, 'utf8');
        changedFiles++;
        console.log('Fixed:', file);
    }
});

console.log('Total files fixed:', changedFiles);
