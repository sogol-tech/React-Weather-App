import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="weather-app">
        <div class="weather-app-wrapper">
          <div class="row">
            <div class="col-4">
              <div class="current-time">
                <small id="dt"></small>
              </div>
            </div>
            <div class="col-4">
              <span class="float-right">
                <form class="search" id="searchCity">
                  <input
                    type="search"
                    placeholder="Search city..."
                    class="form-control-sm mb-3"
                    id="city-input"
                    autocomplete="off"
                  />
                </form>
              </span>
            </div>
            <div class="col-4">
              <button type="button" class="button" id="currentLocationButton">
                <i class="fas fa-map-marker-alt"></i>
              </button>
            </div>
          </div>

          <div class="image-container position-relative">
            <div class="position-absolute temperature-container">
              <strong class="temperature font-colour" id="temperature"></strong>
            </div>
            <img
              src="src/images/DAY/1.Clear-sky.jpg"
              class="rounded mx-auto d-block"
              id="img"
              alt="snowy"
              width="400"
            />
          </div>

          <div class="row">
            <div class="text-end">
              <small class="units">
                <a href="#" id="celsius" class="active">
                  C
                </a>{" "}
                |
                <a href="#" class="far" id="fahrenheit">
                  F
                </a>
              </small>
            </div>
          </div>

          <h1 class="city" id="city"></h1>
          <p class="des" id="description"></p>

          <div class="row weather-info">
            <div class="col-6">
              Min: <span id="minTemp"></span>°C
            </div>
            <div class="col-6">
              Max: <span id="maxTemp"></span>°C
            </div>
            <div class="col-6">
              Humidity: <span id="humidity"></span>%
            </div>
            <div class="col-6">
              Wind: <span id="wind"></span> km/h
            </div>
          </div>
          <hr />
          <div class="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
