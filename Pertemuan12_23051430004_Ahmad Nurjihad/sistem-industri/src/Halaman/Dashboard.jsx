import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GrafikProduksi from '../Komponen/GrafikProduksi';

function Dashboard() {
    const [mesin, setMesin] = useState("Mesin A");
    const [dataProduksi, setDataProduksi] = useState([]);
    const [loading, setLoading] = useState(true);

    // FUNGSI SIMULASI FETCH DATA (Integrasi Data Realistik)
    // Fungsi ini menghasilkan angka acak seolah-olah mengambil dari API
    const fetchDataProduksi = () => {
        setLoading(true);

        // Simulasi delay jaringan selama 500ms
        setTimeout(() => {
            const dataBaru = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100) + 120);
            setDataProduksi(dataBaru);
            setLoading(false);
        }, 500);
    };

    // useEffect akan menjalankan fetch setiap kali pilihan 'mesin' berubah
    useEffect(() => {
        fetchDataProduksi();
    }, [mesin]);

    // Menghitung total untuk kartu KPI
    const totalProduksi = dataProduksi.reduce((a, b) => a + b, 0);

    return (
        <div className="container-fluid mt-4" style={{ backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
            <div className="row mb-4 align-items-center">
                <div className="col-md-6">
                    <h3 className="fw-bold text-primary">INDUSTRY 4.0 DASHBOARD</h3>
                </div>

                {/* FITUR FILTER */}
                <div className="col-md-6 text-end">
                    <span className="me-2 fw-bold">Filter Sumber Data:</span>
                    <select
                        className="form-select d-inline-block w-auto shadow-sm"
                        value={mesin}
                        onChange={(e) => setMesin(e.target.value)}
                    >
                        <option value="Mesin A">Lini Produksi A</option>
                        <option value="Mesin B">Lini Produksi B</option>
                        <option value="Mesin C">Lini Produksi C</option>
                    </select>
                    <button className="btn btn-primary ms-2 shadow-sm" onClick={fetchDataProduksi}>
                        🔄 Refresh
                    </button>
                </div>
            </div>

            <div className="row">
                {/* KARTU KPI */}
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm mb-3 text-center p-3">
                        <p className="text-muted mb-1 small text-uppercase">Total Output ({mesin})</p>
                        <h2 className="fw-bold text-dark">{loading ? "..." : totalProduksi.toLocaleString()}</h2>
                        <span className="badge bg-success w-50 mx-auto">Good Run</span>
                    </div>

                    <div className="card border-0 shadow-sm mb-3 text-center p-3">
                        <p className="text-muted mb-1 small text-uppercase">Efisiensi Real-Time</p>
                        <h2 className="fw-bold text-success">{loading ? "..." : "94.2%"}</h2>
                    </div>
                </div>

                {/* GRAFIK UTAMA */}
                <div className="col-md-9">
                    <div className="card border-0 shadow-sm p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="fw-bold mb-0">Tren Produksi Per Jam</h5>
                            {loading && <div className="spinner-border spinner-border-sm text-primary"></div>}
                        </div>
                        <GrafikProduksi dataInput={dataProduksi} judul={mesin} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;