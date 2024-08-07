import React from "react";
import "./style/main.css";

export default function JobDescription({ props, setProps }) {
  const handleChange = (input) => (e) => {
    setProps({ ...props, [input]: e.target.value });
  };

  console.log(props);
  return (
    <div>
      <h2>Job Description</h2>
      <form className="form">
        <div className="set">
          <label>Transport Item ID:</label>
          <input
            type="text"
            name="transportItemID"
            onChange={handleChange("transportItemID")}
            value={props.transportItemID} required
          />
        </div>

        <div className="set">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            onChange={handleChange("category")}
            value={props.category}
          />
        </div>

        <div className="set">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            onChange={handleChange("title")}
            value={props.title}
          />
        </div>

        <div className="set">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            onChange={handleChange("description")}
            value={props.description}
          />
        </div>

        <div className="set">
          <label>Posted Date:</label>
          <input
            type="text"
            name="postedDate"
            onChange={handleChange("postedDate")}
            value={props.postedDate}
          />
        </div>

        <div className="set">
          <label>Deadline Date:</label>
          <input
            type="text"
            name="deadlineDate"
            onChange={handleChange("deadlineDate")}
            value={props.deadlineDate}
          />
        </div>

        <div className="set">
          <label>Time Scale:</label>
          <input
            type="text"
            name="timeScale"
            onChange={handleChange("timeScale")}
            value={props.timeScale}
          />
        </div>

        <div className="set">
          <label>Preferred Date:</label>
          <input
            type="text"
            name="preferredDate"
            onChange={handleChange("preferredDate")}
            value={props.preferredDate}
          />
        </div>

        <div className="set">
          <label>Haulier To Departure Distance:</label>
          <input
            type="text"
            name="haulierToDepartureDistance"
            onChange={handleChange("haulierToDepartureDistance")}
            value={props.haulierToDepartureDistance}
          />
        </div>

        <div className="set">
          <label>Departure To Destination Distance:</label>
          <input
            type="text"
            name="departureToDestinationDistance"
            onChange={handleChange("departureToDestinationDistance")}
            value={props.departureToDestinationDistance}
          />
        </div>

        <div className="set">
          <label>Return Journey:</label>
          <input
            type="text"
            name="returnJourney"
            onChange={handleChange("returnJourney")}
            value={props.returnJourney}
          />
        </div>

        <div className="set">
          <label>Round Trip Distance:</label>
          <input
            type="text"
            name="roundTripDistance"
            onChange={handleChange("roundTripDistance")}
            value={props.roundTripDistance}
          />
        </div>

        <div className="set">
          <label>International:</label>
          <input
            type="text"
            name="international"
            onChange={handleChange("international")}
            value={props.international}
          />
        </div>

        <div className="set">
          <label>Ferry Required:</label>
          <input
            type="text"
            name="ferryRequired"
            onChange={handleChange("ferryRequired")}
            value={props.ferryRequired}
          />
        </div>

        <div className="set">
          <label>Special Handling Requirements:</label>
          <input
            type="text"
            name="specialHandlingRequirements"
            onChange={handleChange("specialHandlingRequirements")}
            value={props.specialHandlingRequirements}
          />
        </div>

        <div className="set">
          <label>Departure Loading Equipment Needed:</label>
          <input
            type="text"
            name="departureLoadingEquipmentNeeded"
            onChange={handleChange("departureLoadingEquipmentNeeded")}
            value={props.departureLoadingEquipmentNeeded}
          />
        </div>

        <div className="set">
          <label>Destination Unloading Equipment Needed:</label>
          <input
            type="text"
            name="destinationUnloadingEquipmentNeeded"
            onChange={handleChange("destinationUnloadingEquipmentNeeded")}
            value={props.destinationUnloadingEquipmentNeeded}
          />
        </div>

        <div className="set">
          <label>Freight Class:</label>
          <input
            type="text"
            name="freightClass"
            onChange={handleChange("freightClass")}
            value={props.freightClass}
          />
        </div>

        <div className="set">
          <label>Overweight Permit Needed:</label>
          <input
            type="text"
            name="overweightPermitNeeded"
            onChange={handleChange("overweightPermitNeeded")}
            value={props.overweightPermitNeeded}
          />
        </div>

        <div className="set">
          <label>Oversize Permit Needed:</label>
          <input
            type="text"
            name="oversizePermitNeeded"
            onChange={handleChange("oversizePermitNeeded")}
            value={props.oversizePermitNeeded}
          />
        </div>

        <div className="set">
          <label>Number Quotes:</label>
          <input
            type="text"
            name="numberQuotes"
            onChange={handleChange("numberQuotes")}
            value={props.numberQuotes}
          />
        </div>

        <div className="set">
          <label>Map:</label>
          <input
            type="text"
            name="map"
            onChange={handleChange("map")}
            value={props.map}
          />
        </div>

        <div className="set">
          <label>Job Done:</label>
          <input
            type="text"
            name="jobDone"
            onChange={handleChange("jobDone")}
            value={props.jobDone}
          />
        </div>

        <div className="set">
          <label>Job Done Date:</label>
          <input
            type="text"
            name="jobDoneDate"
            onChange={handleChange("jobDoneDate")}
            value={props.jobDoneDate}
          />
        </div>
      </form>
    </div>
  );
}
