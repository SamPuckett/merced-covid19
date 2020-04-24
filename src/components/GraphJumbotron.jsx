import React, { useEffect, useState } from "react";
import { Container, Jumbotron } from "reactstrap";
import { Line } from "react-chartjs-2";
import "./GraphJumbotron.css";

const GraphJumbotron = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: [
        "4/1",
        "4/2",
        "4/3",
        "4/4",
        "4/5",
        "4/6",
        "4/7",
        "4/8",
        "4/9",
        "4/10",
        "4/11",
        "4/12",
        "4/13",
        "4/14",
        "4/15",
        "4/16",
        "4/17",
        "4/18",
        "4/19",
        "4/20",
        "4/21",
        "4/22",
        "4/23",
        "4/24",
      ],
      datasets: [
        {
          label: "Number of Postitive COVID-19 Cases",
          data: [
            12,
            16,
            19,
            27,
            29,
            29,
            34,
            40,
            52,
            59,
            64,
            65,
            69,
            74,
            76,
            79,
            85,
            86,
            90,
            90,
            92,
            93,
            97,
            100,
          ],
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
      <Container className='graph-jumbotron'>
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title: {
              text: "COVID-19 Cases in April",
              display: true,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    // maxTicksLimit: 10,
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
                    // maxTicksLimit: 10,
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
