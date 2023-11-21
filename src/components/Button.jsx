import React from "react";
import { Button } from "react-bootstrap";
import plus from "../assets/images/plus.svg";

const CustomButton = ({ children, class_name, style, onClick }) => {
  return (
    <Button className={class_name} style={style} onClick={onClick}>
      <span className="span_plus">
        <img src={plus} />
      </span>
      <span>{children}</span>
    </Button>
  );
};

export default CustomButton;
