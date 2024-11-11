import PropTypes from "prop-types";
import { useState } from "react";

const RangeInput = ({
  title,
  fromValue,
  toValue,
  setFromValue,
  setToValue,
  radioOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(
    radioOptions.length > 0 ? radioOptions[0].value : ""
  );

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleFromChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setFromValue(value);
    }
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setToValue(value);
    }
  };

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  return (
    <div className="custom-dropdown-container">
      <div
        className="custom-dropdown-header"
        onClick={handleDropdownToggle}
        aria-expanded={isOpen}
        aria-controls="dropdown-content"
        style={{ marginBottom: "10px" }}
      >
        <span>{title}</span>
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
              transform={isOpen ? "rotate(180 5 5)" : ""}
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <div>
          <input
            type="number"
            value={fromValue}
            onChange={handleFromChange}
            placeholder="From"
            style={{
              width: "65px",
              marginRight: "10px",
              padding: "8px 0px 8px 14px",
              margin: "0px 0 12px 0",
              display: "inline-block",
              border: "1px solid #fff",
              borderRadius: "4px",
              outline: "none",
              backgroundColor: "#f5f5f5",
            }}
          />
          <span style={{ marginRight: 8, marginLeft: 8 }}>-</span>
          <input
            style={{
              width: "65px",
              padding: "8px 0px 8px 14px",
              margin: "0px 0 12px 0",
              display: "inline-block",
              border: "1px solid #fff",
              borderRadius: "4px",
              outline: "none",
              backgroundColor: "#f5f5f5",
            }}
            type="number"
            value={toValue}
            onChange={handleToChange}
            placeholder="To"
          />
          {radioOptions.length > 0 && (
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
              style={{
                border: "1px solid #ccc",
                borderRadius: "50px",
                justifyContent: "space-around",
                marginLeft: 10,
              }}
            >
              {radioOptions.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    className="btn-check"
                    name={`btnradio-${option.label}-${option.value}`}
                    id={`btnradio-${option.label}-${option.value}`}
                    value={option.value}
                    onChange={handleRadioChange}
                    checked={selectedRadio === option.value}
                    style={{ transform: "scale(0.8)" }}
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor={`btnradio-${option.label}-${option.value}`}
                    style={{
                      fontSize: "12px",
                      padding: "4px 6px",
                      borderRadius: "10px",
                    }}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

RangeInput.propTypes = {
  fromValue: PropTypes.string.isRequired,
  toValue: PropTypes.string.isRequired,
  setFromValue: PropTypes.func.isRequired,
  setToValue: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  radioOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default RangeInput;
