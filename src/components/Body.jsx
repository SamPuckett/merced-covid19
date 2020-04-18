import React from "react";
import { Container, Row, Col } from "reactstrap";
// Components
import NumberJumbotron from "./NumberJumbotron";
import GraphJumbotron from "./GraphJumbotron";

const Body = (props) => {
  return (
    <>
      <Container className='body-container'>
        <Row style={row}>
          <Col>
            <NumberJumbotron />
          </Col>
        </Row>
      </Container>
      <Container className='body-container'>
        <Row style={row}>
          <Col>
            <GraphJumbotron />
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
  marginTop: "10vh",
};

export default Body;
