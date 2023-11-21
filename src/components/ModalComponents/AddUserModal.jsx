import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddEmployeeModal = () => {
  const onsubmit = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  return (
    <>
      <div className="addemployee">
        <div className="form_employee">
          <Form onSubmit={handleSubmit(onsubmit)}>
            <Row>
              <Col xs={12}>
                <Form.Group className="mb-4">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="UserName Name"
                    autoComplete="off"
                    role={"presentation"}
                    {...register("Uname", {
                      required: {
                        value: true,
                        message: "User Name is Required",
                      },
                      maxLength: {
                        value: 255,
                        message: "User Name is Required",
                      },
                    })}
                  />
                  {errors.Uname && (
                    <Form.Text>{errors.Uname.message}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    role={"presentation"}
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      maxLength: {
                        value: 50,
                        message: "Email is Required",
                      },
                    })}
                  />
                  {errors.email && (
                    <Form.Text>{errors.email.message}</Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col xs={12}></Col>
            </Row>
            <Button type="submit" className="btn-submit mt-4">
              Add
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddEmployeeModal;
