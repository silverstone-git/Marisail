import { useState, useEffect } from "react";
import { Form, Accordion, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

function InputComponentDual({
  label,
  value,
  setValue,
  formType,
  isMandatory,
  openKey,
  setOpenKey,
}) {
  const [inputText, setInputText] = useState(value);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setValue(e); // Set value for the input text
  };

  const [selectValue, setSelectValue] = useState("Yes");
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value); // Set value for the select option
  };

  useEffect(() => {
    setInputText(value);
  }, [value]);

  return (
    <Accordion
      activeKey={openKey}
      style={{ marginLeft: "-10px" }}
      onSelect={(eventKey) => setOpenKey(eventKey)}
    >
      <Accordion.Item eventKey={label}>
        <Accordion.Header>
          {label}
          {isMandatory && <span className="text-danger">&nbsp;*</span>}
        </Accordion.Header>
        <Accordion.Body>
          <Form.Group controlId="formGridState">
            <Row className="d-flex align-items-center">
              <Col md={8} style={{ display: "flex", alignItems: "center" }}>
                <Form.Control
                  value={inputText}
                  onChange={handleInputChange}
                  type={formType}
                  placeholder=""
                  name={label}
                  style={{ flexGrow: 1 }}
                />
              </Col>
              <Col md={4} style={{ display: "flex", alignItems: "center" }}>
                <Form.Group controlId="formSelect" className="d-flex">
                  <Form.Label className="me-2 mt-2">MU</Form.Label>
                  <Form.Select
                    value={selectValue}
                    onChange={handleSelectChange}
                    name={`${label}_select`}
                  >
                    <option value="Ft">Ft</option>
                    <option value="Mtrs">Mtrs</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={8} style={{ display: "flex", alignItems: "center" }}>
                <Form.Control
                  value={inputText}
                  onChange={handleInputChange}
                  type={formType}
                  placeholder=""
                  name={label}
                  style={{ flexGrow: 1 }}
                />
              </Col>
              <Col md={4} style={{ display: "flex", alignItems: "center" }}>
              <Form.Label className="me-2 mt-2">MU</Form.Label>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    checked
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio1"
                  >
                    Ft
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio2"
                  >
                    Mtrs
                  </label>
                </div>
              </Col>
            </Row>
          </Form.Group>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

InputComponentDual.propTypes = {
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  formType: PropTypes.string.isRequired,
  isMandatory: PropTypes.bool.isRequired,
  openKey: PropTypes.string.isRequired,
  setOpenKey: PropTypes.func.isRequired,
};

export default InputComponentDual;
