// 2. ARRAY
let daftarCacat = ["C-001", "C-005", "C-012", "C-001", "C-020"]; // C-001 terjadi 2 kali

console.log("Jumlah Cacat : " + daftarCacat.length);

// Tampilkan semua cacat yang terjadi
console.log("--- Laporan Detail Cacat ---");
for (let i = 0; i < daftarCacat.length; i++) {
    console.log("Cacat ke-" + (i + 1) + " : " + daftarCacat[i]);
}

let jumlahCacat001 = daftarCacat.includes("C-001") 

// Cek apakah C-001 ada di dalam daftarCacat, jika ada maka tampilkan jumlahnya dan posisi indexnya
if (jumlahCacat001) {
    let posisiCacat001 = daftarCacat.indexOf("C-001");
    console.log(
        `Cacat C-001 ditemukan dalam daftar cacat sebanyak ${daftarCacat.filter(cacat => cacat === "C-001").length} kali, pada posisi index ke - ${posisiCacat001} dan ke - ${daftarCacat.lastIndexOf("C-001")}`
    )
} else {
    console.log('cacat tidak ditemukan di dalam daatabase');
}