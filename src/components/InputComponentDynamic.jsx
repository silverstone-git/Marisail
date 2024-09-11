import { useState, useEffect } from "react";
import { Form, Accordion } from "react-bootstrap";
import PropTypes from "prop-types";

function InputComponentDynamic({
  label,
  value,
  setValue,
  formType,
  isMandatory,
  openKey,
  setOpenKey,
}) {
  const [inputText, setInputText] = useState(value);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setValue(e);
  };

  useEffect(() => {
    setInputText(value);
  }, [value]);

  return (
    <Accordion
      activeKey={openKey} style={{marginLeft:'-10px'}}
      onSelect={(eventKey) => setOpenKey(eventKey)}
    >
      <Accordion.Item eventKey={label}>
        <Accordion.Header>
          {label}
          {isMandatory && <span className="text-danger">&nbsp;*</span>}
        </Accordion.Header>
        <Accordion.Body>
          <Form.Group controlId="formGridState">
            <Form.Control
              value={inputText}
              onChange={handleInputChange}
              type={formType}
              placeholder=""
              name={label}
            />
          </Form.Group>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

InputComponentDynamic.propTypes = {
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  formType: PropTypes.string.isRequired,
  isMandatory: PropTypes.bool.isRequired,
  openKey: PropTypes.string.isRequired,
  setOpenKey: PropTypes.func.isRequired,
};

export default InputComponentDynamic;
