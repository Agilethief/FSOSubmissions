import axios from "axios";
const baseUrl = "https://api.open-meteo.com/v1/forecast?";

const GetWeather = (long, lat) => {
  const requestString =
    baseUrl +
    "latitude=" +
    lat.toString() +
    "&longitude=" +
    long.toString() +
    "&current=temperature_2m,windspeed_10m";

  console.log("get string: ", requestString);
  const request = axios.get(requestString);

  return request.then((response) => response.data);
};

export default {
  GetWeather,
};

/*

https://api.open-meteo.com/v1/forecast?latitude=-25&longitude=135&current=temperature_2m,windspeed_10m
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m
https://api.open-meteo.com/v1/forecast?latitude=" + \
        str(long_lat[1]) + "&longitude=" + \
        str(long_lat[0]) + \
        "&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,precipitation_probability,precipitation,cloudcover,visibility,evapotranspiration,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,rain_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max&current_weather=true&forecast_days=1&timezone=Australia%2FSydney"
*/
