import PropTypes from "prop-types";

const RangeInput = ({ fromValue, toValue, setFromValue, setToValue }) => {
  const handleFromChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setFromValue(value);
    }
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setToValue(value);
    }
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      {/* <span style={{marginRight:8}}>Range</span> */}
      <label>
        <input
          type="number"
          value={fromValue}
          onChange={handleFromChange}
          placeholder="from"
          style={{
            width: "100px",
            marginRight: "10px",
            padding: "8px 0px 8px 14px",
            margin: "0px 0 12px 0",
            display: "inline-block",
            border: "1px solid #fff",
            borderRadius: "4px",
            outline: "none",
            boxSizing: "",
            backgroundColor: "#f5f5f5",
          }}
        />
      </label>
      <span style={{ marginRight: 8, marginLeft:8 }}>-</span>
      <label>
        <input
          style={{
            width: "100px",
            padding: "8px 0px 8px 14px",
            margin: "0px 0 12px 0",
            display: "inline-block",
            border: "1px solid #fff",
            borderRadius: "4px",
            outline: "none",
            boxSizing: "",
            backgroundColor: "#f5f5f5",
          }}
          type="number"
          value={toValue}
          onChange={handleToChange}
          placeholder="to"
        />
      </label>
    </div>
  );
};
export default RangeInput;

// Prop types to ensure the component receives the right props
RangeInput.propTypes = {
  fromValue: PropTypes.string.isRequired,
  toValue: PropTypes.string.isRequired,
  setFromValue: PropTypes.func.isRequired,
  setToValue: PropTypes.func.isRequired,
};
