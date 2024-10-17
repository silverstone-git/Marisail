// import { useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion } from "react-bootstrap";
import NewTimePicker from 'react-bootstrap-time-picker';
// import TimePicker from 'react-time-picker';

const CustomTimePicker = ({
  label,
  initialTime,
  onTimeChange,
  value,
  setValue,
  setOpenKey,
  openKey,
  isMandatory 
}) => {
  /*const [time, setTime] = useState(initialTime || '12:00');
  const handleChange = (newTime) => {
    setTime(newTime);
    if (onTimeChange) {
      onTimeChange(newTime);
    }
  };*/

  return (

    <Accordion style={{ marginLeft: '-10px' }}
      activeKey={openKey}
      onSelect={(eventKey) => setOpenKey(eventKey)}
    >
      <Accordion.Item eventKey={label}>
        <Accordion.Header>{label}
          {isMandatory && <span className="text-danger">&nbsp;*</span>}
        </Accordion.Header>
        <Accordion.Body>
          {/* <TimePicker
            onChange={handleChange}
            value={time}
            disableClock={true}
          /> */}
          <NewTimePicker start="00:00" end="23:59" step={30} style={{marginTop: '-20px'}}/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

CustomTimePicker.propTypes = {
  label: PropTypes.string,
  initialTime: PropTypes.string,
  onTimeChange: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string,
  setOpenKey: PropTypes.func.isRequired,
  openKey: PropTypes.string,
  isMandatory: PropTypes.bool.isRequired,
};

export default CustomTimePicker;
