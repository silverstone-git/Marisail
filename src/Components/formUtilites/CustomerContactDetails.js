import React from "react";

export default function CustomerContactDetails({props, setProps}) {
  
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
    return (
    <div>
      <h1>Customer Contact Details</h1>
      <form>
        <label>Customer Type:</label>
        <input type="text" name="customerType" onChange={handleChange("customerType")} value={props.customerType}/>
        <label>Customer ID:</label>
        <input type="text" name="customerID" onChange={handleChange("customerID")} value={props.customerID}/>
        <label>Customer Name:</label>
        <input type="text" name="customerName" onChange={handleChange("customerName")} value={props.customerName}/>
        <label>Customer Company Name:</label>
        <input type="text" name="customerCompanyName" onChange={handleChange("customerCompanyName")} value={props.customerCompanyName}/>
        <label>Collection Named Contact Departure:</label>
        <input type="text" name="collectionNamedContactDeparture" onChange={handleChange("collectionNamedContactDeparture")} value={props.collectionNamedContactDeparture}/>
        <label>Collection Mobile Departure:</label>
        <input type="text" name="collectionMobileDeparture" onChange={handleChange("collectionMobileDeparture")} value={props.collectionMobileDeparture}/>
        <label>Collection Address Departure:</label>
        <input type="text" name="collectionAddressDeparture" onChange={handleChange("collectionAddressDeparture")} value={props.collectionAddressDeparture}/>
        <label>Delivery Named Contact Destination:</label>
        <input type="text" name="deliveryNamedContactDestination" onChange={handleChange("deliveryNamedContactDestination")} value={props.deliveryNamedContactDestination}/>
        <label>Delivery Mobile Destination:</label>
        <input type="text" name="deliveryMobileDestination" onChange={handleChange("deliveryMobileDestination")} value={props.deliveryMobileDestination}/>
        <label>Delivery Address Destination:</label>
        <input type="text" name="deliveryAddressDestination" onChange={handleChange("deliveryAddressDestination")} value={props.deliveryAddressDestination}/>
        <label>Emergency Contact Information:</label>
        <input type="text" name="emergencyContactInformation" onChange={handleChange("emergencyContactInformation")} value={props.emergencyContactInformation}/>
        <label>Preferred Communication Method:</label>
        <input type="text" name="preferredCommunicationMethod" onChange={handleChange("preferredCommunicationMethod")} value={props.preferredCommunicationMethod}/>
      </form>
    </div>
  );
}