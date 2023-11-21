import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomActionButton from "./ActionButons";

const TableDetails = (props) => {
  return (
    <>
      <Container fluid className="container-details mt-5">
        <div className="header-main">
          <div className="header" key={props?.key}>
            <Row>
              <Col xs={12} md={12} lg={2} xl={2} xxl={2} className="">
                <span>
                  <img src={props?.image} />
                </span>
              </Col>
              <Col
                xs={12}
                md={12}
                lg={2}
                xl={2}
                xxl={2}
                className="data_details"
              >
                <span>{props?.id}</span>
              </Col>
              <Col
                xs={12}
                md={12}
                lg={2}
                xl={2}
                xxl={2}
                className="data_details"
              >
                <span>{props?.name}</span>
              </Col>
              <Col
                xs={12}
                md={12}
                lg={2}
                xl={2}
                xxl={2}
                className="data_details"
              >
                <span>{props?.email}</span>
              </Col>
              <Col
                xs={12}
                md={12}
                lg={4}
                xl={4}
                xxl={4}
                className="data_details custom"
              >
                <CustomActionButton />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TableDetails;
