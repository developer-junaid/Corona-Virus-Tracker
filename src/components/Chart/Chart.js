import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import "../../App.css";

function Chart({ data: { confirmed, recovered, deaths }, countryData }) {
  // Use State
  const [dailyData, setDailyData] = useState([]);

  // Use Effect
  useEffect(() => {
    // Fetch Data
    async function fetchData() {
      try {
        const response = await fetch("https://covid19.mathdro.id/api/daily");
        const alldata = await response.json();
        const data = alldata.map((dailyData) => ({
          confirmed: dailyData.confirmed.total,
          deaths: dailyData.deaths.total,
          date: dailyData.reportDate,
        }));
        setDailyData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const LineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  // Barchart
  const Barchart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State in ${countryData}` },
      }}
    />
  ) : null;

  // Chart to show
  let chartToShow = countryData ? Barchart : LineChart;

  return <div className={"chart-container"}>{chartToShow}</div>;
}

export default Chart;
