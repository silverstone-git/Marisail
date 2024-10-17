import { Form, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import DropdownWithRadio from "../DropdownWithRadio";
import Loader from "../Loader";
import InputComponentDynamic from "../InputComponentDynamic";
import SubmitButton from "../SubmitButton";
import { keyToExpectedValueMap, typeDef } from "../Transport/TransportAdvertInfo";
import { makeString } from "../../services/common_functions";
const apiUrl = import.meta.env.VITE_BACKEND_URL;

export default function MyTransport() {
    // Retrieve the user object from localStorage
    const storedUser = localStorage.getItem("user");
    const formData = localStorage.getItem("TransportData");
    // let user;
    let advertiseTransportData;
    // Parse the JSON string back into an object
    if (storedUser && formData) {
        advertiseTransportData = JSON.parse(formData);
    }
    const [error, setError] = useState({});
    const hasFetched = useRef(false);
    const [engines, setEngines] = useState("");
    const [openKey, setOpenKey] = useState(null);
    const [loading, setLoading] = useState(false);
    const [allSelectedOptions, setAllSelectedOptions] = useState({});
    const [jobDescription, setJobDescription] = useState({
        marisailTransportId: advertiseTransportData?.marisailTransportId || "",
        category: advertiseTransportData?.category || "",
        title: advertiseTransportData?.title || "",
        description: advertiseTransportData?.description || "",
        postedDate: advertiseTransportData?.postedDate || "",
        deadlineDate: advertiseTransportData?.deadlineDate || "",
        timescale: advertiseTransportData?.timescale || "",
        preferredDate: advertiseTransportData?.preferredDate || "",
        haulierToDepartureDistance:
            advertiseTransportData?.haulierToDepartureDistance || "",
        departureToDestinationDistance:
            advertiseTransportData?.departureToDestinationDistance || "",
        returnJourney: advertiseTransportData?.returnJourney || "",
        roundTripDistance: advertiseTransportData?.roundTripDistance || "",
        international: advertiseTransportData?.international || "",
        ferryRequired: advertiseTransportData?.ferryRequired || "",
        specialHandlingRequirements:
            advertiseTransportData?.specialHandlingRequirements || "",
        departureLoadingEquipmentNeeded:
            advertiseTransportData?.departureLoadingEquipmentNeeded || "",
        destinationUnloadingEquipmentNeeded:
            advertiseTransportData?.destinationUnloadingEquipmentNeeded || "",
        freightClass: advertiseTransportData?.freightClass || "",
        overweightPermitNeeded: advertiseTransportData?.overweightPermitNeeded || "",
        oversizePermitNeeded: advertiseTransportData?.oversizePermitNeeded || "",
        numberQuotes: advertiseTransportData?.numberQuotes || "",
        map: advertiseTransportData?.map || "",
        jobDone: advertiseTransportData?.jobDone || "",
        jobDoneDate: advertiseTransportData?.jobDoneDate || "",
    });
    const [vesselDetails, setVesselDetails] = useState({
        itemNumber: advertiseTransportData?.itemNumber || "",
        totalNumberItems: advertiseTransportData?.totalNumberItems || "",
        photos: advertiseTransportData?.photos || "",
        previousInsuranceClaims: advertiseTransportData?.previousInsuranceClaims || "",
        existingDamage: advertiseTransportData?.existingDamage || "",
        damageDescription: advertiseTransportData?.damageDescription || "",
        vesselInsuranceType: advertiseTransportData?.vesselInsuranceType || "",
        vesselInsuranceNotes: advertiseTransportData?.vesselInsuranceNotes || "",
        boatDetails: advertiseTransportData?.boatDetails || "",
    });
    const [customerContactDetails, setCustomerDetails] = useState({
        customerType: advertiseTransportData?.customerType || "",
        customerId: advertiseTransportData?.customerId || "",
        customerName: advertiseTransportData?.customerName || "",
        customerCompanyName: advertiseTransportData?.customerCompanyName || "",
        collectionDepartureNamedContact:
            advertiseTransportData?.collectionDepartureNamedContact || "",
        collectionDepartureMobile: advertiseTransportData?.collectionDepartureMobile || "",
        deliveryDestinationNamedContact:
            advertiseTransportData?.deliveryDestinationNamedContact || "",
        collectionDepartureAddress:
            advertiseTransportData?.collectionDepartureAddress || "",
        deliveryDestinationMobile: advertiseTransportData?.deliveryDestinationMobile || "",
        deliveryDestinationAddress:
            advertiseTransportData?.deliveryDestinationAddress || "",
        emergencyContactInformation:
            advertiseTransportData?.emergencyContactInformation || "",
        preferredCommunicationMethod:
            advertiseTransportData?.preferredCommunicationMethod || "",
    });
    const [transportQuotes, setTransportQuotes] = useState({
        quote: advertiseTransportData?.quote || "",
        quoteDescription: advertiseTransportData?.quoteDescription || "",
        quoteDate: advertiseTransportData?.quoteDate || "",
        declineDate: advertiseTransportData?.declineDate || "",
        withdrawDate: advertiseTransportData?.withdrawDate || "",
        quoteStatus: advertiseTransportData?.quoteStatus || "",
        declineQuote: advertiseTransportData?.declineQuote || "",
        withdrawQuote: advertiseTransportData?.withdrawQuote || "",
    });
    const [qAndA, setQAndA] = useState({
        questionDate: advertiseTransportData?.questionDate || "",
        answerDate: advertiseTransportData?.answerDate || "",
        transportProviderQuestions:
            advertiseTransportData?.transportProviderQuestions || "",
        customerAnswers: advertiseTransportData?.customerAnswers || "",
        writeQuestion: advertiseTransportData?.writeQuestion || "",
        answerQuestion: advertiseTransportData?.answerQuestion || "",
        customerConfirmsCompletion:
            advertiseTransportData?.customerConfirmsCompletion || "",
        addItem: advertiseTransportData?.addItem || "",
    });
    const [feedback, setFeedback] = useState({
        customerFeedbackNotes: advertiseTransportData?.customerFeedbackNotes || "",
        customerFeedbackScore: advertiseTransportData?.customerFeedbackScore || "",
        positive: advertiseTransportData?.positive || "",
        neutral: advertiseTransportData?.neutral || "",
        negative: advertiseTransportData?.negative || "",
        reviews: advertiseTransportData?.reviews || "",
        rating: advertiseTransportData?.rating || "",
        itemTitle: advertiseTransportData?.itemTitle || "",
        leftBy: advertiseTransportData?.leftBy || "",
        comments: advertiseTransportData?.comments || "",
        date: advertiseTransportData?.date || "",
        customerGivesFeedbackNotes:
            advertiseTransportData?.customerGivesFeedbackNotes || "",
        customerGivesFeedbackScore:
            advertiseTransportData?.customerGivesFeedbackScore || "",
        seeMyQuotes: advertiseTransportData?.seeMyQuotes || "",
    });
    const [haulierDates, setHaulierDates] = useState({
        haulierId: advertiseTransportData?.haulierId || "",
        haulierAddress: advertiseTransportData?.haulierAddress || "",
        haulierName: advertiseTransportData?.haulierName || "",
        haulierNumberJobs: advertiseTransportData?.haulierNumberJobs || "",
        haulierTotalCustomerScore: advertiseTransportData?.haulierTotalCustomerScore || "",
        registeredSince: advertiseTransportData?.registeredSince || "",
        numberVehicles: advertiseTransportData?.numberVehicles || "",
        numberDrivers: advertiseTransportData?.numberDrivers || "",
        verified: advertiseTransportData?.verified || "",
        vehicleType: advertiseTransportData?.vehicleType || "",
        vehicleCapacity: advertiseTransportData?.vehicleCapacity || "",
    });
    const [haulierCommunications, setHaulierCommunications] = useState({
        customerServiceContactInformation:
            advertiseTransportData?.customerServiceContactInformation || "",
        realTimeTracking: advertiseTransportData?.realTimeTracking || "",
        electronicProofOfDelivery: advertiseTransportData?.electronicProofOfDelivery || "",
        automatedAlertsAndNotifications:
            advertiseTransportData?.automatedAlertsAndNotifications || "",
        trackingSystem: advertiseTransportData?.trackingSystem || "",
        deliveryWindow: advertiseTransportData?.deliveryWindow || "",
        deliveryConfirmation: advertiseTransportData?.deliveryConfirmation || "",
    });
    const [haulierSafetyAndCompliance, setHaulierSafetyAndCompliance] = useState({
        safetyCertifications: advertiseTransportData?.safetyCertifications || "",
        environmentalRegulationsCompliance:
            advertiseTransportData?.environmentalRegulationsCompliance || "",
        hazardousMaterialsHandling:
            advertiseTransportData?.hazardousMaterialsHandling || "",
        safetyTrainingPrograms: advertiseTransportData?.safetyTrainingPrograms || "",
        accidentReportingProcedures:
            advertiseTransportData?.accidentReportingProcedures || "",
        healthAndSafetyPolicies: advertiseTransportData?.healthAndSafetyPolicies || "",
        safetyAudits: advertiseTransportData?.safetyAudits || "",
        riskAssessments: advertiseTransportData?.riskAssessments || "",
        incidentManagement: advertiseTransportData?.incidentManagement || "",
        complianceRecords: advertiseTransportData?.complianceRecords || "",
        permitsAndLicenses: advertiseTransportData?.permitsAndLicenses || "",
        transportRegulationsCompliance:
            advertiseTransportData?.transportRegulationsCompliance || "",
    });
    const [paymentAndInsurance, setPaymentAndInsurance] = useState({
        serviceLevelAgreement: advertiseTransportData?.serviceLevelAgreement || "",
        acceptedPaymentMethods: advertiseTransportData?.acceptedPaymentMethods || "",
        cancellationPolicy: advertiseTransportData?.cancellationPolicy || "",
        invoiceTime: advertiseTransportData?.invoiceTime || "",
        latePaymentFees: advertiseTransportData?.latePaymentFees || "",
        billingContactInformation: advertiseTransportData?.billingContactInformation || "",
        disputeResolutionTerms: advertiseTransportData?.disputeResolutionTerms || "",
        liabilityCoverage: advertiseTransportData?.liabilityCoverage || "",
        insurancePolicy: advertiseTransportData?.insurancePolicy || "",
        insuranceCoverage: advertiseTransportData?.insuranceCoverage || "",
        insuranceProvider: advertiseTransportData?.insuranceProvider || "",
        insuranceClaimProcess: advertiseTransportData?.insuranceClaimProcess || "",
    });
    const [paymentTerms, setPaymentTerms] = useState({
        paymentTerms: advertiseTransportData?.paymentTerms || "",
        currency: advertiseTransportData?.currency || "",
        preferredPaymentMethods: advertiseTransportData?.preferredPaymentMethods || "",
        invoiceAndReceiptProcedures:
            advertiseTransportData?.invoiceAndReceiptProcedures || "",
        calculatePriceAndPay: advertiseTransportData?.calculatePriceAndPay || "",
        priceLabel: advertiseTransportData?.priceLabel || "",
        priceDrop: advertiseTransportData?.priceDrop || "",
        vat: advertiseTransportData?.vat || "",
    });
    const checkRequired = () => {
        const errors = {};
        Object.keys(typeDef).forEach((sectionKey) => {
            const section = typeDef[sectionKey];
            const sectionData = sections[sectionKey];
            Object.keys(section).forEach((fieldKey) => {
                const field = section[fieldKey];
                if (field.mandatory) {
                    const fieldValue = sectionData[fieldKey];
                    if (field.type === "radio") {
                        if (!field.value || String(field.value).trim() === "") {
                            errors[`${fieldKey}`] = true;
                        }
                    } else if (field.type === "number") {
                        if (
                            fieldValue === undefined ||
                            fieldValue === "" ||
                            isNaN(fieldValue)
                        ) {
                            errors[`${fieldKey}`] = true;
                        }
                    }
                }
            });
        });

        setError(errors);
        return Object.keys(errors).length === 0;
    };

    const sections = {
        jobDescription,
        feedback,
        vesselDetails,
        haulierCommunications,
        transportQuotes,
        qAndA,
        customerContactDetails,
        haulierSafetyAndCompliance,
        haulierDates,
        paymentAndInsurance,
        paymentTerms,
    };

    const setStateFunctions = {
        jobDescription: setJobDescription,
        vesselDetails: setVesselDetails,
        customerContactDetails: setCustomerDetails,
        transportQuotes: setTransportQuotes,
        qAndA: setQAndA,
        feedback: setFeedback,
        haulierDates: setHaulierDates,
        haulierCommunications: setHaulierCommunications,
        haulierSafetyAndCompliance: setHaulierSafetyAndCompliance,
        paymentAndInsurance: setPaymentAndInsurance,
        paymentTerms: setPaymentTerms,
    };

    const handleOptionSelect = (category, field, selectedOption) => {
        setAllSelectedOptions((prevState) => {
            const updatedOptions = {
                ...prevState,
                [category]: {
                    ...prevState[category],
                    [field]: selectedOption,
                },
            };

            // if (category === "jobDescription" && field === "title") {
            //     const { marisailTransportId, category, title } =
            //         updatedOptions.jobDescription;
            //     fetchRelevantOptions(marisailTransportId, category, title);
            // }

            return updatedOptions;
        });

        // if (
        //     category === "jobDescription" &&
        //     (field === "marisailTransportId" || field === "category")
        // ) {
        //     fetchJDSectionOptions(category, selectedOption, field);
        // }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // if (checkRequired()) {
            // If no errors, proceed with form submission logic
            console.log("001 Form is valid, submitting...", allSelectedOptions);
            // localStorage.setItem("advertise_engine", JSON.stringify(form));

            const allFormData = {
                jobDescription,
                vesselDetails,
                customerContactDetails,
                transportQuotes,
                qAndA,
                feedback,
                haulierDates,
                haulierCommunications,
                haulierSafetyAndCompliance,
                paymentAndInsurance,
                paymentTerms,
            };

            // Store the combined data in localStorage
            localStorage.setItem("TransportData", JSON.stringify(allSelectedOptions));

            // console.log("001 Form data saved to localStorage:", allFormData);
            // } else {
            //     console.warn(error);
            // }
        } catch (error) {
            console.error(error);
        }
    };
    function setPageData(key, newData) {
        const setStateFunction = setStateFunctions[key];
        if (setStateFunction) {
            setStateFunction((prevState) => ({
                ...prevState,
                ...newData,
            }));
        } else {
            console.error(
                `No setState function found for key:` + JSON.stringify(key)
            );
        }
    }

    const cacheKey = "transportFilterData";
    const URL = apiUrl +"/advert_transport/";

    const fetchDistinctData = async () => {
        try {
            setLoading(true);
            const promises = Object.keys(sections).map(async (key) => {
                const response = await fetch(`${URL}transport`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(sections[key]),
                });
                const data = await response.json();
                return { key, data: data.res };
            });
            const results = await Promise.all(promises);
            results.forEach(({ key, data }) => {
                setPageData(key, data);
            });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
            console.log("done");
        }
    };
    const fetchRelevantOptions = async (marisailTransportId, category, title) => {
        try {
            setLoading(true);
            const requestBody = { marisailTransportId, category, title };
            const response = await fetch(`${URL}relevant_data`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ requestBody }),
            });
            const data = await response.json();
            const result = data?.result;

            if (result) {
                const updatePromises = Object.keys(result).map((fieldKey) => {
                    if (Object.keys(requestBody).includes(fieldKey)) {
                        return Promise.resolve();
                    }
                    return Promise.all(
                        Object.keys(sections).map((sectionKey) => {
                            return new Promise((resolve) => {
                                if (sections[sectionKey][fieldKey] !== undefined) {
                                    const fieldValue =
                                        Array.isArray(result[fieldKey]) &&
                                            result[fieldKey].length > 0
                                            ? result[fieldKey]?.[0]
                                            : sections[sectionKey][fieldKey];

                                    setAllSelectedOptions((prevState) => ({
                                        ...prevState,
                                        [sectionKey]: {
                                            ...prevState[sectionKey],
                                            [fieldKey]: [fieldValue],
                                        },
                                    }));

                                    resolve();
                                } else {
                                    resolve();
                                }
                            });
                        })
                    );
                });

                // Wait for all updates to complete
                await Promise.all(updatePromises);
            }
        } catch (error) {
            console.error("Error fetching other section:", error);
        } finally {
            setLoading(false);
        }
    };
    const fetchJDSectionOptions = async (category, selectedOption, Key) => {
        try {
            setLoading(true);
            const tableName = "Job";
            const keyHierarchy = ["marisailTransportId", "category"];

            const currentKeyIndex = keyHierarchy.indexOf(Key);
            const fetchColumn = keyHierarchy[currentKeyIndex + 1];
            let requestBody = {};
            for (let i = 0; i <= currentKeyIndex; i++) {
                const key = keyHierarchy[i];
                requestBody[key] =
                    key === Key ? selectedOption : allSelectedOptions[category]?.[key];
            }

            if (!fetchColumn) {
                throw new Error(
                    "No further data to fetch. All selections are complete."
                );
            }
            const response = await fetch(`${URL}${tableName}/${fetchColumn}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ requestBody }),
            });

            const data = await response.json();
            setPageData(category, {
                ...sections[category],
                [fetchColumn]: data.result,
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
            setPageData(JSON.parse(cachedData));
        } else {
            if (!hasFetched.current) {
                fetchDistinctData();
                hasFetched.current = true;
            }
        }
    }, [setPageData]);

    const handleInputChange = (title, fieldKey, newValue) => {
        setEngines((prevTrailers) => ({
            ...prevTrailers,
            [title]: {
                ...prevTrailers[title],
                [fieldKey]: newValue,
            },
        }));
    };

    const errorDisplay = (fieldName) => {
        return (
            <div style={{ color: "red", paddingLeft: 10 }}>
                {fieldName} field is required
            </div>
        );
    };

    return (
        <Container className="mb-5">
            {loading ? (
                <Loader />
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Row>
                        {Object.keys(sections).map((title) => (
                            <Col md={6} key={title} className="mt-2">
                                <legend className="fieldset-legend">
                                    <h6 style={{ padding: "15px 10px 0px 10px" }}>
                                        {makeString(title, keyToExpectedValueMap)}
                                    </h6>
                                </legend>
                                {Object.keys(sections[title]).map((fieldKey) => {
                                    // <div>{JSON.stringify({sections[title][fieldKey]})}</div>
                                    const field = typeDef[title][fieldKey];
                                    // <div>{JSON.stringify(sections[title])}</div>
                                    if (field && field.type === "radio") {
                                        return (
                                            <Col
                                                md={12}
                                                className="mr-3"
                                                key={fieldKey}
                                                style={{ width: 480 }}
                                            >
                                                <Col xs={3} md={12}>
                                                    <DropdownWithRadio
                                                        heading={fieldKey}
                                                        title={makeString(fieldKey, keyToExpectedValueMap)}
                                                        options={sections[title][fieldKey]}
                                                        selectedOption={
                                                            allSelectedOptions[title]?.[fieldKey] || advertiseTransportData[title]?.[fieldKey] || ""
                                                        }
                                                        setSelectedOption={(selectedOption) =>
                                                            handleOptionSelect(
                                                                title,
                                                                fieldKey,
                                                                selectedOption
                                                            )
                                                        }
                                                        isMandatory={field.mandatory}
                                                        setOpenKey={setOpenKey}
                                                        openKey={openKey}
                                                    />
                                                    {error[`${fieldKey}`] && (
                                                        <div>
                                                            {errorDisplay(
                                                                makeString(fieldKey, keyToExpectedValueMap)
                                                            )}
                                                        </div>
                                                    )}
                                                </Col>
                                            </Col>
                                        );
                                    } else if (field && field.type === "number") {
                                        return (
                                            <Col
                                                md={12}
                                                className="mr-3"
                                                key={fieldKey}
                                                style={{ width: 480 }}
                                            >
                                                <InputComponentDynamic
                                                    label={makeString(fieldKey, keyToExpectedValueMap)}
                                                    value={engines[title]?.[fieldKey] || ""}
                                                    setValue={(e) =>
                                                        handleInputChange(title, fieldKey, e.target.value)
                                                    }
                                                    formType="number"
                                                    setOpenKey={setOpenKey}
                                                    openKey={openKey}
                                                    isMandatory={field.mandatory}
                                                />
                                                {error[`${fieldKey}`] && (
                                                    <div>
                                                        {errorDisplay(
                                                            makeString(fieldKey, keyToExpectedValueMap)
                                                        )}
                                                    </div>
                                                )}
                                            </Col>
                                        );
                                    }
                                    return null;
                                })}
                            </Col>
                        ))}
                    </Row>
                    <SubmitButton
                        text="Submit"
                        name="advert_transport_submit"
                        onClick={handleSubmit}
                    />
                </Form>
            )}
        </Container>
    );
}
