import React from 'react';

function Laporan() {
    return (
        <div className="card border-0 shadow-sm p-4">
            <h5 className="fw-bold mb-3">Arsip Laporan Produksi</h5>
            <p className="text-muted">Pilih parameter untuk menghasilkan laporan dalam format PDF atau Excel.</p>

            <div className="row g-3">
                <div className="col-md-4">
                    <label className="form-label">Rentang Tanggal</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Jenis Laporan</label>
                    <select className="form-select">
                        <option>Laporan Harian</option>
                        <option>Laporan Mingguan</option>
                        <option>Laporan Bulanan</option>
                    </select>
                </div>
                <div className="col-md-4 d-flex align-items-end">
                    <button className="btn btn-success w-100">
                        📥 Download Report
                    </button>
                </div>
            </div>

            <div className="mt-5 text-center p-5 border border-dashed rounded">
                <i className="bi bi-file-earmark-pdf fs-1 text-muted"></i>
                <p className="mt-2 text-muted">Riwayat unduhan akan muncul di sini.</p>
            </div>
        </div>
    );
}

export default Laporan;