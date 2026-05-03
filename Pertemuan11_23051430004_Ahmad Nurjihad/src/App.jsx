import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import NotFound from './Halaman/NotFound';
import DetailInventori from './Halaman/DetailInventori';
import LaporanKualitas from './Halaman/LaporanKualitas';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container">
                <span className="navbar-brand">🏭 Sistem Pabrik</span>
                <div className="navbar-nav">
                    <Link className="nav-link text-white" to="/">Dashboard</Link>
                    <Link className="nav-link text-white" to="/inventori">Inventori</Link>
                    {/* Link baru ke Laporan Kualitas */}
                    <Link className="nav-link text-white" to="/laporan-kualitas">Laporan Kualitas</Link>
                </div>
            </div>
        </nav>
    );
}

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventori" element={<Inventori />} />
                <Route path="/inventori/:id" element={<DetailInventori />} />
                {/* Route baru untuk Laporan Kualitas */}
                <Route path="/laporan-kualitas" element={<LaporanKualitas />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;