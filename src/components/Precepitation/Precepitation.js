import React from 'react';
import './precepitation.css';
import rain from '../../images/rain.svg';

export default function Precepitation() {
  return (
    <div className="rain d-flex justify-content-between p-3">
      <small className="">Precipitation</small>
      <img src={rain} alt="rain logo" className="rain-image" />
    </div>
  );
}
