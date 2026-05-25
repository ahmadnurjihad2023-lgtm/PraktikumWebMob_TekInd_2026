import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './Halaman/Dashboard'
import InputLaporan from './Halaman/InputLaporan'
import Riwayat from './Halaman/Riwayat'
import './App.css'

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex flex-row align-items-center">
          <span className="navbar-brand mb-0" style={{ fontSize: '14px' }}>
            PT. Manufaktur Jaya Abadi
          </span>
          <div className="d-flex flex-row gap-2">
            <Link className="nav-link text-white" style={{ fontSize: '12px' }} to="/">Dashboard</Link>
            <Link className="nav-link text-white" style={{ fontSize: '12px' }} to="/input">Input Laporan</Link>
            <Link className="nav-link text-white" style={{ fontSize: '12px' }} to="/riwayat">Riwayat</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/input" element={<InputLaporan />} />
        <Route path="/riwayat" element={<Riwayat />} />
      </Routes>
    </div>
  )
}

export default App