import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import GrafikKualitas from '../Komponen/GrafikKualitas'; // Import komponen baru

function Dashboard() {
    const [mesin, setMesin] = useState("Mesin A");
    const [dataProduksi, setDataProduksi] = useState([]);

    const targetHarian = 1000; // Contoh target produksi

    const fetchData = () => {
        const dataBaru = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100) + 120);
        setDataProduksi(dataBaru);
    };

    useEffect(() => { fetchData(); }, [mesin]);

    const totalProduksi = dataProduksi.reduce((a, b) => a + b, 0);

    // LOGIKA LATIHAN 2: Conditional Styling
    // Jika total produksi di bawah target, warna kartu menjadi kuning (warning)
    const statusWarna = totalProduksi < targetHarian ? "bg-warning text-dark" : "bg-success text-white";

    return (
        <div className="container-fluid mt-4">
            <div className="row mb-4">
                <div className="col-md-6"><h3>Latihan 2: Advanced Dashboard</h3></div>
                <div className="col-md-6 text-end">
                    <select className="form-select d-inline-block w-auto" onChange={(e) => setMesin(e.target.value)}>
                        <option value="Mesin A">Mesin A</option>
                        <option value="Mesin B">Mesin B</option>
                    </select>
                </div>
            </div>

            <div className="row">
                {/* Kolom KPI dengan Conditional Styling */}
                <div className="col-md-3">
                    <div className={`card ${statusWarna} shadow-sm mb-3`}>
                        <div className="card-body text-center">
                            <h6>Total Output</h6>
                            <h2 className="fw-bold">{totalProduksi}</h2>
                            <small>{totalProduksi < targetHarian ? "⚠️ Di bawah Target" : "✅ Target Tercapai"}</small>
                        </div>
                    </div>

                    <div className="card border-0 shadow-sm mb-3">
                        <div className="card-body">
                            <h6 className="text-center">Komposisi Kualitas</h6>
                            <GrafikKualitas dataProduksi={dataProduksi} />
                        </div>
                    </div>
                </div>

                {/* Kolom Grafik Utama */}
                <div className="col-md-9">
                    <div className="card border-0 shadow-sm p-3">
                        <GrafikProduksi dataInput={dataProduksi} judul={mesin} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;