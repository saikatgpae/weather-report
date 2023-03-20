import './dashbord.css';
import { useSelector } from 'react-redux';
import React from 'react';
import Profile from '../profile/Profile';
import TempHeader from '../TempHeader/TempHeader';

export default function Dashbord() {
  const weatherState = useSelector((state) => state.weatherReducer);
  const temp = weatherState[0].temparature;

  return (
    <div className="dashbord">
      <div className="time-temperature p-4">
        <TempHeader temp={temp} />
      </div>
      <div className="account p-4 d-flex justify-content-between">
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
    </div>
  );
}
