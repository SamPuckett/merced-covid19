import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";

const Body = props => {
  return (
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
              backgroundColor: "var(--custom-dark-tan)",
              display: "flex",
              justifySelf: "center",
              alignSelf: "center"
            }}
          >
            <Container fluid>
              <h1 className='display-5'>
                Total Confirmed Cases in Merced County:
              </h1>
              <p className='display-1' style={{ color: "var(--custom-red)" }}>
                1
              </p>
              <p className='lead'>Last Updated: March 25, 2020. 1:47 AM</p>
              <p>
                Source:{" "}
                <a
                  href='https://www.co.merced.ca.us/DocumentCenter/View/23921/COVID-19-Daily-Status-Update-32420?bidId='
                  style={{ color: "var(--custom-green)", fontWeight: "bold" }}
                >
                  Merced County, Department Of Public Health
                </a>
              </p>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

var row = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10vh"
};

export default Body;
