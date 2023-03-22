import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './tempHeader.css';
import plus from '../../images/add_box_white_24dp.svg';
import dot from '../../images/dot_blank.svg';
import toggleOff from '../../images/toggle2-off.svg';
import toggleOn from '../../images/toggle2-on.svg';
import left from '../../images/chevron_left_white_24dp.svg';
import next from '../../images/navigate_next_white_24dp.svg';
import sunny from '../../images/wb_sunny_white_24dp.svg';
import profileLocation from '../../images/near_me_white_24dp.svg';
import { fahrenheit, celsius } from '../../store/whetherRedux';
import Sunrise from '../Sunrise/Sunrise';
import Sunset from '../Sunset/Sunset';

export default function TempHeader(props) {
  const dispatch = useDispatch();
  const weatherState = useSelector((state) => state.weatherReducer);
  const { location } = weatherState[0];
  /* eslint-disable-next-line no-use-before-define, react/prop-types */
  const { temp } = props;
  const date = new Date();
  const newYorkHour = String(date.getUTCHours()).padStart(2, '0');
  const newYorkMin = String(date.getUTCMinutes()).padEnd(2, '0');
  const day = date.getDate();
  const today = date.toString().slice(4, 8);
  const handelToggle = (e) => {
    const toggled = e.target;
    const parent = toggled.parentNode;
    const current = parent.childNodes[0].classList;
    if (current.contains('invisible') === true) {
      dispatch(celsius((((temp * 1.8) + 32).toFixed(2))));
    } else {
      dispatch(fahrenheit(((temp - 32) / 1.8).toFixed(2)));
    }
    parent.childNodes[0].classList.toggle('invisible');
    parent.childNodes[1].classList.toggle('invisible');
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-5">
        <img src={plus} alt="pl" className="plus" />
        <div className="d-flex">
          <img src={dot} alt="pl" className="dot p-0 m-0" />
          <img src={dot} alt="pl" className="dot" />
          <img src={dot} alt="pl" className="dot" />
          <img src={dot} alt="pl" className="dot" />
        </div>
        <div>
          <small className="celcious">ºC</small>
          <button type="button" onClick={handelToggle} className="toggle p-0">
            <img src={toggleOn} alt="pl" className="toggle-on invisible" />
            <img src={toggleOff} alt="pl" className="toggle-off" />
          </button>
          <small className="farenhite">ºF</small>
        </div>
      </div>
      <div className="newyork-time d-flex justify-content-between">
        <div>
          <img src={profileLocation} alt="location logo" />
          <small className="today text-light">
            {location}
          &nbsp;
            {day}
          &nbsp;
            {today}
          </small>
        </div>
        <div className="d-flex align-items-center">
          { newYorkHour > 12 ? <Sunset /> : <Sunrise />}
          <small className="text-light">
            &nbsp;
            {newYorkHour}
            :
            {newYorkMin}
          </small>
        </div>
      </div>
      <div className="today d-flex justify-content-between mb-4">
        <small className="today text-light">
          Today&nbsp;
          {day}
          &nbsp;
          {today}
        </small>
        <div className="d-flex align-items-center">
          {date.getHours > 12 ? <Sunset /> : <Sunrise />}
          <small className="text-light">
            &nbsp;
            {String(date.getHours()).padStart(2, '0')}
            :
            {String(date.getMinutes()).padEnd(2, '0')}
          </small>
        </div>
      </div>
      <div className="d-flex justify-content-center justify-content-between mt-4">
        <img src={left} alt="left-arrow" className="left-arrow" />
        <h1 className="temparature text-light">
          {parseFloat(temp)}
          º
        </h1>
        <img src={next} alt="next-arrow" className="next" />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <img src={sunny} alt="weather condition" className="next" />
        <h6 className="text-light m-0">Sunny</h6>
      </div>
    </>
  );
}
