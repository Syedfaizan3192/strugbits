import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import TableDetails from "../components/DetailTable";
import user from "../../src/assets/images/user.png.png";
import CustomActionButton from "../components/ActionButons";
import { useState } from "react";
import { getAllUsers } from "../services/userdetails";
import { useEffect } from "react";
import CustomButton from "../components/Button";
import { click } from "@testing-library/user-event/dist/click";
import ThemeModal from "../components/Modal";
import AddEmployeeModal from "../components/ModalComponents/AddUserModal";
const HomePage = () => {
  const [data, setData] = useState([]);
  const [addModal, setAddModal] = useState(false);

  useEffect(() => {
    GetAllUsers();
  }, []);

  const GetAllUsers = async (data) => {
    const response = await getAllUsers();
    const defaultResponse = response?.data;
    setData(defaultResponse?.data);
  };
  return (
    <>
      <Container fluid className="btn_main">
        <Row>
          <Col xs={4}>
            <div className="custom_button">
              <CustomButton
                children={"ADD NEW CUSTOMER"}
                class_name={"button_add_user"}
                onClick={() => {
                  setAddModal(true);
                }}
              />
            </div>
          </Col>
          <Col xs={4}></Col>
          <Col xs={4}></Col>
        </Row>
      </Container>

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

      {data &&
        data?.map((dt) => {
          return (
            <>
              <TableDetails
                kry={dt?.id}
                id={dt?.id}
                name={dt?.first_name + " " + dt?.last_name}
                email={dt?.email}
                image={dt?.avatar}
                action={dt?.action}
              />
            </>
          );
        })}

      <ThemeModal
        header={"Add New Customer"}
        show={addModal}
        onHide={() => setAddModal(false)}
        body={<AddEmployeeModal />}
      />
    </>
  );
};

export default HomePage;
