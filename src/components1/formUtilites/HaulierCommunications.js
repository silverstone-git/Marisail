import React from "react";

export default function HaulierCommunications({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
  return (
    <div>
      <h2>Haulier Communications</h2>
      <form className="form">

        <div className="set">
            <label>Customer Service Contact Information:</label>
            <input type="text" name="customerServiceContactInformation" onChange={handleChange("customerServiceContactInformation")} value={props.customerServiceContactInformation} />
        </div>

        <div className="set">
            <label>Real Time Tracking:</label>
            <input type="text" name="realTimeTracking" onChange={handleChange("realTimeTracking")} value={props.realTimeTracking} />
        </div>

        <div className="set">
            <label>Electronic Proof Of Delivery:</label>
            <input type="text" name="electronicProofOfDelivery" onChange={handleChange("electronicProofOfDelivery")} value={props.electronicProofOfDelivery} />
        </div>

        <div className="set">
            <label>Automated Alerts And Notifications:</label>
            <input type="text" name="automatedAlertsAndNotifications" onChange={handleChange("automatedAlertsAndNotifications")} value={props.automatedAlertsAndNotifications} />
        </div>

        <div className="set">
            <label>Tracking System:</label>
            <input type="text" name="trackingSystem" onChange={handleChange("trackingSystem")} value={props.trackingSystem} />
        </div>

        <div className="set">
            <label>Delivery Window:</label>
            <input type="text" name="deliveryWindow" onChange={handleChange("deliveryWindow")} value={props.deliveryWindow} />
        </div>

        <div className="set">
            <label>Delivery Confirmation:</label>
            <input type="text" name="deliveryConfirmation" onChange={handleChange("deliveryConfirmation")} value={props.deliveryConfirmation} />
        </div>

     </form>
    </div>
  );
}

