import { useState } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "../components/Trailers/trailersAdvert.module.scss";

const DropdownWithRadio = ({
  heading,
  title,
  options,
  selectedOption,
  setSelectedOption,
  isMandatory,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState(options);

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };
  // console.log("001 List---",typeof list, selectedOption,list);
  
  // Handle radio option selection
  const handleOptionChange = (optionName) => {
    setSelectedOption(optionName);
  };
  return (
    <div className="custom-dropdown-container">
      <div
        className="custom-dropdown-header"
        onClick={handleDropdownToggle}
        aria-expanded={isOpen}
        aria-controls="dropdown-content"
      >
        {title}
        {/* {isMandatory && <span className="text-danger">&nbsp;*</span>} */}
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
              {list.length > 0 ? (
                list.map((item,index) => (
                  <div key={index} className="custom-dropdown-option">
                    {/* <div>{"---Title---" + title + JSON.stringify(selectedOption?.[0]) + "----ITEM---" + item}</div> */}
                    <Form.Check
                      type="radio"
                      name={`radio-options-${heading}`}
                      label={`${item[0]}`}
                      checked={selectedOption?.[0] === item[0]}
                      onChange={() => handleOptionChange(item[0])}
                    />
                  </div>
                ))
              ) : (
                <div className="custom-dropdown-no-results">
                  No options available
                </div>
              )}
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
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.array),
  ]),
  selectedOption: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  setSelectedOption: PropTypes.func.isRequired,
  isMandatory: PropTypes.bool.isRequired,
};

export default DropdownWithRadio;
