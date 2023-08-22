// manipulasi array

// 1 menambah isi array
// let arr = ["a", 1, true];
// console.log(arr[1]);

// 2 menghapus array
// let arr = ["claudio", "rezy", "tendean"];
// arr[1] = undefined;
// console.log(arr);

// 3 menampilakan isi array
// let arr = ["claudio", "rezy", "tendean", "kaligis"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(`mahasiswa ke- ${i + 1} : ${arr[i]}`);
// }

// method pada array
// 1 join
// let arr = ["claudio", "rezy", "tendean", "kaligis"];
// console.log(arr.join(" "));

// 2 push & pop elemen terakhir
// let arr = ["claudio", "rezy", "tendean"];

// push - menambah
// arr.push("kaligis");

// pop - menghapus
// arr.pop();
// arr.pop();
// console.log(arr);

// 3 unshift dan shift elemen pertama
// let arr = ["claudio", "rezy", "tendean"];

// unshift
// arr.unshift("kaligis");

// arr.shift();
// console.log(arr);

// 4 splace

// let arr = ["claudio", "rezy", "tendean"];

// menambah
// arr.splice(2, 0, "kaligis");

// menghapus
// arr.splice(1, 2);

// menghapus & menambah
// arr.splice(1, 2, "kaligis");

// 5 slice
// slice(awal , akhir) awal diambil akhir di potong
// let arr = ["claudio", "rezy", "tendean", "ganteng", "man"];

// let arr2 = arr.slice(0, 3);
// let arr2 = arr.slice(2, 5);
// console.log(arr2);

// 6 forEach
// let angka = [1, 2, 3, 4, 5, 6];
// let nama = ["claudio", "rezy", "tendean"];

// 1
// for (let i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }

// 2
// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function (e, i) {
//   console.log(`mahasiswa ke- ${i + 1} adalah ${e}`);
// });

// 7 Map
// let angka = [1, 5, 3, 2, 6, 5, 7];

// 1
// angka.map(function (e) {
//   console.log(e);
// });

// 2
// let angka2 = angka.map(function (e) {
//   return e * 10;
// });
// console.log(angka2.join(" - "));

// 8 Sort
// let angka = [1, 5, 3, 30, 2, 6, 100, 5, 7, 10];

// 1
// angka.sort();
// console.log(angka.join(" - "));

// 2 kecil - besar
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka);

// 3 besar - kecil
// angka.sort(function (a, b) {
//   return b - a;
// });
// console.log(angka);

// 9 filter
// let angka = [3, 43, 62, 2, 23, 6, 8, 24, 4, 1, 10];

// mencari apakah memiliki nilai
// let angka2 = angka.filter(function (e) {
//   return e == 2;
// });
// console.log(angka2);

// mencari apakah memiliki nilai <
// let angka2 = angka.filter(function (e) {
//   return e < 5;
// });
// console.log(angka2);

// mencari apakah memiliki nilai >
// let angka2 = angka.filter(function (e) {
//   return e > 5;
// });
// console.log(angka2);

// 10 find
// let angka = [3, 43, 62, 2, 23, 6, 8, 24, 4, 1, 10];

// let angka2 = angka.find(function (e) {
//   return e > 3;
// });
// console.log(angka2);
