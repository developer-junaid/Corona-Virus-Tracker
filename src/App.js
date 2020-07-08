import React, { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import "./App.css";
import coronaImage from "./images/img.png";
import Footer from "./components/Footer/Footer";

function App() {
  // UseState Hook to store the API current state
  const [data, setData] = useState({});
  const [countryData, setCountryData] = useState("");

  // Async function to get Data
  async function getData(country) {
    let url = "https://covid19.mathdro.id/api";
    let changeableUrl = url;

    if (country) {
      changeableUrl = `${url}/countries/${country}`;
    }

    try {
      const response = await fetch(changeableUrl);
      let { confirmed, recovered, deaths, lastUpdate } = await response.json();
      setData({ confirmed, recovered, deaths, lastUpdate });
    } catch (error) {
      console.log(error);
    }
  }

  async function setCountry(thecountry) {
    getData(thecountry);
    setData(thecountry);
    setCountryData(thecountry);
  }

  // UseEffect Hook to Call API Once !!
  useEffect(() => {
    getData();
  }, []);

  // Return
  return (
    <div className={"container"}>
      <img src={coronaImage} alt="Corona Virus Tracker" className="image" />
      <Cards state={data} />
      <CountryPicker setCountry={setCountry} />
      <Chart data={data} countryData={countryData} />
      <Footer />
    </div>
  );
}

export default App;
