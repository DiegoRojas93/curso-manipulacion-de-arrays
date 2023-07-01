// const letters = [`a`, `b`, , 'd' , undefined, 'd', null ]  /* Hay 7 elementos */

// letters.forEach( (letter, i, array) => console.log(`${i}: ${array[i] === letter}`));

// console.log(`\nSolo hay ${letters.length} elementos en el array y solo aparecen 6`);

// 0: true
// 1: true
// 3: true
// 4: true
// 5: true
// 6: true

// Solo hay 7 elementos en el array y solo aparecen 6






// function Contador () {
//     this.sum = 0,
//     this.cuenta = 0,

//     this.add = function(array) {
//         array.forEach( num => {
//             this.sum += num
//             ++this.cuenta
//         }, this)
//     }
// }

// const OBJ = new Contador();

// OBJ.add([2, 5, 9])

// console.log(OBJ.sum);
// console.log(OBJ.cuenta);


// const Contador = {
//     sum: 0,
//     cuenta: 0,

//     add: function(array) {
//         array.forEach( num => {
//             this.sum += num
//             ++this.cuenta
//         }, this)
//     }
// }

// Contador.add([2, 5, 9])

// console.log(Contador.sum);
// console.log(Contador.cuenta);

const AVATAR = {
    name: 'Aang',
    age: 12,
    tribe: 'Air'
}

const listKyes = Object.keys(AVATAR),
      dataNewAvatar = ['korra', 17, 'Watter'];

listKyes.forEach( function (key, i) {
    this[key] = dataNewAvatar[i];
}, AVATAR);

console.log('Avatar: ',AVATAR);