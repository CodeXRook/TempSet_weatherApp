import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

const WeatherApp = () => {
    <div>
        <span><i className="fab fa-react"></i></span>
        <span>Weather App</span>
        <span><i className="wi wi-day-sunny"></i></span>
    </div>
};

const ROOT_NODE = document.getElementById('root');
ReactDom.render(<WeatherApp />, ROOT_NODE);