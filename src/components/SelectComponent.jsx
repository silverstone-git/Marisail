import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";
// import { Button } from "react-bootstrap";
function SelectComponent({
  label,
  setValue,
  value,
  setOpenKey,
  openKey,
  type,
  options,
  isMandatory,
}) {
  const clearSelection = (e) => {
    e.stopPropagation();
    setValue("");
  };
  return (
    <Accordion
      activeKey={openKey}
      onSelect={(eventKey) => setOpenKey(eventKey)}
    >
      <Accordion.Item eventKey={label}>
        <Accordion.Header
          style={{position: 'relative'}}
        >
          {label}
          {isMandatory && <span className="text-danger">&nbsp;*</span>}
          <span style={{position: 'absolute', right: 35,  top: '50%', transform: 'translateY(-50%)'}}
            onClick={clearSelection}
            className="clear-selection-x"
          >
            X
          </span>
        </Accordion.Header>
        <Accordion.Body style={{ maxHeight: 200, overflowY: "auto" }}>
          {options.map((item, index) => {
            return (
              <Form.Check
                type="radio"
                key={index}
                className="custom-checkbox"
                aria-label="radio 1"
                name={label}
                checked={item === value}
                onChange={() => setValue(item)}
                label={item}
              />
            );
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

SelectComponent.propTypes = {
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string,
  setOpenKey: PropTypes.func.isRequired,
  openKey: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.array.isRequired,
  isMandatory: PropTypes.bool.isRequired,
};
export default SelectComponent;
