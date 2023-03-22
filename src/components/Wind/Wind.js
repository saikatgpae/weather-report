import { React } from 'react';
import './wind.css';
import wind from '../../images/wind.svg';
import Gauge from '../Gauge/Gauge';

export default function Wind() {
  return (
    <div className="wind p-3 text-center">
      <div className="d-flex justify-content-between">
        <small className="">Wind</small>
        <img src={wind} alt="wind logo" className="wind-image" />
      </div>
      <Gauge />
    </div>
  );
}
