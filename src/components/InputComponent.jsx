import React from "react";
import Form from "react-bootstrap/Form";

function InputComponent({ label, value, setValue }) {
  return (
    <Form.Group controlId="formGridState"> 
      <Form.Control  value={value} onChange={setValue} type="text"  placeholder={label}/>
    </Form.Group>
  );
}

export default InputComponent;
