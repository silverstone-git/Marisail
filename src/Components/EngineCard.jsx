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
    <div className="custom-card" style={{ marginBottom: "30px" }}>
      <div className="card-image">
        <img src="./images/engine.jpg" alt="{title}" />
      </div>
      <div className="card-content">
        <div className="card-header">
          <span className="year">{engine_modelyear}</span>
          <h3 className="title">{engine_model}</h3>
          <p className="price">£ 249,950 Tax Paid</p>
          <p className="price">{engine_make}</p>
        </div>
        <div className="card-description">{/* <p>{description}</p> */}</div>
        <div className="card-actions">
          <Link to={`/engines/${engine_id}`}>
            <button className="action-button">Details</button>
          </Link>
          <button className="action-button">Share</button>
          <button className="action-button">Download</button>
          <button className="action-button">Enquire</button>
        </div>
      </div>
    </div>
  );
};

export default EngineCard;
