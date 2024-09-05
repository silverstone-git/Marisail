import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

function InputComponentDynamic({
  label,
  value,
  setValue,
  formType,
  isMandatory,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState(value);

  // Toggle the accordion open/close
  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setValue(e); // Pass the event to the parent handler
  };

  // Effect to sync the input value with the prop value
  useEffect(() => {
    setInputText(value);
  }, [value]);

  return (
    <div className="custom-dropdown-container">
      <div
        className="custom-dropdown-header"
        onClick={handleDropdownToggle}
        aria-expanded={isOpen}
        aria-controls="dropdown-content"
      >
        {label}
        {isMandatory && <span className="text-danger">&nbsp;*</span>}
        <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3 L5 7 L9 3"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <div>
          <div id="dropdown-content" className="custom-dropdown-content">
            <div className="custom-dropdown-options">
              <Form.Group controlId="formGridState">
                <Form.Control
                  value={inputText}
                  onChange={handleInputChange}
                  type={formType}
                  placeholder=""
                  name={label}
                />
              </Form.Group>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

InputComponentDynamic.propTypes = {
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  formType: PropTypes.string.isRequired,
  isMandatory: PropTypes.bool.isRequired,
};

export default InputComponentDynamic;
