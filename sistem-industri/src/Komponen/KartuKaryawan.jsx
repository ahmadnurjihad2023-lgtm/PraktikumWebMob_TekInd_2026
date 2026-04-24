import React from 'react';

const KartuKaryawan = ({ nama, jabatan, bagian }) => {
  return (
    <div className="card shadow-sm border-info mb-4">
      <div className="card-body">
        <h5 className="card-title text-info">{nama}</h5>
        <hr />
        <p className="card-text">
          <strong>Jabatan:</strong> {jabatan}
        </p>
        <p className="card-text">
          <strong>Bagian:</strong> {bagian}
        </p>
        <span className="badge bg-info text-dark">Staff Terverifikasi</span>
      </div>
    </div>
  );
};

export default KartuKaryawan;