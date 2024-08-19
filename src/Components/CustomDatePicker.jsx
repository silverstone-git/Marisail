// src/components/CustomDatePicker.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ selectedDate, handleDateChange }) => {
  return (
    <DatePicker
      style={{
        // border: "none",
        padding: "3px 7px",
        outline: "none",
        border: "1px solid #212121",
        borderRadius: "5px",
        flex: "1",
        marginBottom: "50px",
        width: "108%",
      }}
      selected={selectedDate}
      onChange={handleDateChange}
      placeholderText="Last Survey Date"
      dateFormat="MM/dd/yyyy"
      className="form-control"
    />
  );
};

export default CustomDatePicker;
