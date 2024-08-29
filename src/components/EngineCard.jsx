// src/components/CustomCard.js
import React from "react";
import { Link } from "react-router-dom";

const EngineCard = ({
  image,
  engine_modelyear,
  engine_model,
  asking_price,
  engine_id,
  engine_make,
}) => {
  return (
    <Link to={`/engines/${engine_id}`} className="custom-card-link">
      <div className="custom-card" style={{ marginBottom: "30px" }}>
        <div className="card-image">
          <img src="./images/engine.jpg" alt={`${engine_model}`} />
        </div>
        <div className="card-content">
          <div className="card-header">
            <span className="year">{engine_modelyear}</span>
            <h3 className="title">{engine_model}</h3>
            <p className="price">£ 249,950 Tax Paid</p>
            <p className="price">{engine_make}</p>
          </div>
          <div className="card-description">{/* <p>{description}</p> */}</div>
        </div>
      </div>
    </Link>
  );
};

export default EngineCard;
