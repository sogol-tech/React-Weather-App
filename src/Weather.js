import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app-wrapper">
        <div className="row">
          <div className="col-4">
            <div className="current-time">
              <small>Wed 4 Aug</small>
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
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div>

        <div className="image-container position-relative">
          <div className="position-absolute temperature-container">
            <strong className="temperature font-colour">20°</strong>
          </div>
          <img
            src="src/images/01d.png"
            className="rounded mx-auto d-block"
            alt="snowy"
            width="400"
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
        <p className="des">Clear sky</p>

        <div className="row weather-info">
          <div className="col-6">
            Min: <span></span>°C
          </div>
          <div className="col-6">
            Max: <span></span>°C
          </div>
          <div className="col-6">
            Humidity: <span></span>%
          </div>
          <div className="col-6">
            Wind: <span></span> km/h
          </div>
        </div>
        <hr />
        <div className="weather-forecast"></div>
      </div>
    </div>
  );
}
