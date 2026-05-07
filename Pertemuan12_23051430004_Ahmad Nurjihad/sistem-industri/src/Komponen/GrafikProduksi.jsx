import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Menerima dataInput dan judul melalui props
function GrafikProduksi({ dataInput, judul }) {
    const data = {
        labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
        datasets: [
            {
                label: `Produksi ${judul} (Unit)`,
                data: dataInput,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Target Standar',
                data: [150, 150, 150, 150, 150, 150],
                type: 'line',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                pointRadius: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' },
        },
        scales: {
            y: { beginAtZero: true, max: 250 }
        }
    };

    return (
        <div style={{ height: '300px' }}>
            <Bar data={data} options={options} />
        </div>
    );
}

export default GrafikProduksi;