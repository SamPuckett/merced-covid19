import React, { useEffect, useState } from "react";
import { Container, Jumbotron } from "reactstrap";
import Spinner from "./Spinner";
import axios from "axios";
import moment from "moment";

const NumberJumbotron = () => {
  useEffect(() => {
    getTotalConfirmedCases();
  }, []);

  const [totalConfirmedCases, setTotalConfirmedCases] = useState("");
  const [sourceLink, setSourceLink] = useState("");

  var date = moment().format("MMMM, Do YYYY");
  // console.log(date);

  const getTotalConfirmedCases = () => {
    // Calls our REST API
    axios
      .get(
        "https://v2-api.sheety.co/960adb5f12d13ecabd707300698d63cd/mercedCountyCovid19/currentDay"
      )
      .then(function(response) {
        // console.log(response.data.currentDay[0]);
        setTotalConfirmedCases(response.data.currentDay[0].totalConfirmedCases);
        setSourceLink(response.data.currentDay[0].source);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <Jumbotron fluid className='number-jumbotron'>
      <Container fluid>
        <h1 className='display-5'>Total Confirmed Cases in Merced County:</h1>
        <div className='display-1' style={{ color: "var(--dark-shades)" }}>
          {totalConfirmedCases === "" ? <Spinner /> : totalConfirmedCases}
        </div>
        <p className='lead'>Last Updated: {date}</p>
        <p>
          Source:{" "}
          {sourceLink !== "" && (
            <a
              href={sourceLink}
              style={{
                color: "var(--dark-shades)",
                fontWeight: "bold"
              }}
            >
              Merced County, Department Of Public Health
            </a>
          )}
        </p>
      </Container>
    </Jumbotron>
  );
};

export default NumberJumbotron;
