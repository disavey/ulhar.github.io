//OBJECT
//Object sebenarnya adalah sebuah variabel yang menyimpan nilai (properti) dan (fungsi) method.

//properti = ciri khas dari sebuah object(variabel)
//method = perilaku dari object (variabel)

//contoh object 

// var mobil = {
//     //properti
//     type : "civic turbo",
//     model : "1000 CC",
//     warna : "Putih",


// //method
// start : function(){
//     console.log("Ini method start");
// },

// drive : function(){
//     console.log("Ini method drive");
// },

// brake : function(){
//     console.log("Ini method brake");
// }
// }

// console.log(mobil.type);

// mobil.start();

//keyword This
// let manusia ={
//     firstName : "Dudung",
//     lastName : "Dadang",
//     showName : function(){
//         console.log(`Nama: ${this.firstName} ${this.lastName}`); //this= manusia (objectnya)
//     }
// }
// manusia.showName();

//No. 1
function cetakFunction(a){
    return `Halo Nama saya ${a}`
}
console.log(cetakFunction("Saviero"));

// //No. 2

function myFunction(a, b){
    return a + b;
} 
var a = 20;
var b = 7;
var hasil = myFunction (a, b);

console.log(hasil)

//No 3
const hello = () => {
    return "helo";
}
console.log(hello);

//No. 4

let manusia ={
    nama : "John",
    umur : 22,
    bahasa : "Indonesia",
    showBahasa : function(){
        console.log(` ${this.bahasa} `);
    }
}
manusia.showBahasa();

//No. 5

let orang= ["John Doe", "Laki-laki", "baca buku", 1992]
let man= {
    nama: orang[0],
    gender: orang[1],
    hobi: orang[2],
    tahun: orang[3],
}
console.log(man)

//No 6

const buah = [{
    buah: `nanas`,
    warna: `kuning`,
    biji: `tidak ada`,
    harga: 9000
    
},
{
    buah: `jeruk`,
    warna: `oranye`,
    biji: `ada`,
    harga: 8000
},
{
    buah: `semangka`,
    warna: `hijau dan merah`,
    biji: `ada`,
    harga: 10000
},
{
    buah: `pisang`,
    warna: `kuning`,
    biji: `tidak ada`,
    harga: 2000
}];

const buahBiji = buah.filter( (buah) => buah.biji === `tidak ada`);

console.log(buahBiji);