import './dashbord.css';
import { useSelector } from 'react-redux';
import React from 'react';
import Profile from '../profile/Profile';
import TempHeader from '../TempHeader/TempHeader';
import WeatherInfoSevenhours from '../WeatherInfoSevenhours/WeatherInfoSevenhours';
import Humidity from '../Humidity/Humidity';
import Wind from '../Wind/Wind';
import Precepitation from '../Precepitation/Precepitation';
import UVindex from '../UVindex/UVindex';
import FeelsLike from '../FeelsLike/FeelsLike';
import Rain from '../Rain/Rain';

export default function Dashbord() {
  const weatherState = useSelector((state) => state.weatherReducer);
  const temp = weatherState[0].temparature;

  return (
    <div className="d-flex dashbord">
      <div className="time-temperature p-4">
        <TempHeader temp={temp} />
      </div>
      <div className="account p-5 ">
        <div className="d-flex justify-content-between mb-4">
          <div className="profile">
            <h5 className="m-0">
              Welcome back &nbsp;
              {weatherState[0].name}
            &nbsp;!
            </h5>
            <small>Check out today&apos;s weather information</small>
          </div>
          <Profile />
        </div>
        <div className="mb-3">
          <WeatherInfoSevenhours />
        </div>
        <div className="mb-3 text-start">
          <h6 className="fw-bolder">More details of today&apos;s weather</h6>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <Humidity />
          <Wind />
          <Precepitation />
        </div>
        <div className="d-flex justify-content-between">
          <UVindex />
          <FeelsLike />
          <Rain />
        </div>
      </div>
    </div>
  );
}
