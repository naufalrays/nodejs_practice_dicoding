// TODO 1
const { EventEmitter} = require('events');
// Import variable EventEmitter dari core module events
 
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }
   
// TODO 2
myEmitter = new EventEmitter();
// myEmitter merupakan instance dari EventEmitter

// TODO 3
myEmitter.on('birthday', birthdayEventListener);
// Untuk menggunakan fungsi birthdayEventListener kita harus set sebuah event, dalam kasus ini adalah event 'birthday'

// TODO 4
myEmitter.emit('birthday', 'Rayhan');
// Menjalankan event 'birthday' yang mana akan memanggil fungsi birthdayEventListener dengan parameter 'Rayhan'