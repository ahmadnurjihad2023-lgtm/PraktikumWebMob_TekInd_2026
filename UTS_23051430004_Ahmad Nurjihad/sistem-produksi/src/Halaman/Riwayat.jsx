import { useState, useEffect } from 'react'

const STORAGE_KEY = 'DATA_LAPORAN_PRODUKSI'

function Riwayat() {

    const [data, setData] = useState([])

    useEffect(() => {
        const dataTersimpan = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
        setData(dataTersimpan)
    }, [])

    const hapus = (id) => {
        if (!confirm('Yakin ingin menghapus data ini?')) return
        const dataBaru = data.filter(item => item.id !== id)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru))
        setData(dataBaru)
    }

    const hapusSemua = () => {
        if (!confirm('Yakin ingin menghapus SEMUA data?')) return
        localStorage.removeItem(STORAGE_KEY)
        setData([])
    }

    return (
        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Riwayat Data Produksi</h2>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={hapusSemua}
                >
                    Hapus Semua
                </button>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>No</th>
                            <th>Tanggal</th>
                            <th>Shift</th>
                            <th>Mesin</th>
                            <th>Produksi</th>
                            <th>Reject</th>
                            <th>Netto</th>
                            <th>Yield (%)</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan="9" className="text-center text-muted">
                                    Belum ada data
                                </td>
                            </tr>
                        ) : (
                            data.map((item, index) => (
                                <tr key={item.id}
                                    key={item.id}
                                    className={item.shift === 'Malam' ? 'table-warning' : ''}
                                >
                                
                                    <td>{index + 1}</td>
                                    <td>{item.tanggal}</td>
                                    <td>{item.shift}</td>
                                    <td>{item.mesin}</td>
                                    <td>{item.produksi}</td>
                                    <td>{item.reject}</td>
                                    <td>{item.netto}</td>
                                    <td>{item.yield}%</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => hapus(item.id)}
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Riwayat