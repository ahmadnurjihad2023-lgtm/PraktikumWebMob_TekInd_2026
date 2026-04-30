import React, { useState } from 'react';

function KalkulatorOEE() {

    // State untuk setiap input
    const [planTime, setPlanTime] = useState('');
    const [runTime, setRunTime] = useState('');
    const [totalParts, setTotalParts] = useState('');
    const [goodParts, setGoodParts] = useState('');

    // Hitung OEE otomatis
    const planTimeNum = parseFloat(planTime) || 0;
    const runTimeNum = parseFloat(runTime) || 0;
    const totalPartsNum = parseFloat(totalParts) || 0;
    const goodPartsNum = parseFloat(goodParts) || 0;

    // Rumus OEE
    const availability = planTimeNum > 0 ? (runTimeNum / planTimeNum) : 0;
    const performance = runTimeNum > 0 && totalPartsNum > 0 ? (totalPartsNum / (runTimeNum * 100)) : 0;
    const quality = totalPartsNum > 0 ? (goodPartsNum / totalPartsNum) : 0;
    const oee = (availability * performance * quality * 100).toFixed(2);
    const availabilityPersen = (availability * 100).toFixed(2);
    const qualityPersen = (quality * 100).toFixed(2);

    // Warna OEE
    let oeeColor = 'text-secondary';
    let oeePesan = 'Masukkan data untuk menghitung OEE';
    if (planTime && runTime && totalParts && goodParts) {
        if (oee >= 85) {
            oeeColor = 'text-success';
            oeePesan = '🟢 World Class!';
        } else if (oee >= 50) {
            oeeColor = 'text-warning';
            oeePesan = '🟡 Perlu Peningkatan';
        } else {
            oeeColor = 'text-danger';
            oeePesan = '🔴 Perlu Investigasi!';
        }
    }

    return (
        <div className="card shadow-sm mt-4">
            <div className="card-header bg-dark text-white">
                <h5 className="mb-0">🏭 Kalkulator OEE</h5>
            </div>
            <div className="card-body">
                <div className="row">

                    {/* Kolom Input */}
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label fw-bold">Plan Time (jam)</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Contoh: 8"
                                value={planTime}
                                onChange={(e) => setPlanTime(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Run Time (jam)</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Contoh: 6.5"
                                value={runTime}
                                onChange={(e) => setRunTime(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Total Parts (unit)</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Contoh: 500"
                                value={totalParts}
                                onChange={(e) => setTotalParts(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Good Parts (unit)</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Contoh: 480"
                                value={goodParts}
                                onChange={(e) => setGoodParts(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Kolom Hasil */}
                    <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                        <h6 className="text-muted">Availability</h6>
                        <h4>{availabilityPersen}%</h4>
                        <h6 className="text-muted mt-2">Quality</h6>
                        <h4>{qualityPersen}%</h4>
                        <hr />
                        <h6 className="text-muted">Nilai OEE</h6>
                        <h1 className={`display-4 fw-bold ${oeeColor}`}>{oee}%</h1>
                        <p className={`fw-bold ${oeeColor}`}>{oeePesan}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default KalkulatorOEE;