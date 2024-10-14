import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function DatePickerComponent2({
  title,
  selectedOptions,
  setSelectedOptions,
  isMandatory,
}) {
  const [value, setValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  // console.log("value", value);

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (value === null) {
      setSelectedOptions((prev) => {
        delete prev[title];
        return { ...prev };
      });
    } else {
      setSelectedOptions((prev) => {
        return { ...prev, [title]: value };
      });
    }
  }, [value]);

  return (
    <div className="custom-dropdown-container">
      <div
        className="custom-dropdown-header"
        onClick={handleDropdownToggle}
        aria-expanded={isOpen}
        aria-controls="dropdown-content"
        style={{ marginBottom: "10px" }}
      >
        {title}
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
        <DatePicker
          selected={value}
          className="form-control datepicker-input"
          dateFormat="dd/MM/yyyy"
          placeholderText="DD/MM/YYYY"
          onChange={(date) => setValue(date)}
        />
      )}
    </div>
  );
}

DatePickerComponent2.propTypes = {
  title: PropTypes.string.isRequired,
  selectedOptions: PropTypes.object.isRequired,
  setSelectedOptions: PropTypes.func.isRequired,
  isMandatory: PropTypes.bool.isRequired,
};

export default DatePickerComponent2;
