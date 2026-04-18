// 1. Inisialisasi Elemen
const btnLoad = document.getElementById("btnLoad");
const btnAdd = document.getElementById("btnAdd"); // Tombol Latihan 1
const btnLaporan = document.getElementById("btnLaporan"); // Tombol Tugas Mandiri
const container = document.getElementById("containerKaryawan");
const loading = document.getElementById("loading");

const API_URL = "https://jsonplaceholder.typicode.com/users";

// ==========================================================
// JAWABAN LATIHAN 2: MUAT DATA DENGAN FILTER KOTA (HURUF 'S')
// ==========================================================
btnLoad.addEventListener("click", function () {
  if (!container || !loading) return;

  loading.classList.remove("d-none");
  container.innerHTML =
    "<p class='text-center'>Sedang menyaring data kota...</p>";

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) throw new Error("Koneksi internet bermasalah");
      return response.json();
    })
    .then((dataKaryawan) => {
      // PROSES FILTER: Hanya mengambil kota yang mengandung huruf 's'
      const dataTerfilter = dataKaryawan.filter((item) => {
        return item.address.city.toLowerCase().includes("s");
      });

      // Tampilkan hasil filter
      renderData(dataTerfilter);
    })
    .catch((error) => {
      container.innerHTML = `<div class='alert alert-danger'>Error: ${error.message}</div>`;
    })
    .finally(() => {
      loading.classList.add("d-none");
    });
});

// ==========================================================
// JAWABAN LATIHAN 1: POST DATA (TAMBAH KARYAWAN)
// ==========================================================
if (btnAdd) {
  btnAdd.addEventListener("click", function () {
    const dataBaru = { name: "Karyawan Baru", email: "baru@pabrik.com" };

    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(dataBaru),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Hasil POST (Latihan 1):", json);
        alert("Berhasil Tambah Karyawan! Cek Console (F12)");
      });
  });
}

// ==========================================================
// JAWABAN TUGAS MANDIRI: LAPORAN INSIDEN (PROYEK MINI)
// ==========================================================
if (btnLaporan) {
  btnLaporan.addEventListener("click", async function () {
    container.innerHTML = "<h4>Memuat Laporan Insiden...</h4>";
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      // a. Ambil 10 data terbaru
      const sepuluhLaporan = data.slice(0, 10);

      container.innerHTML = "";
      sepuluhLaporan.forEach((laporan) => {
        const col = document.createElement("div");
        col.className = "col-md-6 mb-3";
        col.innerHTML = `
                    <div class="card border-danger h-100 shadow-sm">
                        <div class="card-body">
                            <h6 class="text-danger">⚠️ Judul: ${laporan.title}</h6>
                            <p class="small text-muted">${laporan.body}</p>
                            <button onclick="alert('Tiket ID ${laporan.id} sedang diproses oleh Tim Maintenance')" 
                                    class="btn btn-sm btn-danger">Tindak Lanjut</button>
                        </div>
                    </div>`;
        container.appendChild(col);
      });
    } catch (err) {
      alert("Gagal memuat laporan");
    }
  });
}

// ==========================================================
// FUNGSI RENDER (UNTUK MENAMPILKAN KARYAWAN)
// ==========================================================
function renderData(data) {
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML =
      "<p class='text-center'>Tidak ada kota yang mengandung huruf 's'.</p>";
    return;
  }

  data.forEach((karyawan) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-3";
    col.innerHTML = `
            <div class="card h-100 shadow-sm border-primary">
                <div class="card-body">
                    <h5 class="card-title text-primary">${karyawan.name}</h5>
                    <p class="card-text mb-1"><strong>Email:</strong> ${karyawan.email}</p>
                    <p class="card-text mb-1"><strong>Kota:</strong> ${karyawan.address.city}</p>
                    <p class="card-text small text-muted">Perusahaan: ${karyawan.company.name}</p>
                    <button onclick="cariKaryawan(${karyawan.id})" class="btn btn-xs btn-link p-0">Detail Profil</button>
                </div>
            </div>`;
    container.appendChild(col);
  });
}

// Fungsi Detail (Async/Await)
async function cariKaryawan(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    alert(`Ditemukan: ${data.name} - bekerja di ${data.company.name}`);
  } catch (error) {
    alert("Data tidak ditemukan");
  }
}
