import React, { useState, useEffect } from 'react';

function JamDigital() {

    const [waktu, setWaktu] = useState(new Date());

    // State baru untuk nama kota
    const [kota, setKota] = useState('Yogyakarta');

    // useEffect 1: Timer jam, jalan sekali saat pertama muncul
    useEffect(() => {
        const timerID = setInterval(() => {
            setWaktu(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    // useEffect 2: Ubah judul tab browser setiap kali 'kota' berubah
    useEffect(() => {
        document.title = `Jam ${kota}`;
    }, [kota]); // [kota] = jalankan ulang setiap kali nilai kota berubah

    return (
        <div className="alert alert-info text-center mt-4">
            <h4>🕐 Waktu Sistem: {waktu.toLocaleTimeString()}</h4>

            {/* Input nama kota */}
            <div className="mt-2">
                <input
                    type="text"
                    className="form-control text-center"
                    placeholder="Masukkan nama kota..."
                    value={kota}
                    onChange={(e) => setKota(e.target.value)}
                />
                <small className="text-muted">Judul tab browser akan berubah sesuai kota</small>
            </div>
        </div>
    );
}

export default JamDigital;