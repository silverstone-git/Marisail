import { Form, Accordion } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { fetchDistinctValues } from "../api/trailers_apis";
const RadioOptions = ({
  title,
  selectedOption = {},
  category,
  onSelect,
  tableName,
  columnName,
  isMandatory,
  openKey,
  setOpenKey,
}) => {
  const [distinctValues, setDistinctValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const trailerManufacturer = selectedOption["manufacturer"] || ["Load Rite"];
  const trailerMake = selectedOption["Make"] || ["CT177"];
  const trailerModel = selectedOption["Model"] || ["Custom"];
  const trailerYear = selectedOption["Year"] || ["2022"];

  const handleOptionChange = (optionName) => {
    onSelect(category, optionName);
  };
  useEffect(() => {
    const loadDistinctValues = async () => {
      // setLoading(true);
      try {
        const values = await fetchDistinctValues(
          tableName,
          columnName,
          trailerManufacturer.join(","),
          trailerMake.join(","),
          trailerModel.join(","),
          trailerYear.join(",")
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
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Accordion
      activeKey={openKey}
      onSelect={(eventKey) => setOpenKey(eventKey)}
    >
      <Accordion.Item eventKey={title}>
        <Accordion.Header>
          {title}
          {isMandatory && <span className="text-danger">&nbsp;*</span>}
        </Accordion.Header>
        <Accordion.Body style={{ maxHeight: 200, overflowY: "auto" }}>
          <Form>
            {distinctValues.length > 0 ? (
              distinctValues.map((item) => (
                <div key={item.value} className="custom-dropdown-option">
                  <Form.Check
                    type="radio"
                    name={`radio-options-${category}`}
                    label={`${item.value}`}
                    checked={selectedOption[category] === item.value}
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
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

RadioOptions.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  selectedOption: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
  tableName: PropTypes.string,
  columnName: PropTypes.string,
  isMandatory: PropTypes.bool.isRequired,
  openKey: PropTypes.string,
  setOpenKey: PropTypes.func.isRequired,
};

export default RadioOptions;
