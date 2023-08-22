let penumpang = [];
let tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (let i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah pemunpang dari kursi kosong tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika sudah ada nama penumpang yang sama
      else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahan
        console.log(`${namaPenumpang} sudah ada di dalam angkot`);
        // kembalikan isi array & keluar daru function
        return penumpang;
      }
      //   jika seluruh kursi penuh
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot Masih Kosong");
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
      } else if (i == penumpang.length - 1) {
        console.log(`${namaPenumpang} tidak ada di dalam angkot`);
        return penumpang;
      }
    }
    return penumpang;
  }
};
console.log(tambahPenumpang("claudio", penumpang));
console.log(tambahPenumpang("rezy", penumpang));
console.log(hapusPenumpang("kaligis", penumpang));
