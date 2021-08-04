import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    dt: "Wednesday 12:43",
    city: "London",
    temperature: "20",
    description: "Partly cloudy",
    min: "14",
    max: "20",
    humidity: "58",
    wind: "5",
    icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };

  return (
    <div className="Weather">
      <div className="weather-app-wrapper">
        <div className="row">
          <div className="col-4">
            <div className="current-time">
              <small>{weatherData.dt}</small>
            </div>
          </div>
          <div className="col-4">
            <span className="float-right">
              <form className="search">
                <input
                  type="search"
                  placeholder="Search city..."
                  className="form-control-sm mb-3"
                  autoComplete="off"
                />
              </form>
            </span>
          </div>
          <div className="col-4">
            <button type="button" className="button">
              Search
            </button>
          </div>
        </div>

        <div className="image-container position-relative">
          <div className="position-absolute temperature-container">
            <strong className="temperature">{weatherData.temperature}°</strong>
          </div>
          <img
            src={weatherData.icon}
            className="rounded mx-auto d-block"
            alt={Weather.description}
            width="200"
          />
        </div>

        <div className="row">
          <div className="text-end">
            <small className="units">
              <a href="/" className="active">
                C
              </a>{" "}
              |
              <a href="/" className="far">
                F
              </a>
            </small>
          </div>
        </div>

        <h1 className="city">{weatherData.city}</h1>
        <p className="des">{weatherData.description}</p>

        <div className="row weather-info">
          <div className="col-6">
            Min: <span>{weatherData.min}</span>°C
          </div>
          <div className="col-6">
            Max: <span>{weatherData.max}</span>°C
          </div>
          <div className="col-6">
            Humidity: <span>{weatherData.humidity}</span>%
          </div>
          <div className="col-6">
            Wind: <span>{weatherData.wind}</span> km/h
          </div>
        </div>
        <hr />
        <div className="weather-forecast"></div>
      </div>
      <footer class="source-link">
        <small>
          This project was coded by
          <a
            href="https://github.com/sogol-tech"
            target="_blank"
            rel="noreferrer"
            className="name"
          >
            Sogol Afshar
          </a>
          and is
          <a
            href="https://github.com/sogol-tech/React-Weather-App.git"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            open-sourced on GitHub
          </a>
          and
          <a
            href="https://dreamy-brahmagupta-dbdebb.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="netlify"
          >
            hosted on Netlify.
          </a>
        </small>
      </footer>
    </div>
  );
}
