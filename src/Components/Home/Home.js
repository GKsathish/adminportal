import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col>
          <Content />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
