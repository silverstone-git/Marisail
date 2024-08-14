import { useState } from "react";
import { Form, Accordion } from "react-bootstrap";
import PropTypes from "prop-types";

const MultipleSelectComponent = ({
  label,
  setOpenKey,
  openKey,
  options,
  isMandatory,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <Accordion
      activeKey={openKey}
      onSelect={(eventKey) => setOpenKey(eventKey)}
    >
      <span className="text-danger">*</span>
      <Accordion.Item eventKey={label}>
        <Accordion.Header>
          {label}
          {isMandatory && <span className="text-danger">*</span>}
        </Accordion.Header>
        <Accordion.Body style={{ maxHeight: 200, overflowY: "auto" }}>
          {options.map((item, index) => {
            return (
              <Form.Check
                type="checkbox"
                className="custom-checkbox"
                key={index}
                checked={selectedOptions.includes(item)}
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
  options: PropTypes.string.isRequired,
  isMandatory: PropTypes.bool.isRequired,
};
export default MultipleSelectComponent;
