import React, { useState } from "react";
import "./input.css";
import axios from "axios";

function Input() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const fetchweather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'633c509aea2382369ba73c823e142c2e'}`
      )
      setWeather(response.data)
    } catch (error) {
      alert("Error while Fetching Data: " + error.message);
    }
  };

  return (
    <>
      <div className="inputmain">
        <input
          className="inputtag"
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={handleChange}
        />
        <div className="button">
          <button className="orbtn" onClick={fetchweather}>
            Get Weather
          </button>
        </div>
        <div className="dataprinting">
          {weather && (
            <>
              <div className="cityname">
                <h1>{weather.name}</h1>
              </div>
              <div className="temperature">
                <p>
                  Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C
                </p>
              </div>
              <div className="description">
                <p>Description: {weather.weather[0].description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Input;
