import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Accordion } from "react-bootstrap";
import PropTypes from "prop-types";

function DatePickerComponent({
    label,
    value,
    setValue,
    setOpenKey,
    openKey,
    isMandatory
}) {
    return (
        <Accordion style={{marginLeft:'-10px'}}
            activeKey={openKey}
            onSelect={(eventKey) => setOpenKey(eventKey)}
        >
            <Accordion.Item eventKey={label}>
                <Accordion.Header>{label}
                {isMandatory && <span className="text-danger">&nbsp;*</span>}
                </Accordion.Header>
                <Accordion.Body>
                    <DatePicker
                        selected={value}
                        className="form-control datepicker-input"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                        onChange={(date) => setValue(date)}
                        />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

DatePickerComponent.propTypes = {
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date),
  setOpenKey: PropTypes.func.isRequired,
  openKey: PropTypes.string,
  isMandatory: PropTypes.bool.isRequired,
};

export default DatePickerComponent;
