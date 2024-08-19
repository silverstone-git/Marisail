import React, { useState } from "react";
import { Form } from "react-bootstrap";

const DropdownWithSearchAndCheckBoxes = ({
  title,
  options,
  selectedOptions = {},
  category,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionChange = (optionName) => {
    if (!Array.isArray(selectedOptions[category])) {
      console.error(
        `selectedOptions[${category}] is not an array or is undefined`
      );
      return;
    }

    const updatedOptions = selectedOptions[category].includes(optionName)
      ? selectedOptions[category].filter((name) => name !== optionName)
      : [...selectedOptions[category], optionName];

    onSelect(category, updatedOptions);
  };
  const filteredOptions = options.filter(
    (option) =>
      option &&
      option.name &&
      option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="custom-dropdown-container">
      <div className="custom-dropdown-header" onClick={handleDropdownToggle}>
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
        <div className="custom-dropdown-content">
          <div className="custom-dropdown-search">
            <input
              type="text"
              placeholder="Search.."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="custom-dropdown-options">
            <Form>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div key={index} className="custom-dropdown-option">
                    <Form.Check
                      type="checkbox"
                      name="checkbox-options"
                      id={`checkbox-${index}`}
                      label={`${option.name} (5)`}
                      // label={`${option.name} (${option.count})`}
                      checked={
                        selectedOptions[category] &&
                        selectedOptions[category].includes(option.name)
                      }
                      onChange={() => handleOptionChange(option.name)}
                    />
                  </div>
                ))
              ) : (
                <div className="custom-dropdown-no-results">
                  No results found
                </div>
              )}
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithSearchAndCheckBoxes;
