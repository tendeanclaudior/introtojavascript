function tambah() {
  let hasil = 0;

  for (let i = 0; i < arguments.length; i++) {
    hasil = hasil + arguments[i];
  }

  return hasil;
}

let result = tambah(20, 20, 40, 20);
console.log(result);
