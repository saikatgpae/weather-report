import React from 'react';
import { useSelector } from 'react-redux';
import './uvindex.css';
import uv from '../../images/uv.svg';

export default function UVindex() {
  const weatherState = useSelector((state) => state.weatherReducer);
  const uvI = weatherState[0].uv;
  // eslint-disable-next-line no-var
  var value;
  if (uvI < 3) {
    value = 'normal';
  }
  if (uvI >= 3 || uvI <= 7) {
    value = 'medium';
  }
  if (uvI > 7) {
    value = 'poor';
  }
  const r = document.querySelector(':root');
  if (uvI <= 2) {
    const width = (uvI * 100) / 2;
    r.style.setProperty('--uvbar1', `${width}%`);
  }
  if (uvI > 2 && uvI <= 5) {
    const width = ((uvI - 3) * 100) / 2;
    r.style.setProperty('--uvbar1', '100%');
    r.style.setProperty('--uvbar2', `${width}%`);
  }
  if (uvI > 5 && uvI <= 8) {
    const width = ((uvI - 6) * 100) / 2;
    r.style.setProperty('--uvbar1', '100%');
    r.style.setProperty('--uvbar2', '100%');
    r.style.setProperty('--uvbar3', `${width}%`);
  }
  if (uvI > 7 && uvI <= 10) {
    const width = ((uvI - 8) * 100) / 2;
    r.style.setProperty('--uvbar1', '100%');
    r.style.setProperty('--uvbar2', '100%');
    r.style.setProperty('--uvbar3', '100%');
    r.style.setProperty('--uvbar4', `${width}%`);
  }
  if (uvI > 10 && uvI <= 12) {
    const width = ((uvI - 10) * 100) / 2;
    r.style.setProperty('--uvbar1', '100%');
    r.style.setProperty('--uvbar2', '100%');
    r.style.setProperty('--uvbar3', '100%');
    r.style.setProperty('--uvbar4', '100%');
    r.style.setProperty('--uvbar5', `${width}%`);
  }
  if (uvI > 12) {
    r.style.setProperty('--uvbar1', '100%');
    r.style.setProperty('--uvbar2', '100%');
    r.style.setProperty('--uvbar3', '100%');
    r.style.setProperty('--uvbar4', '100%');
    r.style.setProperty('--uvbar5', '100%');
  }

  return (
    <div className="uvindex p-3">
      <div className="d-flex justify-content-between">
        <small className="">UV Index</small>
        <img src={uv} alt="UV Index logo" className="uv-image" />
      </div>
      <div className="d-flex justify-content-center align-items-baseline m-0 p-0">
        <small className="temp">
          {uvI}
          %
        </small>
        <small>
          &nbsp;
          {value}
        </small>
      </div>
      <div className="d-flex justify-content-around quality">
        <small id="good">0-2</small>
        <small id="normal">3-5</small>
        <small id="normal">6-8</small>
        <small id="bad">9-11</small>
        <small id="bad">11+</small>
      </div>
      <div className="bar-box d-flex justify-content-between">
        <div className="uv-meter">
          <div className="uv-fill1" />
        </div>
        <div className="uv-meter">
          <div className="uv-fill2" />
        </div>
        <div className="uv-meter">
          <div className="uv-fill3" />
        </div>
        <div className="uv-meter">
          <div className="uv-fill4" />
        </div>
        <div className="uv-meter">
          <div className="uv-fill5" />
        </div>
      </div>
    </div>
  );
}
