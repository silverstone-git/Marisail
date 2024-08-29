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
  {/* const clearSelection = (e) => {
    e.stopPropagation();
    setValue("");
  };*/}
  if(options == undefined) {
    console.log("001 Options--",typeof options, label, options);
  }
  
  return (
    <Accordion
      activeKey={openKey}
      onSelect={(eventKey) => setOpenKey(eventKey)}
    >
      <Accordion.Item eventKey={label}>
        {/* <Accordion.Header style={{position: 'relative'}}> */}
        <Accordion.Header style={{ position: "relative" }}>
          {label}
          {isMandatory && <span className="text-danger">&nbsp;*</span>}
          {/* Clear Selection at section level */}
          {/* <span style={{position: 'absolute', right: 35,  top: '50%', transform: 'translateY(-50%)'}}
            onClick={clearSelection}
            className="clear-selection-x"
          >
            X
          </span> */}
        </Accordion.Header>
        <Accordion.Body style={{ maxHeight: 200, overflowY: "auto" }}>
          {options && options.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => setValue(item)}
            >
              <Form.Check
                type="radio"
                className="custom-checkbox"
                aria-label={`radio-${index}`}
                name={label}
                checked={item === value}
                onChange={() => setValue(item)}
                label={item}
              />
              {/* {item === value && (
                <span
                  style={{
                    color: "#193e77",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the Accordion from toggling
                    setValue(""); // Clear the selected value
                  }}
                >
                  X
                </span>
              )} */}
            </div>
          ))}
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
