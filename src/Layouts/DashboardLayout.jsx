import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";

const DashboardLayout = (props) => {
    return (
        <>
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={4} className="">
                            <SideBar />
                        </Col>
                        <Col xs={8} className="">
                            <TopBar />
                            <div className="outlets">
                                <Outlet />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default DashboardLayout