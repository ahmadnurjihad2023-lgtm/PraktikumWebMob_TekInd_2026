function Riwayat() {
    return (
        <div className="container mt-4">
            <h2>Riwayat Produksi</h2>

            <div className="table-responsive">
                <table className="table table-striped">
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
                        <tr>
                            <td colSpan="9" className="text-center text-muted">Belum ada data riwayat produksi</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Riwayat