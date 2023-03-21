import React from 'react';
import { useSelector } from 'react-redux';
import './rain.css';
import umb from '../../images/umbrella.svg';

export default function Rain() {
  const weatherState = useSelector((state) => state.weatherReducer);
  // eslint-disable-next-line
  const rain = weatherState[0].rain;
  const r = document.querySelector(':root');
  r.style.setProperty('--rain', `${rain}%`);
  return (
    <div className="rain p-3">
      <div className="d-flex justify-content-between">
        <small className="">Chance of rain</small>
        <img src={umb} alt="rain chance logo" className="um-image" />
      </div>
      <small className="temp">
        {rain}
        %
      </small>
      <div className="d-flex justify-content-around quality">
        <small id="good">0%</small>
        <small id="normal">25%</small>
        <small id="normal">50%</small>
        <small id="good">75%</small>
        <small id="good">100%</small>
      </div>
      <div className="bar-box d-flex justify-content-between">
        <div className="rain-meter">
          <div className="rain-fill" />
        </div>
      </div>
    </div>
  );
}
