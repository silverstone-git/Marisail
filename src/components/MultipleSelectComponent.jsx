import { Form, Accordion, Button, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";

const MultipleSelectComponent = ({
  label,
  setOpenKey,
  openKey,
  options,
  isMandatory,
  value,
  setValue,
  onAddOption
}) => {
  const [newOption, setNewOption] = useState("");

  const handleCheckboxChange = (option) => {
    if (value.includes(option)) {
      setValue(value.filter((item) => item !== option));
    } else {
      setValue([...value, option]);
    }
  };

  const handleAddOptionClick = () => {
    if (newOption.trim() !== "") {
      onAddOption(newOption);
      setNewOption("");
    }
  };

  return (
    <Accordion
      activeKey={openKey}
      onSelect={(eventKey) => setOpenKey(eventKey)}
    >
      <Accordion.Item eventKey={label}>
        <Accordion.Header>
          {label}
          {isMandatory && <span className="text-danger">&nbsp;*</span>}
        </Accordion.Header>
        <Accordion.Body style={{ maxHeight: 200, overflowY: "auto" }}>
          {/* Add input and button for new option */}
          <Col md={12} className="d-flex align-items-center mt-3">
            <Form.Control
              type="text"
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              placeholder={`Add new ${label}`}
              className="me-2"
            />
            <Button
              variant="primary"
              style={{ borderRadius: '0rem' }}
              onClick={handleAddOptionClick}
            >
              +
            </Button>
          </Col>
          {options && options.map((item, index) => {
            return (
              <Form.Check
                type="checkbox"
                className="custom-checkbox"
                key={index}
                checked={value.includes(item)}
                onChange={() => handleCheckboxChange(item)}
                label={item}
              />
            );
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

MultipleSelectComponent.propTypes = {
  label: PropTypes.string.isRequired,
  setOpenKey: PropTypes.func.isRequired,
  openKey: PropTypes.string,
  options: PropTypes.array.isRequired,
  isMandatory: PropTypes.bool.isRequired,
  value: PropTypes.array,
  setValue: PropTypes.func,
  onAddOption: PropTypes.func.isRequired
};

export default MultipleSelectComponent;
