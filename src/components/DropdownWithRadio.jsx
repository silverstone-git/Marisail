import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const DropdownWithRadio = ({
  heading,
  title,
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState(options);

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const inputHandler = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  const handleOptionChange = (optionName) => {
    console.log(optionName);
    console.log(heading);
    if (selectedOptions[optionName] !== undefined) {
      setSelectedOptions((prev) => {
        delete prev[optionName];
        console.log(prev);
        return { ...prev };
      });
    } else {
      setSelectedOptions((prev) => {
        return { ...prev, [optionName]: heading };
      });
      console.log(selectedOptions);
    }
  };

  useEffect(() => {
    if (inputText === "") {
      setList(options);
    } else {
      setList(
        options.filter((item) =>
          item[0].toLowerCase().includes(inputText.toLowerCase())
        )
      );
    }
  }, [inputText, options]);

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
        <div>
        {
          options.length > 5 ? (
        <input type="text" placeholder="Search.." id="myInput" style={
          {width: "100%", padding: "8px 0px 8px 14px", margin: "0px 0 12px 0", display: "inline-block", border: "1px solid #fff", borderRadius: "4px", outline: "none", boxSizing: "", backgroundColor: "#f5f5f5"}
        }  value={inputText}  onChange={inputHandler}></input>) : null
        }
          <div id="dropdown-content" className="custom-dropdown-content">
            <div className="custom-dropdown-options">
              <Form>
                {list.length > 0 ? (
                  list.map((item) => (
                    <div key={item[0]} className="custom-dropdown-option">
                      <Form.Check
                        type="checkbox"
                        name={`checkbox-options`}
                        label={`${item[0]} (${item[1]})`}
                        checked={Boolean(selectedOptions[item[0]])}
                        onChange={() => handleOptionChange(item[0])}
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
        </div>
      )}
    </div>
  );
};

DropdownWithRadio.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.array).isRequired,
  selectedOptions: PropTypes.object.isRequired,
  setSelectedOptions: PropTypes.func.isRequired,
};

export default DropdownWithRadio;
