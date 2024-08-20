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
  isMandatory
}) {
  return (
    <Accordion
      activeKey={openKey}
      onSelect={(eventKey) => setOpenKey(eventKey)}
    >
      <Accordion.Item eventKey={label}>
        <Accordion.Header>{label}
        {isMandatory && <span className="text-danger">&nbsp;*</span>}
        </Accordion.Header>
        <Accordion.Body>
          <Form.Group controlId="formGridState">
            <Form.Control
              value={value}
              onChange={setValue}
              type={formType}
              placeholder={''}
              name={label}
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
  isMandatory: PropTypes.bool.isRequired,
};
export default InputComponent;
