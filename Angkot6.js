let angkot = 1;
let jmlAngkot = 10;
let angkotBeroprasi = 6;
let angkotLembur8 = 8;
let angkotLembur10 = 10;
let angkotLembur5 = 5;

for (angkot; angkot <= jmlAngkot; angkot++) {
  if (angkot <= angkotBeroprasi && angkot !== angkotLembur5) {
    console.log(`angkot No. ${angkot} beroprasi dengan baik`);
  } else if (
    angkot === angkotLembur8 ||
    angkot === angkotLembur10 ||
    angkot === angkotLembur5
  ) {
    console.log(`angkot No. ${angkot} sedang lembur`);
  } else {
    console.log(`angkot No. ${angkot} sedang tidak beroprasi`);
  }
}
