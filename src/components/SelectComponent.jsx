import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

function SelectComponent({
  label,
  setValue,
  value,
  setOpenKey,
  openKey,
  type,
  options,
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
          {options.map((item,index) => {
            return (
              <Form.Check
                type="radio"
                key={index}
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
