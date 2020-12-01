import React, { useState, useEffect } from 'react';
import './Footer.styles.scss';
import axios from 'axios'

const Footer = ({ selectedPlaces }) => {
  const [route, setRoute] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
  }, [route])

  let message = ''
  let start = '______';
  let end = '______';
  if (selectedPlaces.length === 2) {
    start = selectedPlaces[0]['lugar'];
    end = selectedPlaces[1]['lugar'];
  }

  const handleCalculateRoute = async (e) => {
    e.preventDefault();
    setLoading(true)
    if(selectedPlaces.length === 2) {
      const { data } = await axios.get(`http://localhost:5000/coords?coordXI=${selectedPlaces[0].coord[0]}&coordYI=${selectedPlaces[0].coord[1]}&coordXF=${selectedPlaces[1].coord[0]}&coordYF=${selectedPlaces[1].coord[1]}`)
      setRoute(data)
    } else {
      message = 'Selecciona Origin y Destino!'
    }
  }

  return (
    <div className="Footer">
      <p>
        Vas desde <span className="start-end">{start}</span> hacia{' '}
        <span className="start-end">{end}</span>
      </p>
      <button onClick={handleCalculateRoute} className="button">Calcular Ruta</button>
      {
        route.length === 0 ? null : route.join(" -> ")
      }
      {
        loading ? <span className="loader"></span> : null
      }
    </div>
  );
};

export default Footer;
