let angkot = 1;
let angkotBeroprasi = 6;
let jmlAngkot = 10;

while (angkot <= angkotBeroprasi) {
  console.log(`Angkot No. ${angkot} beroprasi dengan baik`);
  angkot++;
}

for (angkot = angkotBeroprasi + 1; angkot <= 10; angkot++) {
  console.log(`Angkot No. ${angkot} tidak beroprasi dengan baik`);
}
