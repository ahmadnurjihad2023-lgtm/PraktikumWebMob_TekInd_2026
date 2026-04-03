document.addEventListener("DOMContentLoaded", function () {
  const formProduksi = document.getElementById("formProduksi");
  const tabelBody = document.getElementById("tabelBody");
  const btnHapusSemua = document.getElementById("btnHapusSemua");
  const inputCari = document.getElementById("cariOperator");
  const btnSortJumlah = document.getElementById("btnSortJumlah");

  // Kunci untuk LocalStorage
  const STORAGE_KEY = "DATA_PRODUKSI_INDUSTRI";

  //Mode sortir: true = terbesar ke terkecil, false = terkecil ke terbesar
  let isSorted = false;

  // Load awal
  loadDataFromStorage();

  // EVENT SEARCH (INI YANG PENTING)
  inputCari.addEventListener("input", function () {
    const keyword = inputCari.value.toLowerCase();
    loadDataFromStorage(keyword);
  });

  // Sortir berdasarkan jumlah (terbesar)
  btnSortJumlah.addEventListener("click", function () {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // hanya sorting di memori (tidak disimpan ulang)
    let sortedData = [...data].sort((a, b) => b.jumlah - a.jumlah);

    renderTable(sortedData);
  });

  // Submit form
  formProduksi.addEventListener("submit", function (event) {
    event.preventDefault();

    const tanggal = document.getElementById("tanggal").value;
    const operator = document.getElementById("operator").value;
    const shift = document.getElementById("shift").value;
    const jumlah = parseInt(document.getElementById("jumlah").value);

    if (jumlah <= 0) {
      alert("Jumlah harus lebih dari 0!");
      return;
    }

    const dataBaru = {
      id: Date.now(),
      tanggal,
      operator,
      shift,
      jumlah,
    };

    saveData(dataBaru);
    formProduksi.reset();
    loadDataFromStorage();
  });

  // ================= FUNCTION =================

  function saveData(data) {
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    dataLama.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
  }

  function loadDataFromStorage(keyword = "") {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    let dataFiltered = data.filter((item) =>
      item.operator.toLowerCase().includes(keyword),
    );
    renderTable(dataFiltered);
  }

  function renderTable(data) {
    tabelBody.innerHTML = "";

    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.tanggal}</td>
        <td>${item.operator}</td>
        <td>${item.shift}</td>
        <td>${item.jumlah}</td>
        <td>
          <button class="btn btn-sm btn-danger" onclick="hapusData(${item.id})">
            Hapus
          </button>
        </td>
      `;
      tabelBody.appendChild(row);
    });
  }

  // 5. Fungsi Hapus Data Spesifik
  // Kita pasang di window agar bisa dipanggil dari inline HTML onclick
  window.hapusData = function (id) {
    if (confirm("Yakin hapus data?")) {
      let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

      // Filter data: hapus item yang id-nya cocok
      let dataBaru = data.filter((item) => item.id !== id);

      // simpan ulang
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
      loadDataFromStorage();

      //refresh tampilan
      loadDataFromStorage();
    }
  };
});

// Hapus semua
btnHapusSemua.addEventListener("click", function () {
  if (confirm("Peringatan: Semua data akan dihapus permanen!")) {
    localStorage.removeItem(STORAGE_KEY);
    loadDataFromStorage();
  }
});
