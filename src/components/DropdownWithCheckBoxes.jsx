import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { fetchDistinctValues } from "../api/searchEngineApi";

const DropdownWithCheckBoxes = ({
  title,
  selectedOptions = {},
  category,
  onSelect,
  tableName,
  columnName,
}) => {
  const [distinctValues, setDistinctValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Extract engine make and model from selectedOptions, default to null if not present
  const engineMake = selectedOptions["engine_make"]
    ? selectedOptions["engine_make"][0]
    : null;
  const engineModel = selectedOptions["engine_model"]
    ? selectedOptions["engine_model"][0]
    : null;

  useEffect(() => {
    const loadDistinctValues = async () => {
      setLoading(true);
      try {
        const values = await fetchDistinctValues(
          tableName,
          columnName,
          engineMake,
          engineModel
        );
        setDistinctValues(values);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (tableName && columnName) {
      loadDistinctValues();
    }
  }, [tableName, columnName, engineMake, engineModel]); // Add engineMake and engineModel as dependencies

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionChange = (optionName) => {
    const selectedForCategory = selectedOptions[category] || [];

    const updatedOptions = selectedForCategory.includes(optionName)
      ? selectedForCategory.filter((name) => name !== optionName)
      : [...selectedForCategory, optionName];

    onSelect(category, updatedOptions);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
        <div id="dropdown-content" className="custom-dropdown-content">
          <div className="custom-dropdown-options">
            <Form>
              {distinctValues.length > 0 ? (
                distinctValues.map((item) => (
                  <div key={item.value} className="custom-dropdown-option">
                    <Form.Check
                      type="checkbox"
                      name={`checkbox-options-${category}`}
                      label={`${item.value} (${item.count || 5})`}
                      checked={
                        selectedOptions[category] &&
                        selectedOptions[category].includes(item.value)
                      }
                      onChange={() => handleOptionChange(item.value)}
                    />
                  </div>
                ))
              ) : (
                <div className="custom-dropdown-no-results">
                  No options available
                </div>
              )}
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithCheckBoxes;
