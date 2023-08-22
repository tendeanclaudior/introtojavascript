// this
// let a = 10;
// console.log(window.a);

// cara 1 - function declaration
// function halo() {
//   console.log(this);
//   console.log("hallo");
// }
// halo();
// mengembalikan objecr global

// cara 2 - object literal
// let obj = { a: 10, nama: "Claudio" };
// obj.halo = function () {
//   console.log(this);
//   console.log("hallo 2");
// };
// obj.halo();
// mengembalikan object yang bersangkutan

// cara 3 - constructor
// function Halo() {
//   console.log(this);
//   console.log("halo 3");
// }
// let obj1 = new Halo();
// let obj2 = new Halo();
// mengembalikan object yang baru dibuat
