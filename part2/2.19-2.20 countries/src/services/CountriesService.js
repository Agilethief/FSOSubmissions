import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/";

// Endpoints
// /api/all 	All countries
// /api/name/{name} 	Search by country’s full name. It can be the common or official value

const GetAllCountries = () => {
  const request = axios.get(baseUrl + "api/all");

  return request.then((response) => response.data);
};

const GetCountry = (countryName) => {
  const request = axios.get(baseUrl + "/api/name/" + countryName);

  return request.then((response) => response.data);
};

const GetAllCountriesTest = () => {
  console.log("Running test to get all countries");
  GetAllCountries()
    .then((countryList) => {
      console.log("Got countries", countryList);
    })
    .catch((error) => {
      console.log("Error getting countries", error);
    });
};

const GetAllCountryNames = () => {};

const GetCountryTest = (countryName) => {
  console.log("Running test to get country", countryName);
  GetCountry(countryName)
    .then((country) => {
      console.log("Got country:", country.name.common, country);
    })
    .catch((error) => {
      console.log("Error getting country", error);
    });
};

export default {
  GetAllCountries,
  GetAllCountriesTest,
  GetCountry,
  GetCountryTest,
};
