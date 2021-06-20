import React from "react";
import { Bar } from "react-chartjs-2";

function DaysOnMarketChart(props) {

  const BarChart = ({ type }) => {
    const obj = {};

      let options = {
        plugins: {
          legend: {
              display: false
          },
          title: {
            display: true,
            text: 'Days on Market',
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Property Price'
       },
       scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          },
          title: {
            display: true,
            text: 'Property Count',
            font: {
              size: 11,
              weight: 'bold',
              lineHeight: 1
            }
          }
        }
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
    // obj is an object {"100": 2}
    // Object.entries [["100", 2]]
    // when we map, we turn it back to [[100, 2]]
    // when we sort, we can compare the numbers
    let entries = Object.entries(obj).map(e => [Number(e[0]),e[1]]).sort((a, b) => (a[0] > b[0] ? 1 : -1)) || [];

     return (
        <Bar
          data={{
            labels: entries.map((x) => x[0] + ' days'),
            datasets: [
              {
                data: entries.map((x) => x[1]), 
                backgroundColor: '#3f88c5',
                borderColor: '#3f88c5'
              },
            ],
          }}
          options={options} 
          height={280}
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