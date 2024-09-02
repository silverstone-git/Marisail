import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { fetchDistinctValues } from "../api/trailers_apis";
import PropTypes from "prop-types";

const RadioOptions = ({
  title,
  selectedOptions = {},
  category,
  onSelect,
  tableName,
  columnName,
  isMandatory
}) => {
  const [distinctValues, setDistinctValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const trailerMake = selectedOptions["Make"] || ["CT177"];
  const trailerModel = selectedOptions["Model"] || ["Custom"];
  console.log("001 title---",title);
  console.log("001 selected options---",selectedOptions);
  console.log("001 category---",category);
  console.log("001 On Select---",onSelect);
  console.log("001 Table Name---",tableName);
  console.log("001 Column Name---",columnName);
  
  useEffect(() => {
    const loadDistinctValues = async () => {
      // setLoading(true);
      try {
        const values = await fetchDistinctValues(
          tableName,
          columnName,
          trailerMake.join(","), // Send multiple engine makes as a comma-separated string
          trailerModel.join(",") // Send multiple engine models as a comma-separated string
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
  }, [tableName, columnName, trailerMake, trailerModel]);

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionChange = (optionName) => {
    onSelect(category, optionName);
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
        {title}{isMandatory && <span className="text-danger">&nbsp;*</span>}
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
                      type="radio"
                      name={`radio-options-${category}`}
                      label={`${item.value}`}
                      checked={selectedOptions[category] === item.value}
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

RadioOptions.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  selectedOptions: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
  tableName: PropTypes.string,
  columnName: PropTypes.string,
  isMandatory: PropTypes.bool.isRequired,
};

export default RadioOptions;
