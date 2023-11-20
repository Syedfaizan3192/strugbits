import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";

const DashboardLayout = (props) => {
  return (
    <>
      <div className="dashboardLayout">
        <Container fluid>
          <Row>
            <Col xs={3} md={3} lg={3} xl={3} xxl={3} className="">
              <SideBar />
            </Col>
            <Col xs={12} md={12} lg={9} xl={9} xxl={9} className="">
              <TopBar />
              <div className="outlets">
                <Outlet />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DashboardLayout;
