// Ahmad Nurjihad 23051430004 //

// Membuat Variabel //
let gajiPokok = 4500000; // Gaji Pokok
let jamLembur = 5; // Jam Lembur

// hitung upah lembur per jam //
let upahLemburPerJam = 1.5 * (gajiPokok / 173); // Upah Lembur per Jam

// total gaji//
let totalGaji = gajiPokok + (upahLemburPerJam * jamLembur);

// hasil // 
console.log("Gaji Pokok : Rp"+ gajiPokok);
console.log("Jam Lembur : " + jamLembur + " Jam");
console.log("Upah Lembur per Jam : Rp" + upahLemburPerJam.toFixed(2));
console.log("Total Gaji : Rp" + totalGaji.toFixed(2));