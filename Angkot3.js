let angkot = 1;
let jmlAngkot = 10;
let angkotBeroprasi = 6;

for (angkot; angkot <= jmlAngkot; angkot++) {
  if (angkot <= angkotBeroprasi) {
    console.log(`Angkot No. ${angkot} beroprasi dengan baik`);
  } else {
    console.log(`Angkot No. ${angkot} tidak beroprasi dengan baik`);
  }
}
