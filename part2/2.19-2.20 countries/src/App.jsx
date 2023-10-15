import { useState, useEffect } from "react";
import InputEntry from "./components/InputEntry";
import CountriesService from "./services/CountriesService";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState("");
  //CountriesService.GetCountryTest("Australia");

  const GetCountriesHook = () => {
    CountriesService.GetAllCountries()
      .then((initialCountries) => {
        setCountries(initialCountries);
        //console.log("Countries", initialCountries);
      })
      .catch((error) => {
        console.log("Error getting countries", error);
      });
  };

  // UseEffects must go AFTER the functions they hook into
  useEffect(GetCountriesHook, []);

  // Name filter
  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value);
  };

  const countriesToShow = () => {
    if (countryFilter.length === 0) {
      return null;
    }
    return countries.filter((country) =>
      reNameSearchPattern.test(country.name.common)
    );
  };

  const reNameSearchPattern = new RegExp(`^${countryFilter}`, "i");

  const inspectClickHandler = (countryToInspect) => {
    //console.log("Inspecting:", countryToInspect);
    setCountryFilter(countryToInspect);
  };

  return (
    <div className="CenterBox">
      <h1>Countries inspector</h1>
      <hr />
      <div>
        <InputEntry
          newValue={countryFilter}
          label="Country filter"
          handleChange={handleCountryFilterChange}
        />
      </div>
      <br />
      <CountryList
        countriesToShow={countriesToShow()}
        onClickHandler={inspectClickHandler}
      />
    </div>
  );
}

export default App;
