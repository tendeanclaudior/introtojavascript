let tebak = confirm("tebak angka 1 - 10");

let angka = prompt("masukan angka tebakan");

let com = Math.random();

if (com < 10) {
  com = "terlalu rendah";
} else if (com >= 1 && com < 10) {
  com = "anda benar";
} else {
  com = "terlalu rendah";
}

let hasil = "";

for (angka; angka <= 10; angka++) {}
