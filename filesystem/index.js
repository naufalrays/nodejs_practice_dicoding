// TODO: tampilkan teks pada notes.txt pada console.

const fs = require('fs'); // Mengimport fs yang dapat mempermudah kita dalam mengakses filesystem
const { resolve } = require('path'); // Mengimport core modules path untuk menetapkan alamat berkas secara lengkap dan dinamis

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

const pathNotes = resolve(__dirname, 'notes.txt'); // Mengambil lokasi file notes.txt 
fs.readFile(pathNotes, 'utf-8', fileReadCallback); // Membaca file notes.txt


// Versi synchronous :
const data = fs.readFileSync(pathNotes, 'utf-8'); 
console.log(data);