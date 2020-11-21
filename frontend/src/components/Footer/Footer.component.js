import React from 'react';
import './Footer.styles.scss';

const Footer = ({ selectedPlaces }) => {
  let start = '______';
  let end = '______';
  if (selectedPlaces.length === 2) {
    start = selectedPlaces[0]['lugar'];
    end = selectedPlaces[1]['lugar'];
  }
  return (
    <div className="Footer">
      <p>
        Vas desde <span className="start-end">{start}</span> hacia{' '}
        <span className="start-end">{end}</span>
      </p>
      <button className="button">Calcular Ruta</button>
    </div>
  );
};

export default Footer;
