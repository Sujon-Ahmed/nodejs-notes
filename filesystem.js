// Load the filesystem module
const fs = require('fs');

// Read a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    console.log('File contents:', data);
});

console.log('Reading file asynchronously...');

