import React from 'react';

function Sidebar({ isOpen, menuAktif, setMenuAktif }) {
    const menus = [
        { id: 'Dashboard', icon: '📊' },
        { id: 'Inventori', icon: '📦' },
        { id: 'Laporan', icon: '📝' }
    ];

    return (
        <div
            className="bg-dark text-white shadow"
            style={{
                width: isOpen ? '250px' : '0',
                minHeight: '100vh',
                transition: '0.3s',
                position: 'fixed', // Tetap di kiri
                left: 0,
                top: 0,
                zIndex: 1050, // Di atas navbar
                overflowX: 'hidden',
                whiteSpace: 'nowrap'
            }}
        >
            <div className="p-4" style={{ width: '250px' }}>
                <h4 className="text-primary fw-bold mb-4">FACTORY 4.0</h4>
                <ul className="nav flex-column">
                    {menus.map(menu => (
                        <li className="nav-item mb-2" key={menu.id}>
                            <button
                                onClick={() => setMenuAktif(menu.id)}
                                className={`nav-link w-100 text-start btn ${menuAktif === menu.id ? 'btn-primary' : 'text-white'}`}
                            >
                                <span className="me-2">{menu.icon}</span> {menu.id}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;