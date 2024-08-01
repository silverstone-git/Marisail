import React from "react";

export default function HaulierCommunications({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
  return (
    <div>
      <h1>Haulier Communications</h1>
      <form>
        <label>Customer Service Contact Information:</label>
        <input type="text" name="customerServiceContactInformation" onChange={handleChange("customerServiceContactInformation")} value={props.customerServiceContactInformation}/>
        <label>Real Time Tracking:</label>
        <input type="text" name="realTimeTracking" onChange={handleChange("realTimeTracking")} value={props.realTimeTracking}/>
        <label>Electronic Proof Of Delivery:</label>
        <input type="text" name="electronicProofOfDelivery" onChange={handleChange("electronicProofOfDelivery")} value={props.electronicProofOfDelivery}/>
        <label>Automated Alerts And Notifications:</label>
        <input type="text" name="automatedAlertsAndNotifications" onChange={handleChange("automatedAlertsAndNotifications")} value={props.automatedAlertsAndNotifications}/>
        <label>Tracking System:</label>
        <input type="text" name="trackingSystem" onChange={handleChange("trackingSystem")} value={props.trackingSystem}/>
        <label>Delivery Window:</label>
        <input type="text" name="deliveryWindow" onChange={handleChange("deliveryWindow")} value={props.deliveryWindow}/>
        <label>Delivery Confirmation:</label>
        <input type="text" name="deliveryConfirmation" onChange={handleChange("deliveryConfirmation")} value={props.deliveryConfirmation}/>
      </form>
    </div>
  );
}

