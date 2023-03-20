import React from 'react';
import './rain.css';
import umb from '../../images/umbrella.svg';

export default function Rain() {
  return (
    <div className="rain d-flex justify-content-between p-3">
      <small className="">Chance of rain</small>
      <img src={umb} alt="rain chance logo" className="um-image" />
    </div>
  );
}
