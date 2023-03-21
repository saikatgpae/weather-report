import React from 'react';
import { useSelector } from 'react-redux';
import './feelslike.css';
import thermo from '../../images/thermo.svg';

export default function FeelsLike() {
  const weatherState = useSelector((state) => state.weatherReducer);
  const temp = weatherState[0].temparature;
  const r = document.querySelector(':root');
  r.style.setProperty('--fill', `${temp * 2}%`);
  return (
    <div className="feelslike p-3">
      <div className="d-flex justify-content-between">
        <small className="">Feels like</small>
        <img src={thermo} alt="rain chance logo" className="um-image" />
      </div>
      <div className="d-flex justify-content-center align-items-baseline m-0 p-0">
        <small className="temp">
          {temp}
          º
        </small>
      </div>
      <div className="d-flex justify-content-between quality">
        <small id="good">0º</small>
        <small id="normal">25º</small>
        <small id="bad">50º</small>
      </div>
      <div className="bar-box d-flex justify-content-between">
        <div className="temp-meter">
          <div className="temp-fill" />
        </div>
      </div>
    </div>
  );
}
