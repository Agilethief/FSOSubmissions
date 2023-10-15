import Weather from "./Weather";

const CountryList = (props) => {
  // No result return
  if (props.countriesToShow === null) {
    return null;
  }

  // Too many return
  if (props.countriesToShow.length > 10) {
    return (
      <div>
        <div>Found {props.countriesToShow.length} matches </div>
        <div>Too many matches, please be more specific.</div>
      </div>
    );
  }

  // Single country return
  if (props.countriesToShow.length === 1) {
    const country = props.countriesToShow[0];
    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>Capital city: {country.capital}</div>
        <div>Population: {country.population} people</div>
        <div>Area: {country.area} Sq?</div>
        <br />
        <div>
          <h2>Languages</h2>
          <ul>
            {Object.keys(country.languages).map((language) => (
              <li key={language}>{country.languages[language]}</li>
            ))}
          </ul>
        </div>

        <img src={country.flags.png} />
        <br />
        <Weather latlang={country.latlng} />
      </div>
    );
  }

  // Basic return
  return (
    <div>
      <h2>Countries List</h2>
      <ul>
        {props.countriesToShow.map((country) => (
          <div key={country.cca2}>
            {country.name.common}
            <button
              className="button"
              onClick={() => props.onClickHandler(country.name.common)}
            >
              {" "}
              Inspect
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
