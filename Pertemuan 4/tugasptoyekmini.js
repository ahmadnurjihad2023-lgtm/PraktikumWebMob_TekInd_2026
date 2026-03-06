document
  .getElementById("formProduksi")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil elemen output lebih awal
    let output = document.getElementById("hasilOutput");

    // Field input (hapus titik sebelum konversi)
    let biayaBahanBaku = Number(document.getElementById("bahanBaku").value);
    let biayaTenagaKerja = Number(document.getElementById("tenagaKerja").value);
    let biayaOverhead = Number(document.getElementById("overhead").value);
    let jumlahProduksi = Number(document.getElementById("jumlahProduksi").value);

    // Validasi jumlah produksi
    if (jumlahProduksi <= 0 || isNaN(jumlahProduksi)) {
      output.textContent = "Jumlah produksi tidak valid.";
      console.log("Jumlah produksi tidak valid.");
      return;
    }

    // Perhitungan biaya total per unit
    let totalPerUnit =
      (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;

    // Logika status produksi
    let status;
    let statusClass;
    if (jumlahProduksi < 100) {
      status = "Biaya Tinggi (Ekonomi Skala Kecil)";
      statusClass = "status-tinggi";
    } else {
      status = "Biaya Efisien";
      statusClass = "status-efisien";
    }

    // Tampilkan ke website
    output.innerHTML =
      "Total Biaya per Unit: Rp " + totalPerUnit.toLocaleString("id-ID") +
      "<br>Status Produksi: <span class='" +
      statusClass +
      "'>" +
      status +
      "</span>";

    // Tampilkan ke console
    console.log("===== HASIL PERHITUNGAN =====");
    console.log("Biaya Bahan Baku: Rp", biayaBahanBaku.toLocaleString("id-ID"));
    console.log(
      "Biaya Tenaga Kerja: Rp",
      biayaTenagaKerja.toLocaleString("id-ID"),
    );
    console.log("Biaya Overhead: Rp", biayaOverhead.toLocaleString("id-ID"));
    console.log("Jumlah Produksi:", jumlahProduksi, "unit");
    console.log("Total Biaya per Unit: Rp", totalPerUnit.toFixed(2));
    console.log("Status Produksi:", status);
    console.log("=============================");
  });
