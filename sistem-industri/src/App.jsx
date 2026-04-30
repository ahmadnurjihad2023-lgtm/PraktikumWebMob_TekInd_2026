import React from 'react';
import CounterProduksi from './Komponen/CounterProduksi';
import JamDigital from './Komponen/JamDigital';
import KartuMesin from './Komponen/KartuMesin';
import KalkulatorOEE from './Komponen/KalkulatorOEE';

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Pertemuan 10 - State & Hooks</h1>

      <JamDigital />
      <CounterProduksi />
      <KalkulatorOEE />

      <div className="row mt-4">
        <div className="col-md-4">
          <KartuMesin nama="CNC-01" status="Running" produksi={150} />
        </div>
        <div className="col-md-4">
          <KartuMesin nama="CNC-02" status="Maintenance" produksi={0} />
        </div>
        <div className="col-md-4">
          <KartuMesin nama="Press-01" status="Stop" produksi={85} />
        </div>
      </div>

    </div>
  );
}

export default App;