import React from 'react';
import { useSelector } from 'react-redux';
import './humidity.css';
import humidity from '../../images/humidity.svg';

export default function Humidity() {
  const weatherState = useSelector((state) => state.weatherReducer);
  const hum = weatherState[0].humidity;
  const r = document.querySelector(':root');
  // eslint-disable-next-line no-var
  var value;
  if (hum >= 33 && hum >= 66) {
    r.style.setProperty('--bar1', '100%');
    r.style.setProperty('--bar2', '100%');
    const wdth1 = (((hum - 66) * 100) / 33).toFixed(2);
    r.style.setProperty('--bar3', `${wdth1}%`);
    value = 'bad';
  }
  if (hum >= 33 && hum < 66) {
    r.style.setProperty('--bar1', '100%');
    const wdth = (((hum - 33) * 100) / 33).toFixed(2);
    r.style.setProperty('--bar2', `${wdth}%`);
    value = 'normal';
  }
  if (hum < 33) {
    const wdth = ((hum * 100) / 33).toFixed(2);
    r.style.setProperty('--bar1', `${wdth}%`);
    value = 'good';
  }
  if (hum > 100) {
    r.style.setProperty('--bar1', '100%');
    r.style.setProperty('--bar2', '100%');
    r.style.setProperty('--bar3', '100%');
    value = 'good';
  }

  return (
    <div className="humidity p-3">
      <div className="d-flex justify-content-between">
        <small className="">Humidity</small>
        <img src={humidity} alt="Humidity logo" className="humidity-image" />
      </div>
      <div className="d-flex justify-content-center align-items-baseline m-0 p-0">
        <small className="temp">
          {hum}
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
