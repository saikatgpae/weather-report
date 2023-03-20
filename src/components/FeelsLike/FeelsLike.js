import React from 'react';
import './feelslike.css';
import thermo from '../../images/thermo.svg';

export default function FeelsLike() {
  return (
    <div className="feelslike d-flex justify-content-between p-3">
      <small className="">Feels like</small>
      <img src={thermo} alt="rain chance logo" className="um-image" />
    </div>
  );
}
