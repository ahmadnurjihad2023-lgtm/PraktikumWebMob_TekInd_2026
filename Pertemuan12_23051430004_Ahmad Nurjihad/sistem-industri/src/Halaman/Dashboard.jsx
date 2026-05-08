import React, { useState, useEffect } from 'react';
import Sidebar from '../Komponen/Sidebar';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import Inventori from '../Komponen/Inventori';
import Laporan from '../Komponen/Laporan';

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768); // Otomatis tutup jika layar kecil
    const [menuAktif, setMenuAktif] = useState("Dashboard");
    const [dataProduksi, setDataProduksi] = useState([120, 150, 180, 170, 200, 210]);

    const target = 1000;
    const totalProduksi = dataProduksi.reduce((a, b) => a + b, 0);
    const warnaKPI = totalProduksi < target ? "bg-danger" : "bg-success";

    // Efek untuk menangani perubahan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSidebarOpen(false); // Tutup sidebar di HP secara default
            } else {
                setSidebarOpen(true);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderKonten = () => {
        if (menuAktif === "Dashboard") {
            return (
                <div className="row">
                    <div className="col-lg-8 col-12 mb-4">
                        <div className="card shadow-sm p-3 p-md-4 h-100">
                            <h5 className="fw-bold">Visualisasi Produksi</h5>
                            <div style={{ height: '300px' }}>
                                <GrafikProduksi dataInput={dataProduksi} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 mb-4">
                        <div className={`card ${warnaKPI} text-white shadow-sm p-4 h-100 text-center`}>
                            <h5>Total Output</h5>
                            <h1 className="display-4 fw-bold">{totalProduksi}</h1>
                            <p className="mb-0">{totalProduksi < target ? "⚠️ Di Bawah Target" : "✅ Target Tercapai"}</p>
                        </div>
                    </div>
                    {/* Tabel responsif */}
                    <div className="col-12 mt-2">
                        <div className="card shadow-sm p-3 p-md-4">
                            <h5 className="fw-bold">Tabel Lini Produksi</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead><tr><th>Jam</th><th>Output</th></tr></thead>
                                    <tbody>
                                        {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'].map((j, i) => (
                                            <tr key={i}><td>{j}</td><td>{dataProduksi[i]}</td></tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (menuAktif === "Inventori") return <Inventori />;
        else if (menuAktif === "Laporan") return <Laporan />;
    };

    return (
        <div className="d-flex" style={{ backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
            <Sidebar
                isOpen={sidebarOpen}
                menuAktif={menuAktif}
                setMenuAktif={(m) => { setMenuAktif(m); if (window.innerWidth <= 768) setSidebarOpen(false); }}
            />

            {/* Overlay untuk HP saat sidebar terbuka */}
            {sidebarOpen && window.innerWidth <= 768 && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1040
                    }}
                />
            )}

            <div
                className="flex-grow-1"
                style={{
                    marginLeft: window.innerWidth > 768 && sidebarOpen ? '250px' : '0',
                    transition: '0.3s',
                    width: '100%'
                }}
            >
                <nav className="navbar bg-white shadow-sm px-3 px-md-4 py-3 d-flex justify-content-between sticky-top">
                    <button className="btn btn-primary" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
                    <div className="fw-bold d-none d-sm-block">👤 Ahmad Nurjihad 23051430004</div>
                    <div className="fw-bold d-block d-sm-none">👤 Admin</div>
                </nav>

                <div className="p-3 p-md-4">
                    {renderKonten()}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;