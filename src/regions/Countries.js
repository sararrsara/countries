import React, { useState, useEffect } from "react";
import Api from "../apis/CountriesApi";

const Countries = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      console.log(props.regionSelected);
      const response = await Api.get(`/region/${props.regionSelected}`);
      setCountries(response.data);
    }

    getCountries();
  }, [props.regionSelected]);

  return (
    <div>
      {countries.map((country, index) => {
        return (
          <div key={index}>
            <div>Country: {country.name}</div>
            <ul>
              <li>Native name: {country.nativeName}</li>
              <li>Capital: {country.capital}</li>
              <li>Population: {country.population}</li>
              <li>Region: {country.subregion}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
