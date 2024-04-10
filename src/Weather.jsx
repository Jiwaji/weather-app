import { useState, useEffect } from 'react';

import weatherIcon from './assets/weather.svg';
import searchIcon from './assets/search.svg';
import detectIcon from './assets/detect.svg';

import WeatherCards from './WeatherCards';
import Hightlights from './Highlights';

import './Weather.css';

export default function () {
  const [weather, setWeather] = useState(null);
  const today = new Date();
  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };

  const currentDay = days[today.getDay()];
  const currentHour = today.getHours();
  const currentMinutes =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
  const currentTime = ` ${currentHour}:${currentMinutes}`;

  async function getWeather() {
    const pos = navigator.geolocation.getCurrentPosition(async (pos) => {
        const lat = pos.coords.latitude;
        const long = pos.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=27e5bf61dcbdeb3d91cf8b11080640d5`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setWeather(data)
    });
    
    // console.log(data);
    // setWeather(data)
  }

  useEffect(() => {
    getWeather();
  }, []);
  return (
    <div className="main">
      <div className="left">
        <div className="left-inner">
          <div className="searchbar">
            <div className="search-icon">
              <img src={searchIcon} alt="search icon" />
            </div>
            <input type="text" placeholder="Search for places..." />
            <div className="detect-location-icon">
              <img src={detectIcon} alt="detect icon" />
            </div>
          </div>
          <div className="current-temp">
            <div className="temp-img">
              <img src={weatherIcon} alt="weather" />
            </div>
            <p className="temp">21 &#8451;</p>
            <p className="day">
              {currentDay},<span className="current-time">{currentTime}</span>
            </p>
            <hr />
            <div className="current-weather">
              <div className="weather clouds">
                <img src={weatherIcon} alt="clouds" width="20" height="20" />
                <p>Cloudy</p>
              </div>
              <div className="weather rain">
                <img src={weatherIcon} alt="rain" width="20" height="20" />
                <p>Rain 50%</p>
              </div>
            </div>
            <div className="city-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
                alt="city-banner"
                width="200"
                height="100"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        {/* <WeeklyWeahter /> */}
        <div className="right-top">
          <div className="header">
            <div className="tab">
              <a href='#'>Today</a>
              <a href='#' className='active'>Week</a>
            </div>
            <div className="unit">
              <button className='active'>&#8451;</button>
              <button>&#8457;</button>
            </div>
            <div className="profile">
              <img src={weatherIcon} alt="profile" />
            </div>
          </div>
          <WeatherCards/>
        </div>
        <div className='right-bottom'>
          <Hightlights/>
        </div>
      </div>
    </div>
  );
}
