import { Form, Accordion } from "react-bootstrap";
import PropTypes from "prop-types";

const MultipleSelectComponent = ({
  label,
  setOpenKey,
  openKey,
  options,
  isMandatory,
  value,
  setValue
}) => {
  const handleCheckboxChange = (option) => {
    if (value.includes(option)) {
      setValue(value.filter((item) => item !== option));
    } else {
      setValue([...value, option]);
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
  setValue: PropTypes.func
};
export default MultipleSelectComponent;
