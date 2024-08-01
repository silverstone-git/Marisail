import React, { useState } from 'react';
import JobDescription from './JobDescription';
import VesselDetails from './VesselDetails';
import CustomerContactDetails from './CustomerContactDetails';
import TransportQuotes from './TransportQuotes';

export default function Form() {

    const [page, setPage] = useState(0);
    const [submit, setSubmit] = useState(false);
    const [jobDes, setJobDes] = useState({
        transportItemID: "",
        category: "",
        title: "",
        description: "",
        postedDate: "",
        deadlineDate: "",
        timeScale: "",
        preferredDate: "",
        haulierToDepartureDistance: "",
        departureToDestinationDistance: "",
        returnJourney: "",
        roundTripDistance: "",
        international: "",
        ferryRequired: "",
        speacialHandlingRequirements: "",
        departureLoadingEquipmentNeeded: "",
        destinationUnloadingEquipmentNeeded: "",
        freightClass: "",
        overweightPermitNeeded: "",
        oversizePermitNeeded: "",
        numberQuotes: "",
        map: "",
        jobDone: "",
        jobDoneDate: "",
    });

    const [vesselDetails, setVesselDetails] = useState({
        itemNumber: "",
        totalNumberOfItems: "",
        photos: "",
        previousInsuranceClaims: "",
        existingDamage: "",
        damageDescription: "",
        vesselInsuranceType: "",
        vesselInsuranceNotes: "",
        boatDetails: "",
    });

    const [customerContactDetails, setCustomerContactDetails] = useState({
        customerType: "",
        customerID: "",
        customerName: "",
        customerCompanyName: "",
        collectionNamedContactDeparture: "",
        collectionMobileDeparture: "",
        collectionAddressDeparture: "",
        deliveryNamedContactDestination: "",
        deliveryMobileDestination: "",
        deliveryAddressDestination: "",
        emergencyContactInformation: "",
        preferredCommunicationMethod: "",
    });

    const [transportQuotes, setTransportQuotes] = useState({
        quote: "",
        quoteDescription: "",
        quoteDate: "",
        declineDate: "",
        withdrawDate: "",
        withdrwan: "",   //Sarthak excel m dekh yaha prr problem h kuch
        declineQuote: "",
        withdrawQuote: "",
    })


    // go back to previous page
    const prevStep = () => {
        setPage(page - 1);
    }

    // go to next page
    const nextStep = () => {
        setPage(page + 1);
    }

    const pages = [
        <JobDescription props={jobDes} setProps={setJobDes} />,
        <VesselDetails props={vesselDetails} setProps={setVesselDetails} />,
        <CustomerContactDetails props={customerContactDetails} setProps={setCustomerContactDetails} />,
        <TransportQuotes props={transportQuotes} setProps={setTransportQuotes} />
    ];  


    return <div>
        <p>Fill the below info</p>
        {pages.map((item, index) => {
            if (index === page)
                return item;
        })}
        
        <br />
        {/* <button onClick={() => setSubmit(true)}>Submit</button> */}
        <br/>
        {
            page === 0 ? null : <button onClick={prevStep}>Previous</button>
        }
        <button onClick={nextStep}>Next</button>

    </div>
}