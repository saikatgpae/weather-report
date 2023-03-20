import React from 'react';
import './uvindex.css';
import uv from '../../images/uv.svg';

export default function UVindex() {
  return (
    <div className="uvindex d-flex justify-content-between p-3">
      <small className="">UV Index</small>
      <img src={uv} alt="UV Index logo" className="uv-image" />
    </div>
  );
}
