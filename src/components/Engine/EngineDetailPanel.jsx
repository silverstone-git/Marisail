import React, { useState } from "react";

const EngineDetailsPanel = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="details-panel-container">
      <div className="details-panel-header" onClick={togglePanel}>
        <span className="toggle-sign">{isOpen ? "−" : "+"}</span>
        <span className="panel-title">{title}</span>
      </div>
      {isOpen && (
        <div className="details-panel-content">
          <div className="details-panel-row">
            {Object.entries(details).map(([key, value]) => (
              <div key={key} className="details-panel-item">
                <strong>{key}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EngineDetailsPanel;
