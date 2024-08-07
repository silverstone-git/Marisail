import React, { useState } from "react";
import JobDescription from "./JobDescription";
import VesselDetails from "./VesselDetails";
import CustomerContactDetails from "./CustomerContactDetails";
import TransportQuotes from "./TransportQuotes";
import QueAns from "./QueAns";
import PaymentInsurance from "./PaymentInsurance";
import Feedback from "./Feedback";
import HaulierDetails from "./HaulierDetails";
import HaulierCommunications from "./HaulierCommunications";
import HaulierSafetyCompliance from "./HaulierSafetyCompliance";
import CalculatePriceAndPay from "./CalculatePriceAndPay";

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
    withdrwan: "", // Sarthak excel m dekh yaha prr problem h kuch
    declineQuote: "",
    withdrawQuote: "",
  });

  const [queAns, setQueAns] = useState({
    questionDate: "",
    answerDate: "",
    transportProviderQuestions: "",
    customerAnswers: "",
    writeQuestion: "",
    answerQuestion: "",
    customeConfirmsCompletion: "",
    addItem: "",
  });

  const [feedback, setFeedback] = useState({
    customerFeedbackNotes: "",
    customerFeedbackScore: "",
    positive: "",
    neutral: "",
    negative: "",
    reviews: "",
    rating: "",
    itemTitle: "",
    leftBy: "",
    comments: "",
    date: "",
    customerGivesFeedbackNotes: "",
    customerGivesFeedbackScore: "",
    seeMyQuotes: "",
  });

  const [haulierDetails, setHaulierDetails] = useState({
    haulierID: "",
    haulierAddress: "",
    haulierName: "",
    haulierNumberJobs: "",
    haulierTotalCustomerScore: "",
    resgisteredSince: "",
    numberVehicles: "",
    numberDrivers: "",
    verified: "",
    vehicleType: "",
    vehicleCapacity: "",
  });

  const [haulierCommunications, setHaulierCommunications] = useState({
    customerServiceContactInformation: "",
    realTimeTracking: "",
    electronicProofOfDelivery: "",
    automatedAlertsAndNotifications: "",
    trackingSystem: "",
    deliveryWindow: "",
    deliveryConfirmation: "",
  });

  const [haulierSafetyCompliance, setHaulierSafetyCompliance] = useState({
    safetyCertifications: "",
    environmentalRegulationsCompliance: "",
    hazardousMaterialsHandling: "",
    safetyTrainingPrograms: "",
    accidentReportingProcedure: "",
    healthAndSafetyPolicy: "",
    safetyAudits: "",
    riskAssessments: "",
    incidentManagement: "",
    complianceRecords: "",
    permitsAndLicenses: "",
    transportRegulationsCompliance: "",
  });

  const [paymentInsurance, setPaymentInsurance] = useState({
    paymentTerms: "",
    serviceLegalAgreement: "",
    acceptedPaymentMethods: "",
    cancellationPolicy: "",
    currency: "",
    invoiceTime: "",
    latePaymentFee: "",
    billingContactInformation: "",
    disputeResolutionTerms: "",
    liabilityCoverage: "",
    insurancePolicy: "",
    insuranceCoverage: "",
    insuranceProvider: "",
    insuranceClaimProcess: "",
  });

  const [calculatePriceAndPay, setCalculatePriceAndPay] = useState({
    priceLabel: "",
    priceDrop: "",
    currency: "",
    VAT: "",
    totalPrice: "",
  });

  if (submit) {
    console.log("OOOO");
  }

  // go back to previous page
  const prevStep = () => {
    setPage(page - 1);
  };

  // go to next page
  const nextStep = () => {
    setPage(page + 1);
  };

  const pages = [
    <JobDescription props={jobDes} setProps={setJobDes} />,
    <VesselDetails props={vesselDetails} setProps={setVesselDetails} />,
    <CustomerContactDetails
      props={customerContactDetails}
      setProps={setCustomerContactDetails}
    />,
    <TransportQuotes props={transportQuotes} setProps={setTransportQuotes} />,
    <QueAns props={queAns} setProps={setQueAns} />,
    <Feedback props={feedback} setProps={setFeedback} />,
    <HaulierDetails props={haulierDetails} setProps={setHaulierDetails} />,
    <HaulierCommunications
      props={haulierCommunications}
      setProps={setHaulierCommunications}
    />,
    <HaulierSafetyCompliance
      props={haulierSafetyCompliance}
      setProps={setHaulierSafetyCompliance}
    />,
    <PaymentInsurance
      props={paymentInsurance}
      setProps={setPaymentInsurance}
    />,
    <CalculatePriceAndPay
      props={calculatePriceAndPay}
      setProps={setCalculatePriceAndPay}
    />,
  ];

  return (
    <div>
      <p>Fill the below info</p>
      {pages.map((item, index) => {
        if (index === page) return item;

        return null;
      })}

      <br />
      <div className="buttons">
        {/* <button onClick={() => setSubmit(true)}>Submit</button> */}
        {page === 0 ? null : <button onClick={prevStep}>Previous</button>}
        {page === pages.length - 1 ? (
          <button onClick={() => setSubmit(true)}>Submit</button>
        ) : (
          <button onClick={nextStep}>Next</button>
        )}
      </div>
    </div>
  );
}
