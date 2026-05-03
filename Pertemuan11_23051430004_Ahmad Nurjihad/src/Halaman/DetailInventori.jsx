import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailInventori() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="container mt-4">
            <Link to="/inventori" className="btn btn-secondary mb-3">
                ← Kembali ke Inventori
            </Link>

            {loading ? (
                <p className="text-center">⏳ Memuat data...</p>
            ) : item ? (
                <div className="card shadow-sm">
                    <div className="card-header bg-dark text-white">
                        <h5 className="mb-0">Detail Item ID: {item.id}</h5>
                    </div>
                    <div className="card-body">
                        <h4>{item.title}</h4>
                        <hr />
                        <p><strong>Deskripsi Supplier:</strong></p>
                        <p>{item.body}</p>
                        <span className="badge bg-success">Status: Available</span>
                    </div>
                </div>
            ) : (
                <p>Item tidak ditemukan.</p>
            )}
        </div>
    );
}

export default DetailInventori;