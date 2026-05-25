function InputLaporan() {
    return (
        <div className="container mt-4" style={{ maxWidth: '800px' }}>
            <h2>Input Laporan Produksi</h2>
            <form>
                <div className="mb-3">
                    <label className="form-tabel">Tanggal</label>
                    <input type="date" className="form-control"></input>
                </div>

                <div className="mb-3">
                    <label className="form-tabel">Shift</label>
                    <select className="form-select">
                        <option value="Pagi">Pagi (08:00 - 16:00) </option>
                        <option value="Sore">Sore (16:00 - 00:00)</option>
                        <option value="Malam">Malam (00:00 - 08:00)</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-tabel">Nama Mesin</label>
                    <input type="text" className="form-control" placeholder="Contoh:CNC-07"></input>
                </div>

                <div className="mb-3">
                    <label className="form-tabel">Jumlah Produksi</label>
                    <input type="number" className="form-control" min="0"placeholder="Contoh:40"></input>
                </div>

                <div className="mb-3">
                    <label className="form-tabel">Jumlah Reject</label>
                    <input type="number" className="form-control" min="0" placeholder="contoh:2"></input>
                </div>

                <button type="submit" className="btn btn-primary w-100">Simpan Data</button>

            </form>
        </div>
    )
}

export default InputLaporan