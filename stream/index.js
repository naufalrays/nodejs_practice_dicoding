/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');
const { resolve } = require('path');

const pathDataInput = resolve(__dirname, 'input.txt');
const readableStream = fs.createReadStream(pathDataInput, {
    highWaterMark: 15
});

const pathDataOutput = resolve(__dirname, 'output.txt');
const writableStream = fs.createWriteStream(pathDataOutput);

readableStream.on('readable', () => {
    try {
        // process.stdout.write(`[${readableStream.read()}]`); // process.stdout.write akan mencetak semua output pada baris yang sama.
        // console.log(`[${readableStream.read()}]`);  // akan mencetak setiap output pada baris yang berbeda, sedangkan 
        writableStream.write(`${readableStream.read()}\n`);
    } catch (error) {
        // Catch error
    }
});

readableStream.on('end', ()=>{
    console.log('Done');
});