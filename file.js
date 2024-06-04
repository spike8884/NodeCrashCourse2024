const fs = require('fs');

fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

console.log('last line');






fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
    console.log('file was written');
});

fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
    console.log('file was written');
});





if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log('err');
    }
    console.log('folder created');
});
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    })
}





if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted'); 
    })
}




const fs = require('fs');

const readstream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readstream.on('data', (chunk) => {
    console.log('----NEW CHUNK----');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
});


