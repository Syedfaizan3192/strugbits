import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TableDetails from "../components/DetailTable";
import user from '../../src/assets/images/user.png.png'
import CustomActionButton from "../components/ActionButons";
const HomePage = () => {
  const data = [
    {
      id: 1,
      image: user,
      name: 'Faizan',
      email: 'faizan@gmail.com',
      action: <CustomActionButton />
    },
    {
      id: 1,
      image: user,
      name: 'Faizan',
      email: 'faizan@gmail.com',
      action: <CustomActionButton />
    },
    {
      id: 1,
      image: user,
      name: 'Faizan',
      email: 'faizan@gmail.com',
      action: <CustomActionButton />
    },
    {
      id: 1,
      image: user,
      name: 'Faizan',
      email: 'faizan@gmail.com',
      action: <CustomActionButton />
    },
    {
      id: 1,
      image: user,
      name: 'Faizan',
      email: 'faizan@gmail.com',
      action: <CustomActionButton />
    },
    {
      id: 1,
      image: user,
      name: 'Faizan',
      email: 'faizan@gmail.com',
      action: <CustomActionButton />
    },
    {
      id: 1,
      image: user,
      name: 'Faizan',
      email: 'faizan@gmail.com',
      action: <CustomActionButton />
    }
  ]
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


      {
        data && data?.map((dt) => {
          return (
            <>
              <TableDetails kry={dt?.id} id={dt?.id} name={dt?.name} email={dt?.email} image={dt?.image} action={dt?.action} />
            </>
          )
        })
      }
    </>
  );
};

export default HomePage;
