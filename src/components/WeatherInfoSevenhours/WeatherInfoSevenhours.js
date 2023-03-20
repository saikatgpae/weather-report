import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import nextarrow from '../../images/next.svg';
import downarrow from '../../images/downarrow.svg';
import './weatherInfoSevenhours.css';
import Cloudy from '../Cloudy/Cloudy';
import Sunny from '../Sunny/Sunny';
// /* eslint-disable */
export default function WeatherInfoSevenhours() {
  const areaStyle = { fill: '#5C9BE5', stroke: '#5C9BE5', strokeWidth: '1' };
  const precipitations = [23, 29, 58, 75, 33, 20, 73, 49];
  const times = ['Now', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  return (
    <div className="hourly-info p-4">
      <div className="d-flex justify-content-between">
        <span>Upcoming hours</span>
        <div className="buttons">
          <button type="button" className="rain-prece text-muted p-1">
            Rain precipitation
            <img src={downarrow} alt="down arrow" className="next p-0 m-0" />
          </button>
          <button type="button" className="next-day p-1 fw-bold">
            Next days
            <img src={nextarrow} alt="next arrow" className="nextarrow" />
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between p-0 m-0">
        {times.map((time) => (
          <small key={uuidv4()}>
            {time}
          </small>
        ))}
      </div>
      <div className="d-flex justify-content-between">
        <Sunny />
        <Sunny />
        <Cloudy />
        <Cloudy />
        <Sunny />
        <Cloudy />
        <Cloudy />
        <Sunny />
      </div>
      <div className="d-flex justify-content-between p-2">
        <div className="area-box left">
          <svg height="200" width="500">
            <polyline points="0,70 91,50 91,70" style={areaStyle} />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
        <div className="area-box">
          <svg height="200" width="500">
            <polyline points="0,50 92,40 92,70 0,70" style={areaStyle} />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
        <div className="area-box">
          <svg height="200" width="500">
            <polyline points="0,40 92,35 92,70 0,70" style={areaStyle} />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
        <div className="area-box">
          <svg height="200" width="500">
            <polyline points="0,35 92,45 92,70 0,70" style={areaStyle} />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
        <div className="area-box">
          <svg height="200" width="500">
            <polyline points="0,45 92,55 92,70 0,70" style={areaStyle} />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
        <div className="area-box">
          <svg height="200" width="500">
            <polyline points="0,55 92,50 92,70 0,70" style={areaStyle} />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
        <div className="area-box">
          <svg height="200" width="500">
            <polyline points="0,50 92,50 92,70 0,70" style={areaStyle} />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
      </div>
      <div className="d-flex justify-content-between m-0">
        {precipitations.map((precp) => (
          <small key={uuidv4()}>
            {precp}
            %
          </small>
        ))}
      </div>
    </div>
  );
}
