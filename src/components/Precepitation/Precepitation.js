import React from 'react';
import { useSelector } from 'react-redux';
import './precepitation.css';
import rain from '../../images/rain.svg';

export default function Precepitation() {
  const weatherState = useSelector((state) => state.weatherReducer);
  const pre = weatherState[0].precipitation;
  const r = document.querySelector(':root');
  if (pre > 0 && pre <= 1) {
    const width = (pre * 100);
    r.style.setProperty('--prebar1', `${width}%`);
  }
  if (pre > 1 && pre <= 2) {
    const width = ((pre - 1) * 100);
    r.style.setProperty('--prebar1', '100%');
    r.style.setProperty('--prebar2', `${width}%`);
  }

  if (pre > 2 && pre <= 3) {
    const width = ((pre - 2) * 100);
    r.style.setProperty('--prebar1', '100%');
    r.style.setProperty('--prebar2', '100%');
    r.style.setProperty('--prebar3', `${width}%`);
  }
  if (pre > 3 && pre <= 4) {
    const width = ((pre - 3) * 100);
    r.style.setProperty('--prebar1', '100%');
    r.style.setProperty('--prebar2', '100%');
    r.style.setProperty('--prebar3', '100%');
    r.style.setProperty('--prebar4', `${width}%`);
  }
  if (pre > 4 && pre <= 5) {
    const width = ((pre - 4) * 100);
    r.style.setProperty('--prebar1', '100%');
    r.style.setProperty('--prebar2', '100%');
    r.style.setProperty('--prebar3', '100%');
    r.style.setProperty('--prebar4', '100%');
    r.style.setProperty('--prebar5', `${width}%`);
  }
  if (pre > 5 && pre <= 6) {
    const width = ((pre - 5) * 100);
    r.style.setProperty('--prebar1', '100%');
    r.style.setProperty('--prebar2', '100%');
    r.style.setProperty('--prebar3', '100%');
    r.style.setProperty('--prebar4', '100%');
    r.style.setProperty('--prebar5', '100%');
    r.style.setProperty('--prebar6', `${width}%`);
  }
  if (pre > 6 && pre <= 7) {
    const width = ((pre - 6) * 100);
    r.style.setProperty('--prebar1', '100%');
    r.style.setProperty('--prebar2', '100%');
    r.style.setProperty('--prebar3', '100%');
    r.style.setProperty('--prebar4', '100%');
    r.style.setProperty('--prebar5', '100%');
    r.style.setProperty('--prebar6', '100%');
    r.style.setProperty('--prebar7', `${width}%`);
  }
  if (pre > 7 && pre <= 8) {
    const width = ((pre - 7) * 100);
    r.style.setProperty('--prebar1', '100%');
    r.style.setProperty('--prebar2', '100%');
    r.style.setProperty('--prebar3', '100%');
    r.style.setProperty('--prebar4', '100%');
    r.style.setProperty('--prebar5', '100%');
    r.style.setProperty('--prebar6', '100%');
    r.style.setProperty('--prebar7', '100%');
    r.style.setProperty('--prebar8', `${width}%`);
  }
  if (pre > 8 && pre <= 9) {
    const width = ((pre - 8) * 100);
    r.style.setProperty('--prebar1', '100%');
    r.style.setProperty('--prebar2', '100%');
    r.style.setProperty('--prebar3', '100%');
    r.style.setProperty('--prebar4', '100%');
    r.style.setProperty('--prebar5', '100%');
    r.style.setProperty('--prebar6', '100%');
    r.style.setProperty('--prebar7', '100%');
    r.style.setProperty('--prebar8', '100%');
    r.style.setProperty('--prebar9', `${width}%`);
  }
  if (pre > 9 && pre <= 10) {
    const width = ((pre - 9) * 100);
    r.style.setProperty('--prebar1', '100%');
    r.style.setProperty('--prebar2', '100%');
    r.style.setProperty('--prebar3', '100%');
    r.style.setProperty('--prebar4', '100%');
    r.style.setProperty('--prebar5', '100%');
    r.style.setProperty('--prebar6', '100%');
    r.style.setProperty('--prebar7', '100%');
    r.style.setProperty('--prebar8', '100%');
    r.style.setProperty('--prebar9', '100%');
    r.style.setProperty('--prebar10', `${width}%`);
  }

  if (pre > 10) {
    r.style.setProperty('--prebar1', '100%');
    r.style.setProperty('--prebar2', '100%');
    r.style.setProperty('--prebar3', '100%');
    r.style.setProperty('--prebar4', '100%');
    r.style.setProperty('--prebar5', '100%');
    r.style.setProperty('--prebar6', '100%');
    r.style.setProperty('--prebar7', '100%');
    r.style.setProperty('--prebar8', '100%');
    r.style.setProperty('--prebar9', '100%');
    r.style.setProperty('--prebar10', '100%');
  }

  return (
    <div className="rain p-3">
      <div className="d-flex justify-content-between">
        <small className="">Precipitation</small>
        <img src={rain} alt="rain logo" className="rain-image" />
      </div>
      <div className="d-flex justify-content-center align-items-baseline m-0 p-0">
        <small className="temp">
          {pre}
          %
        </small>
        <small>
          &nbsp;
          cm
        </small>
      </div>
      <div className="d-flex justify-content-around quality">
        <small id="normal">0</small>
        <small id="normal">10</small>
        <small id="normal">20</small>
        <small id="normal">30</small>
        <small id="normal">40</small>
        <small id="normal">50</small>
        <small id="normal">60</small>
        <small id="normal">70</small>
        <small id="normal">80</small>
        <small id="normal">90</small>
      </div>
      <div className="bar-box d-flex justify-content-between">
        <div className="pre-meter">
          <div className="pr-fill1" />
        </div>
        <div className="pre-meter">
          <div className="pr-fill2" />
        </div>
        <div className="pre-meter">
          <div className="pr-fill3" />
        </div>
        <div className="pre-meter">
          <div className="pr-fill4" />
        </div>
        <div className="pre-meter">
          <div className="pr-fill5" />
        </div>
        <div className="pre-meter">
          <div className="pr-fill6" />
        </div>
        <div className="pre-meter">
          <div className="pr-fill7" />
        </div>
        <div className="pre-meter">
          <div className="pr-fill8" />
        </div>
        <div className="pre-meter">
          <div className="pr-fill9" />
        </div>
        <div className="pre-meter">
          <div className="pr-fill10" />
        </div>
      </div>
    </div>
  );
}
