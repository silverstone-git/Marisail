import { Form } from "react-bootstrap";

function FilterSearch() {
  const handleOptionChange = (optionName) => {
    console.log(optionName);
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
    }
  };
  return (
    <div id="dropdown-content" className="custom-dropdown-content">
      <div className="custom-dropdown-options">
        <Form>
          {options.length > 0 ? (
            options.map((item) => (
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
  );
}

export default FilterSearch;
