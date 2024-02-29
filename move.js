const fs = require('fs');
const path = require('path');

// our workspace
const workspaceDir = __dirname;

// node_modules/namePackage
const myPackageDir = path.join(__dirname, 'node_modules', 'nftwithwhitelist');

// Disallowed Files
const ignoredFiles = [
    'package.json',
    'package-lock.json',
    '.gitignore',
    'README.md'
];

// Function for move
function moveRecursive(source, destination) {
    if (fs.existsSync(source)) {
        fs.readdirSync(source).forEach(item => {
            const sourcePath = path.join(source, item);
            const destinationPath = path.join(destination, item);

            if (!ignoredFiles.includes(item)) {
                if (fs.lstatSync(sourcePath).isDirectory()) {
                    fs.mkdirSync(destinationPath);
                    moveRecursive(sourcePath, destinationPath);
                } else {
                    fs.renameSync(sourcePath, destinationPath);
                }
            }
        });
    }
}

moveRecursive(myPackageDir, workspaceDir);

console.log('Pemindahan file dan folder selesai.');
