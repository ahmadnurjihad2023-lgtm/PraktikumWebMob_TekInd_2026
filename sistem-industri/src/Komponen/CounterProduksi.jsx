import React, { useState } from 'react';

function CounterProduksi() {

    const [jumlah, setJumlah] = useState(0);
    const [target, setTarget] = useState(100);

    // State baru untuk emergency
    const [isEmergency, setIsEmergency] = useState(false);

    const tambahProduksi = () => {
        setJumlah(jumlah + 1);
    };

    const reset = () => {
        setJumlah(0);
        setIsEmergency(false); // Emergency juga ikut reset
    };

    const emergencyStop = () => {
        setIsEmergency(true);
    };

    return (
        <div className="text-center p-4 border rounded bg-light mt-4">
            <h3>Simulasi Hitung Produk</h3>

            <h1 className="display-4">{jumlah}</h1>
            <p>Target: {target} Unit</p>

            {/* Conditional Rendering: Emergency */}
            {isEmergency && (
                <div className="alert alert-danger">
                    🚨 EMERGENCY STOP AKTIF! Produksi dihentikan!
                </div>
            )}

            {/* Conditional Rendering: Target */}
            {!isEmergency && (
                jumlah >= target ? (
                    <div className="alert alert-success d-inline-block">✅ Target Tercapai!</div>
                ) : (
                    <div className="alert alert-secondary d-inline-block">⏳ Produksi Berjalan...</div>
                )
            )}

            <div className="mt-3">
                {/* Tombol +1 disabled saat emergency */}
                <button
                    className="btn btn-primary me-2"
                    onClick={tambahProduksi}
                    disabled={isEmergency}
                >
                    +1 Unit
                </button>

                <button className="btn btn-danger me-2" onClick={reset}>
                    Reset Shift
                </button>

                {/* Tombol Emergency Stop */}
                <button
                    className="btn btn-dark"
                    onClick={emergencyStop}
                    disabled={isEmergency}
                >
                    🚨 Emergency Stop
                </button>
            </div>

        </div>
    );
}

export default CounterProduksi;