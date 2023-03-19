import React from 'react';
import { useDispatch } from 'react-redux';
import './tempHeader.css';
import plus from '../../images/add_box_white_24dp.svg';
import dot from '../../images/dot_blank.svg';
import toggleOff from '../../images/toggle2-off.svg';
import toggleOn from '../../images/toggle2-on.svg';
import left from '../../images/chevron_left_white_24dp.svg';
import next from '../../images/navigate_next_white_24dp.svg';
import { fahrenheit, celsius } from '../../store/whetherRedux';

export default function TempHeader(props) {
  const dispatch = useDispatch();
  /* eslint-disable-next-line no-use-before-define, react/prop-types */
  const { temp } = props;
  const handelToggle = (e) => {
    const toggled = e.target;
    const parent = toggled.parentNode;
    const current = parent.childNodes[0].classList;
    // console.log(current.contains('invisible'));
    if (current.contains('invisible') === true) {
    //   console.log('fahrenheit');
      dispatch(celsius((((temp * 1.8) + 32).toFixed(2))));
    //   dispatch(fahrenheit(((temp - 32) / 1.8).toFixed(2)));
    } else {
    //   console.log('celcious');
      dispatch(fahrenheit(((temp - 32) / 1.8).toFixed(2)));
    //   dispatch(celsius((((temp * 1.8) + 32).toFixed(2))));
    }
    parent.childNodes[0].classList.toggle('invisible');
    parent.childNodes[1].classList.toggle('invisible');
  };

  return (
    <>
      <div className="d-flex justify-content-around">
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
      <div className="d-flex">
        <img src={left} alt="left arrow" className="left" />
        <h1 className="temparature text-light">
          {temp}
          º
        </h1>
        <img src={next} alt="next arrow" className="next" />
      </div>
    </>
  );
}
