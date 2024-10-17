import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const TextField = ({ value }) => {
  return (
    <Form.Control
      type="text"
      placeholder="Enter text here"
      value={value}
      readOnly
    />
  );
};

TextField.propTypes = {
  value: PropTypes.string,
};

export default TextField;
