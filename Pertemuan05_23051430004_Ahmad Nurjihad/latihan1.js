function hitungLingkaran(jariJari) {
  const phi = Math.PI; 
  
  // Rumus Luas: pi * r * r
  const luas = phi * jariJari * jariJari;
  
  // Rumus Keliling: 2 * pi * r
  const keliling = 2 * phi * jariJari;

  // Mengembalikan hasil dalam bentuk Object
  return {
    luasLingkaran: luas.toFixed(2),
    kelilingLingkaran: keliling.toFixed(2)
  };
}

// output //
const r = 7;
const hasil = hitungLingkaran(r);

console.log("Jari-jari: " + r);
console.log("Luas Lingkaran: " + hasil.luasLingkaran);
console.log("Keliling Lingkaran: " + hasil.kelilingLingkaran);