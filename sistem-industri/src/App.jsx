import React from 'react';
import KartuMesin from './Komponen/KartuMesin';
import KartuKaryawan from './Komponen/KartuKaryawan'; // Import komponen baru tanpa hapus yang lama

function App() {
  return (
    <div className="container mt-4">
      {/* BAGIAN 1: MONITORING MESIN (Latihan 1 & 2) */}
      <h1 className="text-center mb-4">Sistem Manajemen Industri</h1>
      <h3>Monitoring Lini Produksi A</h3>
      <div className="row mb-5">
        <div className="col-md-4">
          <KartuMesin nama="CNC-Turning-01" status="Running" produksi={150} />
        </div>
        <div className="col-md-4">
          <KartuMesin nama="CNC-Milling-02" status="Maintenance" />
        </div>
        <div className="col-md-4">
          <KartuMesin nama="Press-Hydraulic-05" status="Stop" produksi={85} />
        </div>
      </div>

      <hr />

      {/* BAGIAN 2: DATA KARYAWAN (Tugas Proyek Mini) */}
      <h3 className="mt-4">Data Personel Lini A</h3>
      <div className="row">
        <div className="col-md-4">
          <KartuKaryawan nama="Ahmad Nurjihad" jabatan="Manager" bagian="Produksi" />
        </div>
        <div className="col-md-4">
          <KartuKaryawan nama="Pradita" jabatan="Operator" bagian="Lini 1" />
        </div>
        <div className="col-md-4">
          <KartuKaryawan nama="Eva" jabatan="Quality Control" bagian="QA/QC" />
        </div>
      </div>
    </div>
  );
}

export default App;