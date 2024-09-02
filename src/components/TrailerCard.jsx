// src/components/CustomCard.js
// import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const TrailerCard = ({
//   image,
  make,
  model,
  year,
}) => {
  return (
    // <Link to={`/engines/${engine_id}`} className="custom-card-link">
      <div className="custom-card" style={{ marginBottom: "30px" }}>
        
        <div className="card-content">
          <div className="card-header">
            <span className="year">{year}</span>
            <h3 className="title">{make}</h3>
            <p className="price">£ 249,950 Tax Paid</p>
            <p className="price">{model}</p>
          </div>
          <div className="card-description">{/* <p>{description}</p> */}</div>
        </div>
      </div>
    // </Link>
  );
};

TrailerCard.propTypes = {
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  };

export default TrailerCard;
