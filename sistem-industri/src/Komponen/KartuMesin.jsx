import React from 'react';

// Latihan 2: Tambahkan '= 0' pada variabel produksi
function KartuMesin({ nama, status, produksi = 0 }) {
  
  let badgeColor = 'bg-secondary';
  if (status === 'Running') badgeColor = 'bg-success';
  if (status === 'Stop') badgeColor = 'bg-danger';
  if (status === 'Maintenance') badgeColor = 'bg-warning';

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white">
        <h5 className="card-title mb-0">{nama}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          <strong>Status:</strong> 
          <span className={`badge ms-2 ${badgeColor}`}>{status}</span>
        </p>
        <p className="card-text">
          <strong>Produksi Saat Ini:</strong> {produksi} Unit
        </p>
        <button className="btn btn-primary btn-sm">Kontrol Mesin</button>
      </div>
    </div>
  );
}

export default KartuMesin;