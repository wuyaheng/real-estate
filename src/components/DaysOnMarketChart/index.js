import React from "react";
import { Bar } from "react-chartjs-2";

function DaysOnMarketChart(props) {

  const BarChart = ({ type }) => {
    const obj = {};

      let options = {
        legend: {
          display: true,
          text: 'Price'
        },
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Property Price'
       },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                display: true
              }
            }
          ],
          yAxes: [{
            ticks: {
              display: true
            },
            gridLines: {
              display: false
            }
        }]
        }
      };

    props.results.forEach((ele) => {
      const key = ele[type];
      if (key)
        if (obj[key]) {
          obj[key] += 1;
        } else {
          obj[key] = 1;
        }
    });

    let entries = Object.entries(obj).sort((a, b) => (a[0] > b[0] ? 1 : -1)) || [];
     return (
        <Bar
          data={{
            labels: entries.map((x) => x[0]),
            datasets: [
              {
                data: entries.map((x) => x[1]), 
                backgroundColor: '#3f88c5',
                borderColor: '#3f88c5'
              },
            ],
          }}
          options={options} 
          height={300}
        />
      );

  };



  return (
        <div>
          <BarChart type="daysOnMarket" />
        </div>
  );
}

export default DaysOnMarketChart;