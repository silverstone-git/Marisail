import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Accordion } from "react-bootstrap";

function DatePickerComponent({
    label,
    value,
    setValue,
    type,
    setOpenKey,
    openKey,
}) {
    return (
        <Accordion
            activeKey={openKey}
            onSelect={(eventKey) => setOpenKey(eventKey)}
        >
            <Accordion.Item eventKey={label}>
                <Accordion.Header>{label}</Accordion.Header>
                <Accordion.Body>
                    <DatePicker
                        className="form-control datepicker-input"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                    />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default DatePickerComponent;
