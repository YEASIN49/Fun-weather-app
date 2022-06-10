import React, {useEffect, useState} from 'react';
import './App.css';



const Card = ({city}) => {


  return (

    <div className="card">
        <div className="weather loading">
          <h2 className="city-1">Weather in {city?.name}</h2>
          <h1 className="temp">Temp: {city?.main.temp}°F</h1>
          <div className="flex">
            <img src="https://openweathermap.org/img/wn/04n.png" alt="" className="icon" />
          <div className="description">Cloudy</div>
          </div>
          <div className="humidity">Humidity: {city?.main.humidity}%</div>
          <div className="wind">Wind speed: {city.wind.speed} km/h</div>
        </div>
      </div>
  );
}

export default Card;
