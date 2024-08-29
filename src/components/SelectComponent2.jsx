import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";
// import { Button } from "react-bootstrap";
function SelectComponent({
}) {

  return (
    <div >

    </div>
  );
}

SelectComponent.propTypes = {
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string,
  setOpenKey: PropTypes.func.isRequired,
  openKey: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.array.isRequired,
  isMandatory: PropTypes.bool.isRequired,
};
export default SelectComponent;
