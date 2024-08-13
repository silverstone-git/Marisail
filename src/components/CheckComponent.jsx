import React from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

function CheckComponent({ label, setValue, name, id, setOpenKey, openKey }) {
  return (
    <Form.Group controlId="formGridState">
      <Accordion
        activeKey={openKey}
        onSelect={(eventKey) => setOpenKey(eventKey)}
      >
        <Accordion.Item eventKey={id}>
          <Accordion.Header>{label}</Accordion.Header>
          <Accordion.Body>
            <Col sm={12}>
              <Form.Check
                inline
                label="Yes"
                name={name}
                type="radio"
                id={`${id}1`}
                onChange={(e) => e.target.value && setValue("yes")}
              />
              <Form.Check
                inline
                label="No"
                name={name}
                type="radio"
                id={`${id}2`}
                onChange={(e) => e.target.value && setValue("No")}
              />
            </Col>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Form.Group>
  );
}

export default CheckComponent;
