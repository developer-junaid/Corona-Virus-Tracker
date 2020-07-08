import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import "../../App.css";

function CountryPicker({ setCountry }) {
  // UseState
  const [countriesData, setCountries] = useState([]);

  // Use Effect
  useEffect(() => {
    // Fetch countries
    async function fetchCountries() {
      try {
        const response = await fetch(
          "https://covid19.mathdro.id/api/countries"
        );
        const data = await response.json();
        setCountries(data.countries.map((country) => country.name));
      } catch (error) {
        console.log(error);
      }
    }

    fetchCountries();
  }, [setCountries]);

  return (
    <FormControl className={"form-control"}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      >
        <option value="">Global</option>
        {countriesData.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
