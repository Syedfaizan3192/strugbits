import React from "react";
import { Button, Modal } from "react-bootstrap";

const ThemeModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props?.onHide}
        // className="theme_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props?.header}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props?.body}</Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Submit</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default ThemeModal;
