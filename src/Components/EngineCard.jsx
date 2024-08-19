// src/components/CustomCard.js
import React from "react";

const EngineCard = ({
  image,
  status,
  statusLabel,
  year,
  title,
  price,
  location,
  isNew,
  description,
  save,
  share,
  download,
  enquire,
}) => {
  return (
    <div className="custom-card">
      <div className="card-image">
        <img src={image} alt={title} />
        <div className="status-label">{statusLabel}</div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <span className="year">{year}</span>
          <h3 className="title">{title}</h3>
          <p className="price">{price}</p>
          <p className="location">{location}</p>
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
        <div className="card-actions">
          <button className="action-button">{save}</button>
          <button className="action-button">{share}</button>
          <button className="action-button">{download}</button>
          <button className="action-button">{enquire}</button>
        </div>
      </div>
    </div>
  );
};

export default EngineCard;
