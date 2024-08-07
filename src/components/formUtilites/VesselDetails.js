import React from "react";

export default function VesselDetails({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
  return (
    <div>
      <h2>Vessel Details</h2>
      <form className="form">
      <div className="set">
                    <label>Item Number:</label>
                    <input type="text" name="itemNumber" onChange={handleChange("itemNumber")} value={props.itemNumber} />
                </div>

                <div className="set">
                    <label>Total Number Of Items:</label>
                    <input type="text" name="totalNumberOfItems" onChange={handleChange("totalNumberOfItems")} value={props.totalNumberOfItems} />
                </div>

                <div className="set">
                    <label>Photos:</label>
                    <input type="text" name="photos" onChange={handleChange("photos")} value={props.photos} />
                </div>

                <div className="set">
                    <label>Previous Insurance Claims:</label>
                    <input type="text" name="previousInsuranceClaims" onChange={handleChange("previousInsuranceClaims")} value={props.previousInsuranceClaims} />
                </div>

                <div className="set">
                    <label>Existing Damage:</label>
                    <input type="text" name="existingDamage" onChange={handleChange("existingDamage")} value={props.existingDamage} />
                </div>

                <div className="set">
                    <label>Damage Description:</label>
                    <input type="text" name="damageDescription" onChange={handleChange("damageDescription")} value={props.damageDescription} />
                </div>

                <div className="set">
                    <label>Vessel Insurance Type:</label>
                    <input type="text" name="vesselInsuranceType" onChange={handleChange("vesselInsuranceType")} value={props.vesselInsuranceType} />
                </div>

                <div className="set">
                    <label>Vessel Insurance Notes:</label>
                    <input type="text" name="vesselInsuranceNotes" onChange={handleChange("vesselInsuranceNotes")} value={props.vesselInsuranceNotes} />
                </div>

                <div className="set">
                    <label>Boat Details:</label>
                    <input type="text" name="boatDetails" onChange={handleChange("boatDetails")} value={props.boatDetails} />
                </div>
      </form>
    </div>
  );
}