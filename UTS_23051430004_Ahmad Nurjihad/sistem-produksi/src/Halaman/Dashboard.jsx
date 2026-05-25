function Dashboard() {
    return (
        <div className="container-fluid mt-3 px-3">
            <h5>Dashboard Monitoring Produksi</h5>
            <p className="text-muted" style={{ fontSize: '12px' }}>PT. Manufaktur Jaya Abadi</p>


            <div className="d-flex flex-row gap-2 mb-4">
                <div className="card text-white bg-primary flex-fill">
                    <div className="card-body">
                        <h6 className="card-title" style={{ fontSize: '11px' }}>Total Produksi</h6>
                        <h5 className="mb-0">0 unit</h5>
                        <small style={{ fontSize: '10px' }}>Semua Shift</small>
                    </div>
                </div>


                <div className="card text-white bg-danger flex-fill">
                    <div className="card-body p-2">
                        <h6 className="card-title" style={{ fontSize: '11px' }}>Total Reject</h6>
                        <h5 className="mb-0">0 Unit</h5>
                        <small style={{ fontSize: '10px' }}>Semua Shift</small>
                    </div>
                </div>

                <div className="card text-white bg-success flex-fill">
                    <div className="card-body p-2">
                        <h6 className="card-title" style={{ fontSize: '11px' }}>Rata-rata Yield</h6>
                        <h5 className="mb-0">0%</h5>
                        <small style={{ fontSize: '10px' }}>Efisiensi Produksi</small>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard