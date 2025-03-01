const fs = require('fs');
fs.writeFile('file.txt', 'Hello, world!', (err) => {
    if (err) 
        throw err;
    console.log('File created');
});