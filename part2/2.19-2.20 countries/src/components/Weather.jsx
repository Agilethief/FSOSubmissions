import OpenMeteo from "../services/OpenMeteo";
import { useState, useEffect } from "react";

const Weather = (props) => {
  const [weather, setWeather] = useState([]);

  const latlang = props.latlang;
  const long = latlang[1];
  const lat = latlang[0];

  const GetWeatherHook = () => {
    OpenMeteo.GetWeather(long, lat)
      .then((returnedWeather) => {
        setWeather(returnedWeather);
      })
      .catch((error) => {
        console.log("Error getting weather", error);
      });
  };
  useEffect(GetWeatherHook, []);

  if (weather.length === 0) {
    return null;
  }

  return (
    <div>
      <hr />
      <h2>Weather:</h2>
      <div>Long: {long}</div>
      <div>Lat: {lat}</div>
      <div>
        Temperature: {weather.current.temperature_2m}{" "}
        {weather.current_units.temperature_2m}
      </div>
      <div>
        Wind: {weather.current.windspeed_10m}{" "}
        {weather.current_units.windspeed_10m}
      </div>
    </div>
  );
};

export default Weather;
