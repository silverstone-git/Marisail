import React from "react";

export default function CustomerContactDetails({props, setProps}) {
  
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
    return (
    <div>
      <h2>Customer Contact Details</h2>
        <form className="form">
        
            <div className="set">
                <label>Customer Type:</label>
                <input type="text" name="customerType" onChange={handleChange("customerType")} value={props.customerType} />
            </div>

            <div className="set">
                <label>Customer ID:</label>
                <input type="text" name="customerID" onChange={handleChange("customerID")} value={props.customerID} />
            </div>

            <div className="set">
                <label>Customer Name:</label>
                <input type="text" name="customerName" onChange={handleChange("customerName")} value={props.customerName} />
            </div>

            <div className="set">
                <label>Customer Company Name:</label>
                <input type="text" name="customerCompanyName" onChange={handleChange("customerCompanyName")} value={props.customerCompanyName} />
            </div>

            <div className="set">
                <label>Collection Named Contact Departure:</label>
                <input type="text" name="collectionNamedContactDeparture" onChange={handleChange("collectionNamedContactDeparture")} value={props.collectionNamedContactDeparture} />
            </div>

            <div className="set">
                <label>Collection Mobile Departure:</label>
                <input type="text" name="collectionMobileDeparture" onChange={handleChange("collectionMobileDeparture")} value={props.collectionMobileDeparture} />
            </div>

            <div className="set">
                <label>Collection Address Departure:</label>
                <input type="text" name="collectionAddressDeparture" onChange={handleChange("collectionAddressDeparture")} value={props.collectionAddressDeparture} />
            </div>

            <div className="set">
                <label>Delivery Named Contact Destination:</label>
                <input type="text" name="deliveryNamedContactDestination" onChange={handleChange("deliveryNamedContactDestination")} value={props.deliveryNamedContactDestination} />
            </div>

            <div className="set">
                <label>Delivery Mobile Destination:</label>
                <input type="text" name="deliveryMobileDestination" onChange={handleChange("deliveryMobileDestination")} value={props.deliveryMobileDestination} />
            </div>

            <div className="set">
                <label>Delivery Address Destination:</label>
                <input type="text" name="deliveryAddressDestination" onChange={handleChange("deliveryAddressDestination")} value={props.deliveryAddressDestination} />
            </div>

            <div className="set">
                <label>Emergency Contact Information:</label>
                <input type="text" name="emergencyContactInformation" onChange={handleChange("emergencyContactInformation")} value={props.emergencyContactInformation} />
            </div>

            <div className="set">
                <label>Preferred Communication Method:</label>
                <input type="text" name="preferredCommunicationMethod" onChange={handleChange("preferredCommunicationMethod")} value={props.preferredCommunicationMethod} />
            </div>    
        </form>
    </div>
  );
}