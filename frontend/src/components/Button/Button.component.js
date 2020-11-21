import React, { useRef } from 'react';

import './Button.styles.scss';

const Button = (props) => {
  const placeRef = useRef(null);
  const handleButtonClick = (e) => {
    if (props.selectedPlaces.length === 0) {
      props.setSelectedPlaces([...props.selectedPlaces, props.place]);
      placeRef.current.classList.add('active');
    } else {
      const tempPlaces = props.selectedPlaces.filter(
        (place) => place['lugar'] !== e.target.innerHTML
      );
      if (tempPlaces.length === props.selectedPlaces.length) {
        if (props.selectedPlaces.length === 1) {
          props.setSelectedPlaces([...props.selectedPlaces, props.place]);
          placeRef.current.classList.add('active');
        }
      } else {
        props.setSelectedPlaces(tempPlaces);
        placeRef.current.classList.remove('active');
      }
    }
  };

  return (
    <span onClick={handleButtonClick} className="Button" ref={placeRef}>
      {props.place['lugar']}
    </span>
  );
};

export default Button;
