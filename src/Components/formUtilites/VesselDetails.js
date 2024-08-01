import React from "react";

export default function VesselDetails({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
  return (
    <div>
      <h1>Vessel Details</h1>
      <form>
        <label>Item Number:</label>
        <input type="text" name="itemNumber" onChange={handleChange("itemNumber")} value={props.itemNumber}/>
        <label>Total Number Of Items</label>
        <input type="text" name="totalNumberOfItems" onChange={handleChange("totalNumberOfItems")} value={props.totalNumberOfItems} />
        <label>Photos:</label>
        <input type="text" name="photos" onChange={handleChange("photos")} value={props.photos} />
        <label>Previous Insurance Claims:</label>
        <input type="text" name="previousInsuranceClaims" onChange={handleChange("previousInsuranceClaims")} value={props.previousInsuranceClaims} />
        <label>Existing Damage:</label> 
        <input type="text" name="existingDamage" onChange={handleChange("existingDamage")} value={props.existingDamage} />
        <label>Damage Description:</label>
        <input type="text" name="damageDescription" onChange={handleChange("damageDescription")} value={props.damageDescription} />
        <label>Vessel Insurance Type:</label>
        <input type="text" name="vesselInsuranceType" onChange={handleChange("vesselInsuranceType")} value={props.vesselInsuranceType} />
        <label>Vessel Insurance Notes:</label>
        <input type="text" name="vesselInsuranceNotes" onChange={handleChange("vesselInsuranceNotes")} value={props.vesselInsuranceNotes} />
        <label>Boat Details:</label>
        <input type="text" name="boatDetails" onChange={handleChange("boatDetails")} value={props.boatDetails} />
        
      </form>
    </div>
  );
}