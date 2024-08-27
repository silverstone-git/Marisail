import React from "react";
import { Form } from "react-bootstrap";

const TextField = ({ value }) => {
  return (
    <Form.Control
      type="text"
      placeholder="Enter text here"
      value={value}
      readOnly
    />
  );
};

export default TextField;
