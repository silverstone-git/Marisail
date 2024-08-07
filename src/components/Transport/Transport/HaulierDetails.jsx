import React from "react";

export default function HaulierDetails({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
  return (
    <div>
      <h2>Haulier Details</h2>
      <form className="form">
        <div className="set">
            <label>Haulier ID:</label>
            <input type="text" name="haulierID" onChange={handleChange("haulierID")} value={props.haulierID} />
        </div>

        <div className="set">
            <label>Haulier Address:</label>
            <input type="text" name="haulierAddress" onChange={handleChange("haulierAddress")} value={props.haulierAddress} />
        </div>

        <div className="set">
            <label>Haulier Name:</label>
            <input type="text" name="haulierName" onChange={handleChange("haulierName")} value={props.haulierName} />
        </div>

        <div className="set">
            <label>Haulier Number Jobs:</label>
            <input type="text" name="haulierNumberJobs" onChange={handleChange("haulierNumberJobs")} value={props.haulierNumberJobs} />
        </div>

        <div className="set">
            <label>Haulier Total Customer Score:</label>
            <input type="text" name="haulierTotalCustomerScore" onChange={handleChange("haulierTotalCustomerScore")} value={props.haulierTotalCustomerScore} />
        </div>

        <div className="set">
            <label>Registered Since:</label>
            <input type="text" name="registeredSince" onChange={handleChange("registeredSince")} value={props.registeredSince} />
        </div>

        <div className="set">
            <label>Number Vehicles:</label>
            <input type="text" name="numberVehicles" onChange={handleChange("numberVehicles")} value={props.numberVehicles} />
        </div>

        <div className="set">
            <label>Number Drivers:</label>
            <input type="text" name="numberDrivers" onChange={handleChange("numberDrivers")} value={props.numberDrivers} />
        </div>

        <div className="set">
            <label>Verified:</label>
            <input type="text" name="verified" onChange={handleChange("verified")} value={props.verified} />
        </div>

        <div className="set">
            <label>Vehicle Type:</label>
            <input type="text" name="vehicleType" onChange={handleChange("vehicleType")} value={props.vehicleType} />
        </div>

        <div className="set">
            <label>Vehicle Capacity:</label>
            <input type="text" name="vehicleCapacity" onChange={handleChange("vehicleCapacity")} value={props.vehicleCapacity} />
        </div>      

       </form>
    </div>
  );
}

