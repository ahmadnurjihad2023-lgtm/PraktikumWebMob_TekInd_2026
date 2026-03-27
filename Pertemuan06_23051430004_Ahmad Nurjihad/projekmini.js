const daya = document.getElementById("daya");
const jam = document.getElementById("jam");
const hasil = document.getElementById("hasil");

// fungsi hitung
function hitungListrik() {
  let d = parseFloat(daya.value) || 0;
  let j = parseFloat(jam.value) || 0;

  let kwh = (d * j) / 1000;
  let biaya = kwh * 1500;

  hasil.innerText =
    "Total kWh: " + kwh.toFixed(2) + " | Biaya: Rp " + biaya.toLocaleString();
}

// event realtime (tanpa tombol)
daya.addEventListener("input", hitungListrik);
jam.addEventListener("input", hitungListrik);
