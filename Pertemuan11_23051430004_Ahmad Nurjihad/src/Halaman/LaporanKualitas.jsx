import React from 'react';
import { Link } from 'react-router-dom';

// Mock data array cacat produksi
const dataCacat = [
    { id: 1, kode: 'C-001', produk: 'Part A-12', jenisCacat: 'Geometri', jumlah: 5, tanggal: '2024-01-10', status: 'Ditolak' },
    { id: 2, kode: 'C-002', produk: 'Part B-05', jenisCacat: 'Permukaan', jumlah: 3, tanggal: '2024-01-11', status: 'Ditolak' },
    { id: 3, kode: 'C-003', produk: 'Part C-08', jenisCacat: 'Fungsional', jumlah: 7, tanggal: '2024-01-12', status: 'Ditolak' },
    { id: 4, kode: 'C-004', produk: 'Part A-12', jenisCacat: 'Geometri', jumlah: 2, tanggal: '2024-01-13', status: 'Ditolak' },
    { id: 5, kode: 'C-005', produk: 'Part D-03', jenisCacat: 'Permukaan', jumlah: 4, tanggal: '2024-01-14', status: 'Ditolak' },
];

function LaporanKualitas() {
    // Hitung total cacat
    const totalCacat = dataCacat.reduce((acc, item) => acc + item.jumlah, 0);

    return (
        <div className="container mt-4">
            <h1>Laporan Kualitas Produksi</h1>
            <Link to="/" className="btn btn-secondary mb-3">
                Kembali ke Dashboard
            </Link>

            {/* Ringkasan */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <div className="card text-white bg-danger">
                        <div className="card-body">
                            <h5 className="card-title">Total Cacat</h5>
                            <h2>{totalCacat} Unit</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white bg-warning">
                        <div className="card-body">
                            <h5 className="card-title">Jumlah Jenis Cacat</h5>
                            <h2>{dataCacat.length} Kasus</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white bg-dark">
                        <div className="card-body">
                            <h5 className="card-title">Produk Terdampak</h5>
                            <h2>4 Produk</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabel Data Cacat */}
            <h4>Detail Laporan Cacat</h4>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Kode</th>
                        <th>Produk</th>
                        <th>Jenis Cacat</th>
                        <th>Jumlah</th>
                        <th>Tanggal</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCacat.map((item) => (
                        <tr key={item.id}>
                            <td>{item.kode}</td>
                            <td>{item.produk}</td>
                            <td>{item.jenisCacat}</td>
                            <td>{item.jumlah}</td>
                            <td>{item.tanggal}</td>
                            <td><span className="badge bg-danger">{item.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LaporanKualitas;