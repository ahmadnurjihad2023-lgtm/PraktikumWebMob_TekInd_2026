import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function GrafikKualitas({ dataProduksi }) {
    // Simulasi: 95% dari total produksi adalah OK, 5% adalah Reject
    const total = dataProduksi.reduce((a, b) => a + b, 0);
    const reject = Math.floor(total * 0.05);
    const ok = total - reject;

    const data = {
        labels: ['Produk OK', 'Produk Reject'],
        datasets: [
            {
                data: [ok, reject],
                backgroundColor: ['#28a745', '#dc3545'], // Hijau untuk OK, Merah untuk Reject
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div style={{ height: '250px' }}>
            <Doughnut data={data} options={{ maintainAspectRatio: false }} />
        </div>
    );
}

export default GrafikKualitas;