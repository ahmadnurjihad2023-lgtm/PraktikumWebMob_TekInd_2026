// Seleksi elemen DOM
const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const btnReset = document.getElementById("btnReset");
const btnMaintenance = document.getElementById("btnMaintenance");

const statusIndicator = document.getElementById("statusIndicator");
const suhuMesin = document.getElementById("suhuMesin");
const teksStatus = statusIndicator.querySelector("strong");

// Variable state
let suhu = 25;
let intervalId = null;

// ================= START =================
btnStart.addEventListener("click", function () {
  statusIndicator.className = "alert alert-success";
  teksStatus.innerText = "RUNNING";

  intervalId = setInterval(function () {
    suhu += 1;
    suhuMesin.innerText = suhu + " °C";

    if (suhu > 80) {
      statusIndicator.className = "alert alert-danger";
      teksStatus.innerText = "OVERHEAT WARNING";
      suhuMesin.style.color = "red";
    }
  }, 1000);

  btnStart.disabled = true;
  btnStop.disabled = false;
});

// ================= STOP =================
btnStop.addEventListener("click", function () {
  clearInterval(intervalId);
  statusIndicator.className = "alert alert-secondary";
  teksStatus.innerText = "STOPPED";

  btnStart.disabled = false;
  btnStop.disabled = true;
});

// ================= MAINTENANCE =================
btnMaintenance.addEventListener("click", function () {
  clearInterval(intervalId); // biar suhu berhenti

  statusIndicator.className = "alert alert-secondary";
  teksStatus.innerText = "MAINTENANCE";

  // ubah background card jadi abu-abu
  document.querySelector(".card").classList.add("bg-light");

  btnStart.disabled = false;
  btnStop.disabled = true;
});

// ================= RESET =================
btnReset.addEventListener("click", function () {
  clearInterval(intervalId);

  suhu = 25;
  suhuMesin.innerText = suhu + " °C";
  suhuMesin.style.color = "black";

  statusIndicator.className = "alert alert-secondary";
  teksStatus.innerText = "UNKNOWN";

  document.querySelector(".card").classList.remove("bg-light");

  btnStart.disabled = false;
  btnStop.disabled = true;
});

// ================= VALIDASI RPM =================
const inputRPM = document.getElementById("inputRPM");
const pesanError = document.getElementById("pesanError");

inputRPM.addEventListener("input", function () {
  let val = parseInt(this.value);

  if (val > 2000) {
    pesanError.classList.remove("d-none");
    this.classList.add("is-invalid");
  } else {
    pesanError.classList.add("d-none");
    this.classList.remove("is-invalid");
  }
});

suhuMesin.addEventListener("mouseover", function () {
  suhuMesin.style.color = "blue";
  suhuMesin.style.fontWeight = "bold";
});

suhuMesin.addEventListener("mouseout", function () {
  suhuMesin.style.color = "black";
  suhuMesin.style.fontWeight = "normal";
});
