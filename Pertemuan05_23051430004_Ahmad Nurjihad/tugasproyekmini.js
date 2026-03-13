// Array antrian mesin
let antrianMesin = [
    { idJob: "J01", namaProses: "Drilling", durasi: 30 }
];


// menambah job dari input html
function tambahJob() {
  let idJob = document.getElementById("idJob").value;
  let namaProses = document.getElementById("namaProses").value;
  let durasi = document.getElementById("durasi").value;

  let jobBaru = {
    idJob: idJob,
    namaProses: namaProses,
    durasi: durasi,
  };

  antrianMesin.push(jobBaru);

  alert("Job berhasil ditambahkan");
}

// function proses antrian
function prosesAntrian(antrian) {
  let hasil = "";

  for (let i = 0; i < antrian.length; i++) {
    let job = antrian[i];

    hasil +=
      "Memproses Job " +
      job.idJob +
      " - " +
      job.namaProses +
      " selama " +
      job.durasi +
      " menit <br>";
  }

  return hasil;
}

// menjalankan proses
function jalankanProses() {
  console.log("--- Proses Antrian Mesin ---");

  let output = prosesAntrian(antrianMesin);

  document.getElementById("output").innerHTML = output;
}
