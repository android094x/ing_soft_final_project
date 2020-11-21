import React, { useState, useEffect } from 'react';
import './App.styles.scss';

import ShowPlaces from './ShowPlaces/ShowPlaces.component';
import Footer from './Footer/Footer.component';

function App() {
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [places, setPlaces] = useState([
    {
      lugar: 'cafeteria',
      coord: [0, 0]
    },
    {
      lugar: 'Aulas A1',
      coord: [1, 1]
    },
    {
      lugar: 'Aulas A2',
      coord: [2, 2]
    },
    {
      lugar: 'Aulas A3',
      coord: [3, 3]
    },
    {
      lugar: 'Aulas A4',
      coord: [4, 4]
    },
    {
      lugar: 'Aulas A5',
      coord: [5, 5]
    }
  ]);

  useEffect(() => {
    console.log(selectedPlaces);
  }, [selectedPlaces]);

  return (
    <div className="App">
      <h1>Elige tu lugar de inicio y tu lugar de destino!</h1>
      <ShowPlaces
        places={places}
        selectedPlaces={selectedPlaces}
        setSelectedPlaces={setSelectedPlaces}
      />
      <Footer selectedPlaces={selectedPlaces} />
    </div>
  );
}

export default App;
