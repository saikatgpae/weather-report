import React from 'react';
import { useSelector } from 'react-redux';
import './humidity.css';
import humidity from '../../images/humidity.svg';

export default function Humidity() {
  const weatherState = useSelector((state) => state.weatherReducer);
  const temp = weatherState[0].humidity;
  return (
    <div className="humidity p-3">
      <div className="d-flex justify-content-between">
        <small className="">Humidity</small>
        <img src={humidity} alt="Humidity logo" className="humidity-image" />
      </div>
      <div className="d-flex justify-content-center align-items-baseline m-0 p-0">
        <small className="fw-bold">
          {temp}
          %
        </small>
        <small>&nbsp;bad</small>
      </div>
      <div className="d-flex justify-content-around quality">
        <small>good</small>
        <small>normal</small>
        <small>bad</small>
      </div>
      <div className="bar-box d-flex justify-content-between">
        <div className="hum-meter">
          <div className="hum-fill1" />
        </div>
        <div className="hum-meter">
          <div className="hum-fill2" />
        </div>
        <div className="hum-meter">
          <div className="hum-fill3" />
        </div>
      </div>
    </div>
  );
}
