import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import Spinner from "./Spinner";

const Body = props => {
  useEffect(() => {
    getTotalConfirmedCases();
  }, []);

  const [totalConfirmedCases, setTotalConfirmedCases] = useState("");

  var date = moment().format("MMMM, Do YYYY");
  // console.log(date);

  const getTotalConfirmedCases = () => {
    // Calls our REST API
    axios
      .get(
        "https://v2-api.sheety.co/960adb5f12d13ecabd707300698d63cd/mercedCountyCovid19/currentDay"
      )
      .then(function(response) {
        // console.log(response.data.currentDay[0].totalConfirmedCases);
        setTotalConfirmedCases(response.data.currentDay[0].totalConfirmedCases);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <>
      <Container
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Row style={row}>
          <Col>
            <Jumbotron
              fluid
              style={{
                borderRadius: "20px",
                backgroundColor: "var(--light-shades)",
                display: "flex",
                justifySelf: "center",
                alignSelf: "center",
                marginBottom: "4rem"
              }}
            >
              <Container fluid>
                <h1 className='display-5'>
                  Total Confirmed Cases in Merced County:
                </h1>
                <div
                  className='display-1'
                  style={{ color: "var(--dark-shades)" }}
                >
                  {totalConfirmedCases === "" ? (
                    <Spinner />
                  ) : (
                    totalConfirmedCases
                  )}
                </div>
                <p className='lead'>Last Updated: {date}</p>
                <p>
                  Source:{" "}
                  <a
                    href='https://www.co.merced.ca.us/DocumentCenter/View/23921/COVID-19-Daily-Status-Update-32420?bidId='
                    style={{ color: "var(--dark-shades)", fontWeight: "bold" }}
                  >
                    Merced County, Department Of Public Health
                  </a>
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </>
  );
};

var row = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10vh"
};

export default Body;
