// Load the file system module
const fs = require('fs');

// Read file asynchronously
fs.readFile('example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File contents:', data);
    }
})