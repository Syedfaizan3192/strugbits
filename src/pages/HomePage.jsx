import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Container fluid className="container-home">
        <div className="header-main">
          <div className="header">
            <Row>
              <Col xs={12} md={12} lg={2} xl={2} xxl={2}></Col>
              <Col xs={12} md={12} lg={2} xl={2} xxl={2}>
                <span>Customer Id</span>
              </Col>
              <Col xs={12} md={12} lg={2} xl={2} xxl={2}>
                <span>Customer Name</span>
              </Col>
              <Col xs={12} md={12} lg={2} xl={2} xxl={2}>
                <span>Email</span>
              </Col>
              <Col xs={12} md={12} lg={2} xl={2} xxl={2}></Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
