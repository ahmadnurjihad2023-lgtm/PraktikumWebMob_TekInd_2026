import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const STORAGE_KEY = 'DATA_LAPORAN_PRODUKSI'

function InputLaporan() {

    const [tanggal, setTanggal] = useState('')
    const [shift, setShift] = useState('Pagi')
    const [mesin, setMesin] = useState('')
    const [produksi, setProduksi] = useState('')
    const [reject, setReject] = useState('')

    const navigate = useNavigate()

    const produksiAngka = parseInt(produksi) || 0
    const rejectAngka = parseInt(reject) || 0
    const netto = produksiAngka - rejectAngka
    const yield_persen = produksiAngka > 0
        ? ((netto / produksiAngka) * 100).toFixed(2)
        : 0

    const rejectLebih = rejectAngka > produksiAngka
    const isValid = tanggal !== '' &&
        mesin !== '' &&
        produksi !== '' &&
        !rejectLebih

    const handleSubmit = (e) => {
        e.preventDefault()

        const dataBaru = {
            id: Date.now(),
            tanggal: tanggal,
            shift: shift,
            mesin: mesin,
            produksi: produksiAngka,
            reject: rejectAngka,
            netto: netto,
            yield: parseFloat(yield_persen)
        }

        const dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
        const dataUpdate = [dataBaru, ...dataLama]
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataUpdate))

        navigate('/riwayat')
    }

    return (
        <div className="container mt-4" style={{ maxWidth: '800px' }}>
            <h2>Input Laporan Produksi</h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Tanggal</label>
                    <input
                        type="date"
                        className="form-control"
                        value={tanggal}
                        onChange={(e) => setTanggal(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Shift</label>
                    <select
                        className="form-select"
                        value={shift}
                        onChange={(e) => setShift(e.target.value)}
                    >
                        <option value="Pagi">Pagi (08:00-16:00)</option>
                        <option value="Siang">Siang (16:00-24:00)</option>
                        <option value="Malam">Malam (00:00-08:00)</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Nama Mesin</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Contoh: CNC-01"
                        value={mesin}
                        onChange={(e) => setMesin(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Jumlah Produksi (Unit)</label>
                    <input
                        type="number"
                        className="form-control"
                        min="0"
                        placeholder="0"
                        value={produksi}
                        onChange={(e) => setProduksi(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Jumlah Reject (Unit)</label>
                    <input
                        type="number"
                        className={rejectLebih ? 'form-control is-invalid' : 'form-control'}
                        min="0"
                        placeholder="0"
                        value={reject}
                        onChange={(e) => setReject(e.target.value)}
                    />
                    {rejectLebih && (
                        <div className="invalid-feedback">
                            Reject tidak boleh lebih dari jumlah produksi!
                        </div>
                    )}
                </div>

                {produksi !== '' && (
                    <div className="alert alert-info mb-3">
                        <strong>Netto:</strong> {netto} Unit &nbsp;|&nbsp;
                        <strong>Yield:</strong> {yield_persen}%
                    </div>
                )}

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={!isValid}
                >
                    Simpan Data
                </button>

            </form>
        </div>
    )
}

export default InputLaporan