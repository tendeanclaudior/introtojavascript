let angkot = 1;
let jmlAngkot = 10;
let angkotBeroprasi = 6;
let angkotLembur = 8;

for (angkot; angkot <= jmlAngkot; angkot++) {
  if (angkot <= angkotBeroprasi) {
    console.log(`angkot No. ${angkot} beroprasi dengan baik`);
  } else if (angkot === angkotLembur) {
    console.log(`angkot No. ${angkot} sedang lembur`);
  } else {
    console.log(`angkot No. ${angkot} sedang tidak beroprasi`);
  }
}
