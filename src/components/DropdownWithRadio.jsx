import { useState } from "react";
import { Form, Accordion } from "react-bootstrap";
import PropTypes from "prop-types";
import "../components/Trailers/trailersAdvert.module.scss";

const DropdownWithRadio = ({
  heading,
  title,
  options,
  selectedOption,
  setSelectedOption,
  isMandatory,
  openKey,
  setOpenKey,
}) => {
  const [list] = useState(options);

  // Handle radio option selection
  const handleOptionChange = (optionName) => {
    setSelectedOption(optionName);
  };

  return (
    <Accordion
      activeKey={openKey} style={{marginLeft:'-10px'}}
      onSelect={(eventKey) => setOpenKey(eventKey)}
    >
      <Accordion.Item eventKey={heading}>
        <Accordion.Header>
          {title}
          {isMandatory && <span className="text-danger">&nbsp;*</span>}
        </Accordion.Header>
        <Accordion.Body style={{ maxHeight: 200, overflowY: "auto", maxWidth: 478 }}>
          <div className="custom-dropdown-options">
            {list.length > 0 ? (
              list.map((item, index) => (
                <div key={index} className="custom-dropdown-option">
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
              <div className="custom-dropdown-no-results">No options available</div>
            )}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

DropdownWithRadio.propTypes = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.array).isRequired,
  selectedOption: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  setSelectedOption: PropTypes.func.isRequired,
  isMandatory: PropTypes.bool.isRequired,
  openKey: PropTypes.string.isRequired,
  setOpenKey: PropTypes.func.isRequired,
};

export default DropdownWithRadio;
