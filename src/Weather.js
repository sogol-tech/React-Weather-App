import React from "react";

export default function Weather() {
  return (
    <div className="weather-app">
      <div className="weather-app-wrapper">
        <div className="row">
          <div className="col-4">
            <div className="current-time">
              <small id="dt"></small>
            </div>
          </div>
          <div className="col-4">
            <span className="float-right">
              <form className="search" id="searchCity">
                <input
                  type="search"
                  placeholder="Search city..."
                  className="form-control-sm mb-3"
                  id="city-input"
                  autocomplete="off"
                />
              </form>
            </span>
          </div>
          <div className="col-4">
            <button type="button" className="button" id="currentLocationButton">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div>

        <div className="image-container position-relative">
          <div className="position-absolute temperature-container">
            <strong
              className="temperature font-colour"
              id="temperature"
            ></strong>
          </div>
          <img
            src="src/images/DAY/1.Clear-sky.jpg"
            className="rounded mx-auto d-block"
            id="img"
            alt="snowy"
            width="400"
          />
        </div>

        <div className="row">
          <div className="text-end">
            <small className="units">
              <a href="/" id="celsius" className="active">
                C
              </a>{" "}
              |
              <a href="/" className="far" id="fahrenheit">
                F
              </a>
            </small>
          </div>
        </div>

        <h1 className="city" id="city"></h1>
        <p className="des" id="description"></p>

        <div className="row weather-info">
          <div className="col-6">
            Min: <span id="minTemp"></span>°C
          </div>
          <div className="col-6">
            Max: <span id="maxTemp"></span>°C
          </div>
          <div className="col-6">
            Humidity: <span id="humidity"></span>%
          </div>
          <div className="col-6">
            Wind: <span id="wind"></span> km/h
          </div>
        </div>
        <hr />
        <div className="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}
