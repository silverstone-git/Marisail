import React from "react";

export default function HaulierDetails({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
  return (
    <div>
      <h1>Haulier Details</h1>
      <form>
        <label>Haulier ID:</label>
        <input type="text" name="haulierID" onChange={handleChange("haulierID")} value={props.haulierID}/>
        <label>Haulier Address:</label>
        <input type="text" name="haulierAddress" onChange={handleChange("haulierAddress")} value={props.haulierAddress}/>
        <label>Haulier Name:</label>
        <input type="text" name="haulierName" onChange={handleChange("haulierName")} value={props.haulierName}/>
        <label>Haulier Number Jobs:</label>
        <input type="text" name="haulierNumberJobs" onChange={handleChange("haulierNumberJobs")} value={props.haulierNumberJobs}/>
        <label>Haulier Total Customer Score:</label>
        <input type="text" name="haulierTotalCustomerScore" onChange={handleChange("haulierTotalCustomerScore")} value={props.haulierTotalCustomerScore}/>
        <label>Resgistered Since:</label>
        <input type="text" name="resgisteredSince" onChange={handleChange("resgisteredSince")} value={props.resgisteredSince}/>
        <label>Number Vehicles:</label>
        <input type="text" name="numberVehicles" onChange={handleChange("numberVehicles")} value={props.numberVehicles}/>
        <label>Number Drivers:</label>
        <input type="text" name="numberDrivers" onChange={handleChange("numberDrivers")} value={props.numberDrivers}/>
        <label>Verified:</label>
        <input type="text" name="verified" onChange={handleChange("verified")} value={props.verified}/>
        <label>Vehicle Type:</label>
        <input type="text" name="vehicleType" onChange={handleChange("vehicleType")} value={props.vehicleType}/>
        <label>Vehicle Capacity:</label>
        <input type="text" name="vehicleCapacity" onChange={handleChange("vehicleCapacity")} value={props.vehicleCapacity}/>
      </form>
    </div>
  );
}

