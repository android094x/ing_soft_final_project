import React, { useState } from 'react';
import './App.styles.scss';

import PLACES from '../data';

import ShowPlaces from './ShowPlaces/ShowPlaces.component';
import Footer from './Footer/Footer.component';

function App() {
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  return (
    <div className="App">
      <h1>Elige tu lugar de inicio y tu lugar de destino!</h1>
      <ShowPlaces
        places={PLACES}
        selectedPlaces={selectedPlaces}
        setSelectedPlaces={setSelectedPlaces}
      />
      <Footer selectedPlaces={selectedPlaces} />
    </div>
  );
}

export default App;
