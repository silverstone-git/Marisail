import PropTypes from "prop-types";
import { useState } from "react";

const RangeInput = ({
  fromValue,
  toValue,
  setFromValue,
  setToValue,
  radioOptions,
}) => {
  const handleFromChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setFromValue(value);
    }
  };
  const [selectedRadio, setSelectedRadio] = useState(
    radioOptions.length > 0 ? radioOptions[0].value : ""
  );

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };
  const handleToChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setToValue(value);
    }
  };

  return (
    <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={fromValue}
          onChange={handleFromChange}
          placeholder="from"
          style={{
            width: "70px",
            marginRight: "10px",
            padding: "8px 0px 8px 14px",
            margin: "0px 0 12px 0",
            display: "inline-block",
            border: "1px solid #fff",
            borderRadius: "4px",
            outline: "none",
            boxSizing: "",
            backgroundColor: "#f5f5f5",
          }}
        />
      <span style={{ marginRight: 8, marginLeft: 8 }}>-</span>
        <input
          style={{
            width: "70px",
            padding: "8px 0px 8px 14px",
            margin: "0px 0 12px 0",
            display: "inline-block",
            border: "1px solid #fff",
            borderRadius: "4px",
            outline: "none",
            boxSizing: "",
            backgroundColor: "#f5f5f5",
          }}
          type="number"
          value={toValue}
          onChange={handleToChange}
          placeholder="to"
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
                marginLeft: 10
              }}
            >
              {radioOptions.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id={`btnradio${index}`}
                    value={option.value}
                    onChange={handleRadioChange}
                    checked={selectedRadio === option.value}
                    style={{ transform: "scale(0.8)" }}
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor={`btnradio${index}`}
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
  );
};
export default RangeInput;

// Prop types to ensure the component receives the right props
RangeInput.propTypes = {
  fromValue: PropTypes.string.isRequired,
  toValue: PropTypes.string.isRequired,
  setFromValue: PropTypes.func.isRequired,
  setToValue: PropTypes.func.isRequired,
  radioOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
