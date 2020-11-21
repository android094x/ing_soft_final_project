import React from 'react';
import './ShowPlaces.styles.scss';

import Button from '../Button/Button.component';
//adding comment
const ShowPlaces = (props) => {
  const renderPlaces = props.places.map((place) => {
    return (
      <Button
        place={place}
        selectedPlaces={props.selectedPlaces}
        setSelectedPlaces={props.setSelectedPlaces}
      />
    );
  });

  return <div className="ShowPlaces">{renderPlaces}</div>;
};

export default ShowPlaces;
