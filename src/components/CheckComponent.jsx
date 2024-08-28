import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

function CheckComponent({
  value,
  label,
  setValue,
  name,
  id,
  setOpenKey,
  openKey,
  isMandatory,
}) {
  return (
    <Form.Group controlId="formGridState">
      <Accordion
        activeKey={openKey}
        onSelect={(eventKey) => setOpenKey(eventKey)}
      >
        <Accordion.Item eventKey={id}>
          <Accordion.Header>
            {label}
            {isMandatory && <span className="text-danger">&nbsp;*</span>}
          </Accordion.Header>
          <Accordion.Body>
            <Col sm={12}>
              <Form.Check
                inline
                label="Yes"
                name={name}
                type="radio"
                id={`${id}1`}
                onChange={(e) => e.target.value && setValue("yes")}
                checked={value === 'yes'}
              />
              <Form.Check
                inline
                label="No"
                name={name}
                type="radio"
                id={`${id}2`}
                onChange={(e) => e.target.value && setValue("No")}
                checked={value === 'No'}
              />
            </Col>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Form.Group>
  );
}

CheckComponent.propTypes = {
  label: PropTypes.string.isRequired,
  setOpenKey: PropTypes.func.isRequired,
  openKey: PropTypes.string,
  isMandatory: PropTypes.bool.isRequired,
  value: PropTypes.array,
  setValue: PropTypes.func,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default CheckComponent;
