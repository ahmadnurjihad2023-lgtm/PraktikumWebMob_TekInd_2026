import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'DATA_LAPORAN_PRODUKSI'

function Dashboard() {
    const [data, setData] = useState([])
    useEffect(() => {
        const dataTersimpan = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
        setData(dataTersimpan)
    }, [])

    const totalProduksi = data.reduce((total, item) => total + item.produksi, 0)
    const totalReject = data.reduce((total, item) => total + item.reject, 0)
    const avgYield = data.length > 0
        ? (data.reduce((total, item) => total + item.yield, 0) / data.length).toFixed(2) : 0

    return (
            <div className="container-fluid mt-3 px-3">
                <h5>Dashboard Monitoring Produksi</h5>
                <p className="text-muted" style={{ fontSize: '12px' }}>PT. Manufaktur Jaya Abadi</p>


                <div className="d-flex flex-row gap-2 mb-4">
                    <div className="card text-white bg-primary flex-fill">
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontSize: '11px' }}>Total Produksi</h6>
                            <h5 className="mb-0">{totalProduksi}</h5>
                            <small style={{ fontSize: '10px' }}>Semua Shift</small>
                        </div>
                    </div>


                    <div className="card text-white bg-danger flex-fill">
                        <div className="card-body p-2">
                            <h6 className="card-title" style={{ fontSize: '11px' }}>Total Reject</h6>
                            <h5 className="mb-0">{totalReject}</h5>
                            <small style={{ fontSize: '10px' }}>Semua Shift</small>
                        </div>
                    </div>

                    <div className="card text-white bg-success flex-fill">
                        <div className="card-body p-2">
                            <h6 className="card-title" style={{ fontSize: '11px' }}>Rata-rata Yield</h6>
                            <h5 className="mb-0">{avgYield}%</h5>
                            <small style={{ fontSize: '10px' }}>Efisiensi Produksi</small>
                        </div>
                    </div>

                </div>
            </div>
        )

    }

    export default Dashboard