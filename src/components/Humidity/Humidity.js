import React from 'react';
import { useSelector } from 'react-redux';
import './humidity.css';
import humidity from '../../images/humidity.svg';

export default function Humidity() {
  const weatherState = useSelector((state) => state.weatherReducer);
  const temp = weatherState[0].humidity;
  const r = document.querySelector(':root');
  // eslint-disable-next-line no-var
  var value;
  if (temp >= 33 && temp >= 66) {
    r.style.setProperty('--bar1', '100%');
    r.style.setProperty('--bar2', '100%');
    const wdth1 = (((temp - 66) * 100) / 33).toFixed(2);
    r.style.setProperty('--bar3', `${wdth1}%`);
    value = 'bad';
  }
  if (temp >= 33 && temp < 66) {
    r.style.setProperty('--bar1', '100%');
    const wdth = (((temp - 33) * 100) / 33).toFixed(2);
    r.style.setProperty('--bar2', `${wdth}%`);
    value = 'normal';
  }
  if (temp < 33) {
    const wdth = ((temp * 100) / 33).toFixed(2);
    r.style.setProperty('--bar1', `${wdth}%`);
    value = 'good';
  }

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
        <small>
          &nbsp;
          {value}
        </small>
      </div>
      <div className="d-flex justify-content-around quality">
        <small id="good">good</small>
        <small id="normal">normal</small>
        <small id="bad">bad</small>
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
