import React from 'react';

function Inventori() {
    const stokBarang = [
        { id: 1, nama: "Pelumas Mesin", kategori: "Konsumsi", stok: 45, unit: "Liter" },
        { id: 2, nama: "Bearing SKF", kategori: "Sparepart", stok: 120, unit: "Pcs" },
        { id: 3, nama: "Sensor Proximity", kategori: "Elektronik", stok: 12, unit: "Pcs" },
        { id: 4, nama: "Kabel Power 3m", kategori: "Listrik", stok: 8, unit: "Roll" },
    ];

    return (
        <div className="card border-0 shadow-sm p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">Manajemen Inventori Lini 1</h5>
                <button className="btn btn-primary btn-sm">+ Tambah Barang</button>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-light">
                        <tr>
                            <th>Nama Barang</th>
                            <th>Kategori</th>
                            <th>Stok</th>
                            <th>Satuan</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stokBarang.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nama}</td>
                                <td>{item.kategori}</td>
                                <td className={item.stok < 15 ? "text-danger fw-bold" : ""}>{item.stok}</td>
                                <td>{item.unit}</td>
                                <td>
                                    <span className={`badge ${item.stok < 15 ? "bg-warning" : "bg-success"}`}>
                                        {item.stok < 15 ? "Low Stock" : "Aman"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Inventori;