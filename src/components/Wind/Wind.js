import React from 'react';
import './wind.css';
import wind from '../../images/wind.svg';

export default function Wind() {
  return (
    <div className="wind d-flex justify-content-between p-3">
      <small className="">Wind</small>
      <img src={wind} alt="wind logo" className="wind-image" />
    </div>
  );
}
