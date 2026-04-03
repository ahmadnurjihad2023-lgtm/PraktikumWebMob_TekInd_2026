document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formAudit");
  const tabel = document.getElementById("tabelAudit");

  const STORAGE_KEY = "DATA_AUDIT_5S";

  loadData();

  // ================= SUBMIT =================
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // SIMPAN KE LOCAL STORAGE
    

    const auditor = document.getElementById("auditor").value;

    // Ambil nilai checkbox (true/false)
    const checklist = [
      document.getElementById("seiri").checked,
      document.getElementById("seiton").checked,
      document.getElementById("seiso").checked,
      document.getElementById("seiketsu").checked,
      document.getElementById("shitsuke").checked,
    ];

    // Hitung jumlah yang dicentang
    const totalChecked = checklist.filter((item) => item).length;

    // Hitung skor (%)
    const skor = (totalChecked / 5) * 100;

    const dataBaru = {
      tanggal: new Date().toLocaleDateString(),
      auditor: auditor,
      skor: skor,
    };

    saveData(dataBaru);
    
    form.reset();
    loadData();
  });

  // ================= SIMPAN =================
  function saveData(data) {
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    dataLama.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
  }

  // ================= LOAD =================
  function loadData() {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    tabel.innerHTML = "";

    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.tanggal}</td>
        <td>${item.auditor}</td>
        <td>${item.skor}%</td>
      `;
      tabel.appendChild(row);
    });
  }
});
