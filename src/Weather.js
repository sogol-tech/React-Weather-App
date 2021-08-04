import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app-wrapper">
        <div className="row">
          <div className="col-4">
            <div className="current-time">
              <small>Wednesday 12:27</small>
            </div>
          </div>
          <div className="col-4">
            <span className="float-right">
              <form className="search">
                <input
                  type="search"
                  placeholder="Search city..."
                  className="form-control-sm mb-3"
                  autocomplete="off"
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
            <strong className="temperature">20°</strong>
          </div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            className="rounded mx-auto d-block"
            alt="Partly cloudy"
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

        <h1 className="city">London</h1>
        <p className="des">Partly cloudy</p>

        <div className="row weather-info">
          <div className="col-6">
            Min: <span>14</span>°C
          </div>
          <div className="col-6">
            Max: <span>20</span>°C
          </div>
          <div className="col-6">
            Humidity: <span>58</span>%
          </div>
          <div className="col-6">
            Wind: <span>4</span> km/h
          </div>
        </div>
        <hr />
        <div className="weather-forecast"></div>
      </div>
    </div>
  );
}
