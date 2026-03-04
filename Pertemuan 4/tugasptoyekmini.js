//variabel//
let biayaBahanBaku = 40000000;
let biayaTenagaKerja = 12000000;
let biayaOverhead = 8000000;
let jumlahProduksi = 100;

//rumus//
let totalPerUnit =
  (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;

if (jumlahProduksi < 100) {
  console.log("Biaya tinggi (ekonomi skala kecil)");
} else if (jumlahProduksi >= 100 ) {
  console.log("Biaya sedang (ekonomi skala sedang)");
} else {
  console.log("Biaya rendah (ekonomi skala besar)");
}
