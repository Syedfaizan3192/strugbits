import React from "react";
import { Col, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";

const DashboardLayout = (props) => {
    return (
        <>
            <div>
                <Row>
                    <Col xl={2} lg={3} md={3} className="">
                        <SideBar />
                    </Col>
                    <Col xl={2} lg={3} md={3} className="">
                        <TopBar />
                        <div className="outlets">
                            <Outlet />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default DashboardLayout