import { useState } from "react";
import { Form, Accordion } from "react-bootstrap";
import PropTypes from "prop-types";

const MultipleSelectComponent = ({
  label,
  setOpenKey,
  openKey,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

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
      <Accordion.Item eventKey={label}>
        <Accordion.Header>{label}</Accordion.Header>
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
  openKey: PropTypes.string
};
export default MultipleSelectComponent;
