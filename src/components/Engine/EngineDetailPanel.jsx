// import React, { useState } from "react";

// const EngineDetailsPanel = ({ title, details }) => {
//   return (
//     <div className="details-panel-container">
//       <div className="details-panel-header">
//         <span className="panel-title">{title}</span>
//       </div>
//       <div className="details-panel-content">
//         <div className="details-panel-grid">
//           {Object.entries(details).map(([key, value]) => (
//             <div key={key} className="details-panel-item">
//               <strong>{key}:</strong>
//               <span>{value}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EngineDetailsPanel;

import React from "react";

const EngineDetailsPanel = ({ title, details }) => {
  return (
    <div className="details-panel-container">
      <div className="details-panel-header">
        <span className="panel-title ">
          <h6>{title}</h6>
        </span>
      </div>
      <div className="details-panel-content">
        <table className="details-panel-table">
          <tbody>
            {Object.entries(details).map(([key, value]) => (
              <tr key={key}>
                <td className="details-panel-key">
                  <strong>{key}:</strong>
                </td>
                <td className="details-panel-value">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EngineDetailsPanel;
