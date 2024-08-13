import React from "react";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";

function InputComponent({
  label,
  value,
  setValue,
  formType,
  type,
  setOpenKey,
  openKey,
}) {
  return (
    <Accordion
      activeKey={openKey}
      onSelect={(eventKey) => setOpenKey(eventKey)}
    >
      <Accordion.Item eventKey={label}>
        <Accordion.Header>{label}</Accordion.Header>
        <Accordion.Body>
          <Form.Group controlId="formGridState">
            <Form.Control
              value={value}
              onChange={setValue}
              type={formType}
              placeholder={''}
            />
          </Form.Group>
        </Accordion.Body>
       </Accordion.Item>
     </Accordion>
  );
}

export default InputComponent;
