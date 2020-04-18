import React, { useEffect, useState } from "react";
import { Container, Jumbotron } from "reactstrap";
import { Line } from "react-chartjs-2";

const GraphJumbotron = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["4/11", "4/12", "4/13", "4/14", "4/15", "4/16", "4/17"],
      datasets: [
        {
          label: "Number of Postitive COVID-19 Cases",
          data: [64, 65, 69, 74, 76, 79, 85],
          backgroundColor: ["var(--test)"],
          borderWidth: 4,
          lineTension: 0,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <Jumbotron className='number-jumbotron'>
      <Container style={{ width: "80vw", height: "35vw" }}>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: {
              text: "COVID-19 Cases in The Past 7 Days",
              display: true,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: true,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: true,
                  },
                },
              ],
            },
          }}
        />
      </Container>
    </Jumbotron>
  );
};

export default GraphJumbotron;
