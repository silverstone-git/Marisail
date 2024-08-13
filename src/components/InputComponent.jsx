import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

function InputComponent({
  label,
  value,
  setValue,
  formType,
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
InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setOpenKey: PropTypes.func.isRequired,
  openKey: PropTypes.string,
  formType: PropTypes.string.isRequired,
};
export default InputComponent;
