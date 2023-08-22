// membuat object

// object literal
let mhs1 = {
  nama: "claudio tendean",
  nrp: "302923052",
  email: "diotendean@gmail.com",
  jurusan: "sistem informasi",
};

let mhs2 = {
  nama: "rezy kaligis",
  nrp: "3450249802",
  email: "rezy@gmail.com",
  jurusan: "master science",
};

// console.log(mhs1);
// console.log(mhs2);

// funtion declaration
function objectMahasiswa(nama, nrp, email, jurusan) {
  let mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

let mhs3 = objectMahasiswa(
  "claudio",
  "342423402",
  "diotendean@gmail.com",
  "sistem informasi"
);

let mhs4 = objectMahasiswa(
  "rezy",
  "593457435",
  "rezy@gmail.com",
  "master science"
);
// console.log(mhs3);
// console.log(mhs4);

// constuctor
function mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

let mhs5 = new mahasiswa(
  "claudio",
  "342423402",
  "diotendean@gmail.com",
  "sistem informasi"
);
console.log(mhs5);
