import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

import { fetchDailyData } from "../../api";

import styles from "./Chart.module.css";

const Chart = ({data, country}) => {
  //   // you set your State using const
  //   // dailyData will be the state, setDailyData will be setting the state
  //   // useState(some value) : some value will be the initial value youre setting state to

  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchDailyDataApi = async (country) => {
      const initialDailyData = await fetchDailyData(country);

      setDailyData(initialDailyData);

    };

    fetchDailyDataApi();
  }, []);



  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) =>
          new Date(date).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.recovered),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  console.log(data.confirmed, data.deaths)
  const barChart = (
    data.confirmed ? (
      <Bar 
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: [
              'rgba(0,0,255, 0.5)',
              'rgba(0,255,0, 0.5)',
              'rgba(255,0,0, 0.5)',
             ],
            data:[data.confirmed.value, data.recovered.value, data.deaths.value]
          }]
        }}
        
        options={{
          legend: { display : false},
          title: {display: true, text: `Current state in ${country}`}
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;
