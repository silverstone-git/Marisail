import React from 'react';

export default function JobDescription({props, setProps}) {

    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };

    console.log(props);
    return <div>
    <h1>
        Job Description
    </h1>
        <form>
            <label>Transport Item ID:</label>
            <input type="text" name="transportItemID" onChange={handleChange("transportItemID")} value={props.transportItemID}/>
            <label>Category:</label>
            <input type="text" name="category" onChange={handleChange("category")} value={props.category} />
            <label>Title:</label>
            <input type="text" name="title" onChange={handleChange("title")} value={props.title} />
            <label>Description:</label>
            <input type="text" name="description" onChange={handleChange("description")} value={props.description} />
            <label>Posted Date:</label>
            <input type="text" name="postedDate" onChange={handleChange("postedDate")} value={props.postedDate} />
            <label>Deadline Date:</label>
            <input type="text" name="deadlineDate" onChange={handleChange("deadlineDate")} value={props.deadlineDate} />
            <label>Time Scale:</label>
            <input type="text" name="timeScale" onChange={handleChange("timeScale")} value={props.timeScale} /> 
            <label>Preferred Date:</label>
            <input type="text" name="preferredDate" onChange={handleChange("preferredDate")} value={props.preferredDate} />
            <label>Haulier To Departure Distance:</label>
            <input type="text" name="haulierToDepartureDistance" onChange={handleChange("haulierToDepartureDistance")} value={props.haulierToDepartureDistance} />
            <label>Departure To Destination Distance:</label>
            <input type="text" name="departureToDestinationDistance" onChange={handleChange("departureToDestinationDistance")} value={props.departureToDestinationDistance} />
            <label>Return Journey:</label>
            <input type="text" name="returnJourney" onChange={handleChange("returnJourney")} value={props.returnJourney} />
            <label>Round Trip Distance:</label>
            <input type="text" name="roundTripDistance" onChange={handleChange("roundTripDistance")} value={props.roundTripDistance} />
            <label>International:</label>
            <input type="text" name="international" onChange={handleChange("international")} value={props.international} />
            <label>Ferry Required:</label>
            <input type="text" name="ferryRequired" onChange={handleChange("ferryRequired")} value={props.ferryRequired} />
            <label>Speacial Handling Requirements:</label>
            <input type="text" name="speacialHandlingRequirements" onChange={handleChange("speacialHandlingRequirements")} value={props.speacialHandlingRequirements} />
            <label>Departure Loading Equipment Needed:</label>
            <input type="text" name="departureLoadingEquipmentNeeded" onChange={handleChange("departureLoadingEquipmentNeeded")} value={props.departureLoadingEquipmentNeeded} />
            <label>Destination Unloading Equipment Needed:</label>
            <input type="text" name="destinationUnloadingEquipmentNeeded" onChange={handleChange("destinationUnloadingEquipmentNeeded")} value={props.destinationUnloadingEquipmentNeeded} />
            <label>Freight Class:</label>
            <input type="text" name="freightClass" onChange={handleChange("freightClass")} value={props.freightClass} />
            <label>Overweight Permit Needed:</label>
            <input type="text" name="overweightPermitNeeded" onChange={handleChange("overweightPermitNeeded")} value={props.overweightPermitNeeded} />
            <label>Oversize Permit Needed:</label>
            <input type="text" name="oversizePermitNeeded" onChange={handleChange("oversizePermitNeeded")} value={props.oversizePermitNeeded} />
            <label>Number Quotes:</label>
            <input type="text" name="numberQuotes" onChange={handleChange("numberQuotes")} value={props.numberQuotes} />
            <label>Map:</label>
            <input type="text" name="map" onChange={handleChange("map")} value={props.map} />
            <label>Job Done:</label>
            <input type="text" name="jobDone" onChange={handleChange("jobDone")} value={props.jobDone} />
            <label>Job Done Date:</label>
            <input type="text" name="jobDoneDate" onChange={handleChange("jobDoneDate")} value={props.jobDoneDate} />
            
        </form>
    </div>
}
