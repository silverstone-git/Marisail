import { Form, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import DropdownWithRadio from "../DropdownWithRadio";
import Loader from "../Loader";
import SubmitButton from '../SubmitButton';

const makeString = (str) => {
    var newStr = "";
    newStr += str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() || i === 0) {
            newStr += " " + str[i];
        } else {
            newStr += str[i];
        }
    }
    return newStr;
};

const typeDef = {
    siteDetails: {
        marisailBerthId: { value: "", type: "radio", mandatory: true },
        siteDetails: { value: "", type: "radio", mandatory: true },
        termsAndConditions: { value: "", type: "radio", mandatory: true },
        type: { value: "", type: "radio", mandatory: true },
        marinaPortHarborName: { value: "", type: "radio", mandatory: true },
        location: { value: "", type: "radio", mandatory: true },
        ownership: { value: "", type: "radio", mandatory: true },
        yearEstablished: { value: "", type: "radio", mandatory: true },
        operatingHours: { value: "", type: "radio", mandatory: true },
        contactDetails: { value: "", type: "radio", mandatory: true },
        seasonalOperation: { value: "", type: "radio", mandatory: true },
        languageServices: { value: "", type: "radio", mandatory: true },
    },
    generalInformation: {
        dockTypes: { value: "", type: "radio", mandatory: true },
        numberOfDocks: { value: "", type: "radio", mandatory: true },
        boatSlipSizes: { value: "", type: "radio", mandatory: true },
        location: { value: "", type: "radio", mandatory: true },
        numberBerthsAvailable: { value: "", type: "radio", mandatory: true },
        length: { value: "", type: "radio", mandatory: true },
        beam: { value: "", type: "radio", mandatory: true },
        draft: { value: "", type: "radio", mandatory: true },
        slipWidth: { value: "", type: "radio", mandatory: true },
        slipDepth: { value: "", type: "radio", mandatory: true },
        slipLength: { value: "", type: "radio", mandatory: true },
        mooringType: { value: "", type: "radio", mandatory: true },
        tideRange: { value: "", type: "radio", mandatory: true },
    },
    amenitiesAndServices: {
        storage: { value: "", type: "radio", mandatory: false },
        electricityAvailable: { value: "", type: "radio", mandatory: true },
        waterSupply: { value: "", type: "radio", mandatory: true },
        wifiAvailability: { value: "", type: "radio", mandatory: true },
        carParking: { value: "", type: "radio", mandatory: true },
        conciergeServices: { value: "", type: "radio", mandatory: false },
        businessServices: { value: "", type: "radio", mandatory: false },
        conferenceRooms: { value: "", type: "radio", mandatory: false },
    },
    familyFacilities: {
        laundryFacilities: { value: "", type: "radio", mandatory: true },
        restaurantsAndCafes: { value: "", type: "radio", mandatory: true },
        restaurant: { value: "", type: "radio", mandatory: true },
        bar: { value: "", type: "radio", mandatory: true },
        shoppingFacilities: { value: "", type: "radio", mandatory: true },
        retailShops: { value: "", type: "radio", mandatory: true },
        hospitalityServices: { value: "", type: "radio", mandatory: true },
        recreationalFacilities: { value: "", type: "radio", mandatory: false },
        conciergeServices: { value: "", type: "radio", mandatory: false },
        clubhouseAccess: { value: "", type: "radio", mandatory: true },
        swimmingPool: { value: "", type: "radio", mandatory: true },
        fitnessCenter: { value: "", type: "radio", mandatory: true },
        marinaStore: { value: "", type: "radio", mandatory: true },
        chandlery: { value: "", type: "radio", mandatory: true },
        restroomsAndShowers: { value: "", type: "radio", mandatory: true },
        laundryServices: { value: "", type: "radio", mandatory: true },
        gymFacilities: { value: "", type: "radio", mandatory: true },
        sanitationFacilities: { value: "", type: "radio", mandatory: false },
        guestAccommodationOptions: { value: "", type: "radio", mandatory: false },
        familyFriendlyAmenities: { value: "", type: "radio", mandatory: true },
        petFriendlyServices: { value: "", type: "radio", mandatory: true },
        iceAvailability: { value: "", type: "radio", mandatory: false },
        picnicAndBBQAreas: { value: "", type: "radio", mandatory: false },
        childrensPlayArea: { value: "", type: "radio", mandatory: false },
    },
    surroundingArea: {
        localAttractions: { value: "", type: "radio", mandatory: false },
        restaurants: { value: "", type: "radio", mandatory: false },
        accommodation: { value: "", type: "radio", mandatory: false },
        shopping: { value: "", type: "radio", mandatory: false },
        transportationOptions: { value: "", type: "radio", mandatory: false },
        medicalFacilitiesNearby: { value: "", type: "radio", mandatory: false },
        localServices: { value: "", type: "radio", mandatory: false },
        communityResources: { value: "", type: "radio", mandatory: false },
    },
    additionalFeatures: {
        charterServices: { value: "", type: "radio", mandatory: false },
        yachtBrokerageServices: { value: "", type: "radio", mandatory: false },
        boatShowParticipation: { value: "", type: "radio", mandatory: false },
        loyaltyPrograms: { value: "", type: "radio", mandatory: false },
        referralPrograms: { value: "", type: "radio", mandatory: false },
        vipMembershipOptions: { value: "", type: "radio", mandatory: false },
    },
    communityAndSocial: {
        annualEvents: { value: "", type: "radio", mandatory: false },
        educationalPrograms: { value: "", type: "radio", mandatory: false },
        communityEvents: { value: "", type: "radio", mandatory: false },
        socialEvents: { value: "", type: "radio", mandatory: false },
        sportsActivities: { value: "", type: "radio", mandatory: false },
        culturalEvents: { value: "", type: "radio", mandatory: false },
        seasonalActivities: { value: "", type: "radio", mandatory: false },
        yachtClubMembership: { value: "", type: "radio", mandatory: true },
        regattasCompetitions: { value: "", type: "radio", mandatory: false },
        workshopsClasses: { value: "", type: "radio", mandatory: false },
        communityBulletinBoard: { value: "", type: "radio", mandatory: false },
        networkingEvents: { value: "", type: "radio", mandatory: false },
        memberDiscounts: { value: "", type: "radio", mandatory: false },
    },
    services: {
        pumpOutStation: { value: "", type: "radio", mandatory: false },
        docksideTrolley: { value: "", type: "radio", mandatory: true },
        powerSupply: { value: "", type: "radio", mandatory: false },
        waterSupply: { value: "", type: "radio", mandatory: false },
        shorePowerConnectionTypes: { value: "", type: "radio", mandatory: false },
        fuelTypesAvailable: { value: "", type: "radio", mandatory: true },
        fuelService: { value: "", type: "radio", mandatory: false },
        fuelDock: { value: "", type: "radio", mandatory: true },
        electricalHookupSpecifications: {
            value: "",
            type: "radio",
            mandatory: true,
        },
    },
    repairAndMaintenance: {
        boatYardServices: { value: "", type: "radio", mandatory: false },
        boatCleaningServices: { value: "", type: "radio", mandatory: false },
        boatMaintenanceRepair: { value: "", type: "radio", mandatory: false },
        chandleryServices: { value: "", type: "radio", mandatory: false },
        repairMaintenanceServices: { value: "", type: "radio", mandatory: false },
        haulOutServices: { value: "", type: "radio", mandatory: false },
        boatLiftSpecifications: { value: "", type: "radio", mandatory: true },
    },
    accessibility: {
        handicapAccessibleSlips: { value: "", type: "radio", mandatory: true },
        proximityHandicapParking: { value: "", type: "radio", mandatory: true },
        accessibleFacilities: { value: "", type: "radio", mandatory: true },
        assistanceServicesDisabled: { value: "", type: "radio", mandatory: true },
        signageDirections: { value: "", type: "radio", mandatory: true },
        accessibleRestroomsShowers: { value: "", type: "radio", mandatory: true },
        parkingFacilities: { value: "", type: "radio", mandatory: false },
        accessibilityFeatures: { value: "", type: "radio", mandatory: false },
        disabledAccessFacilities: { value: "", type: "radio", mandatory: false },
        publicTransportLinks: { value: "", type: "radio", mandatory: false },
    },
    connectivityAndTransportation: {
        shuttleServices: { value: "", type: "radio", mandatory: false },
        transportServices: { value: "", type: "radio", mandatory: false },
        transportLinks: { value: "", type: "radio", mandatory: false },
        nearbyAirports: { value: "", type: "radio", mandatory: false },
        taxiServices: { value: "", type: "radio", mandatory: true },
        bikeRentals: { value: "", type: "radio", mandatory: false },
        proximityToAttractions: { value: "", type: "radio", mandatory: false },
        carRentalServices: { value: "", type: "radio", mandatory: false },
        airportTransferServices: { value: "", type: "radio", mandatory: false },
    },
    environmentalConsiderations: {
        environmentalCertifications: { value: "", type: "radio", mandatory: false },
        wasteDisposal: { value: "", type: "radio", mandatory: true },
        wasteManagementPolicies: { value: "", type: "radio", mandatory: false },
        waterQualityMonitoring: { value: "", type: "radio", mandatory: false },
        wasteDisposalServices: { value: "", type: "radio", mandatory: false },
        waterTreatmentSystems: { value: "", type: "radio", mandatory: false },
        waterConservationMeasures: { value: "", type: "radio", mandatory: false },
        waterHookupSpecifications: { value: "", type: "radio", mandatory: true },
        recyclingPrograms: { value: "", type: "radio", mandatory: false },
        ecoFriendlyCleaningProducts: { value: "", type: "radio", mandatory: false },
        pollutionControlMeasures: { value: "", type: "radio", mandatory: false },
        wildlifeConservationEfforts: { value: "", type: "radio", mandatory: false },
        greenBuildingCertifications: { value: "", type: "radio", mandatory: false },
        energySources: { value: "", type: "radio", mandatory: false },
        marineLifeProtectionMeasures: {
            value: "",
            type: "radio",
            mandatory: false,
        },
        greenCertifications: { value: "", type: "radio", mandatory: false },
        ecoFriendlyProductsAvailability: {
            value: "",
            type: "radio",
            mandatory: false,
        },
        sewageTreatmentPlants: { value: "", type: "radio", mandatory: false },
    },
    securityAndSafety: {
        fireSafetySystems: { value: "", type: "radio", mandatory: false },
        emergencyContactInformation: { value: "", type: "radio", mandatory: false }, // Contact Details Page
        emergencyMedicalServices: { value: "", type: "radio", mandatory: false },
        emergencyEvacuationPlans: { value: "", type: "radio", mandatory: false },
        fireSafetyEquipment: { value: "", type: "radio", mandatory: true },
        firstAidKits: { value: "", type: "radio", mandatory: true },
        evacuationPlan: { value: "", type: "radio", mandatory: false },
        navigationAssistance: { value: "", type: "radio", mandatory: false },
        navigationAids: { value: "", type: "radio", mandatory: false },
        harborEntranceDepth: { value: "", type: "radio", mandatory: false },
        dockingDepths: { value: "", type: "radio", mandatory: false },
        marinaBasinDepth: { value: "", type: "radio", mandatory: false },
        waveProtectionMeasures: { value: "", type: "radio", mandatory: false },
        weatherMonitoringServices: { value: "", type: "radio", mandatory: false },
        shelterAndProtection: { value: "", type: "radio", mandatory: false },
        prevailingWinds: { value: "", type: "radio", mandatory: false },
        seaConditions: { value: "", type: "radio", mandatory: false },
        breakwaterTypes: { value: "", type: "radio", mandatory: false },
        weatherShelters: { value: "", type: "radio", mandatory: false },
        stormPreparationServices: { value: "", type: "radio", mandatory: false },
        floatingDockAvailability: { value: "", type: "radio", mandatory: false },
        safetyInspections: { value: "", type: "radio", mandatory: false },
        dockConstructionMaterial: { value: "", type: "radio", mandatory: false },
        pileAnchoringSystem: { value: "", type: "radio", mandatory: false },
        security: { value: "", type: "radio", mandatory: false },
        security24_7: { value: "", type: "radio", mandatory: true },
        cctvSurveillance: { value: "", type: "radio", mandatory: true },
        accessControlSystems: { value: "", type: "radio", mandatory: false },
        securityLighting: { value: "", type: "radio", mandatory: false },
    },
    legalAndCompliance: {
        permitsLicenses: { value: "", type: "radio", mandatory: false },
        customsImmigration: { value: "", type: "radio", mandatory: false },
        healthSafetyRegulations: { value: "", type: "radio", mandatory: false },
        environmentalRegulationsCompliance: {
            value: "",
            type: "radio",
            mandatory: false,
        },
        portStateControlInspections: { value: "", type: "radio", mandatory: false },
        quarantineServices: { value: "", type: "radio", mandatory: false },
    },
    insuranceAndRegulations: {
        insuranceRequirements: { value: "", type: "radio", mandatory: false },
        liabilityInsuranceRequirements: {
            value: "",
            type: "radio",
            mandatory: false,
        },
        proofOfOwnershipRequired: { value: "", type: "radio", mandatory: false },
        complianceWithLocalRegulations: {
            value: "",
            type: "radio",
            mandatory: false,
        },
        safetyInspections: { value: "", type: "radio", mandatory: false },
        certificateOfSeaworthiness: { value: "", type: "radio", mandatory: false },
        dockUseRegulations: { value: "", type: "radio", mandatory: false },
        environmentalComplianceCertificates: {
            value: "",
            type: "radio",
            mandatory: false,
        },
    },
    financialInformation: {
        currency: { value: "", type: "radio", mandatory: true },
        mooringFees: { value: "", type: "radio", mandatory: false },
        serviceCharges: { value: "", type: "radio", mandatory: false },
        membershipPrograms: { value: "", type: "radio", mandatory: false },
        paymentMethods: { value: "", type: "radio", mandatory: false },
        pricingStructure: { value: "", type: "radio", mandatory: false },
        depositRequirements: { value: "", type: "radio", mandatory: false },
        cancellationPolicies: { value: "", type: "radio", mandatory: false },
        discountsAvailable: { value: "", type: "radio", mandatory: false },
    },
    pricingAndLeaseTerms: {
        pricePA: { value: "", type: "radio", mandatory: true },
        pricePCM: { value: "", type: "radio", mandatory: true },
        pricePerWeek: { value: "", type: "radio", mandatory: true },
        availability: { value: "", type: "radio", mandatory: true },
        annualLeaseRenewable: { value: "", type: "radio", mandatory: true },
        cancellationPolicy: { value: "", type: "radio", mandatory: true },
        latePaymentFees: { value: "", type: "radio", mandatory: true },
        insuranceRequirements: { value: "", type: "radio", mandatory: true },
    },
    paymentTerms: {
        paymentTerms: { value: "", type: "radio", mandatory: true },
        currency: { value: "", type: "radio", mandatory: true },
        preferredPaymentMethods: { value: "", type: "radio", mandatory: true },
        invoiceAndReceiptProcedures: { value: "", type: "radio", mandatory: true },
        calculatePriceAndPay: { value: "", type: "radio", mandatory: false },
        priceLabel: { value: "", type: "radio", mandatory: false },
        priceDrop: { value: "", type: "radio", mandatory: false },
        vat: { value: "", type: "radio", mandatory: false },
        totalPrice: { value: "", type: "radio", mandatory: false },
    },
};

export default function BerthAdvert() {
    const [error, setError] = useState({});
    const hasFetched = useRef(false);
    const [openKey, setOpenKey] = useState(null);
    const [loading, setLoading] = useState(false);
    const [allSelectedOptions, setAllSelectedOptions] = useState({});
    const [siteDetails, setSiteDetails] = useState({
        marisailBerthId:"",
        siteDetails:"",
        termsAndConditions:"",
        type:"",
        marinaPortHarborName:"",
        location:"",
        ownership:"",
        yearEstablished:"",
        operatingHours:"",
        contactDetails:"",
        seasonalOperation:"",
        languageServices:""
    })
    const [generalInformation, setGeneralInformation] = useState({
        dockTypes:"",
        numberOfDocks:"",
        boatSlipSizes:"",
        location:"",
        numberBerthsAvailable:"",
        length:"",
        beam:"",
        draft:"",
        slipWidth:"",
        slipDepth:"",
        slipLength:"",
        mooringType:"",
        tideRange:""
    })
    const [amenitiesAndServices, setAmenitiesAndServices] = useState({
        storage:"",
        electricityAvailable:"",
        waterSupply:"",
        wifiAvailability:"",
        carParking:"",
        conciergeServices:"",
        businessServices:"",
        conferenceRooms:""
    })
    const [familyFacilities, setFamilyFacilities] = useState({
        laundryFacilities:"",
        restaurantsAndCafes:"",
        restaurant:"",
        bar:"",
        shoppingFacilities:"",
        retailShops:"",
        hospitalityServices:"",
        recreationalFacilities:"",
        conciergeServices:"",
        clubhouseAccess:"",
        swimmingPool:"",
        fitnessCenter:"",
        marinaStore:"",
        chandlery:"",
        restroomsAndShowers:"",
        laundryServices:"",
        gymFacilities:"",
        sanitationFacilities:"",
        guestAccommodationOptions:"",
        familyFriendlyAmenities:"",
        petFriendlyServices:"",
        iceAvailability:"",
        picnicAndBBQAreas:"",
        childrensPlayArea:""
    })
    const [surroundingArea, setSurroundingArea] = useState({
        localAttractions:"",
        restaurants:"",
        accommodation:"",
        shopping:"",
        transportationOptions:"",
        medicalFacilitiesNearby:"",
        localServices:"",
        communityResources:""
    })
    const [additionalFeatures, setAdditionalFeatures] = useState({
        charterServices:"",
        yachtBrokerageServices:"",
        boatShowParticipation:"",
        loyaltyPrograms:"",
        referralPrograms:"",
        vipMembershipOptions:""
    })
    const [communityAndSocial, setCommunityAndSocial] = useState({
        annualEvents: "",
        educationalPrograms: "",
        communityEvents: "",
        socialEvents: "",
        sportsActivities: "",
        culturalEvents: "",
        seasonalActivities: "",
        yachtClubMembership: "",
        regattasAndCompetitions: "",
        workshopsAndClasses: "",
        communityBulletinBoard: "",
        networkingEvents: "",
        memberDiscounts: "",
    });
    const [services, setServices] = useState({
        pumpOutStation: "",
        docksideTrolley: "",
        powerSupply: "",
        waterSupply: "",
        shorePowerConnectionTypes: "",
        fuelTypesAvailable: "",
        fuelService: "",
        fuelDock: "",
        electricalHookupSpecifications: "",
    });
    const [repairAndMaintenance, setRepairAndMaintenance] = useState({
        boatYardServices: "",
        boatCleaningServices: "",
        boatMaintenanceAndRepair: "",
        chandleryServices: "",
        repairAndMaintenanceServices: "",
        haulOutServices: "",
        boatLiftSpecifications: "",
    });
    const [accessibility, setAccessibility] = useState({
        handicapAccessibleSlips: "",
        proximityToHandicapParking: "",
        accessibleFacilities: "",
        assistanceServicesForDisabled: "",
        signageAndDirections: "",
        accessibleRestroomsAndShowers: "",
        parkingFacilities: "",
        accessibilityFeatures: "",
        disabledAccessFacilities: "",
        publicTransportationLinks: "",
    });
    const [connectivityAndTransportation, setConnectivityAndTransportation] =
        useState({
            shuttleServices: "",
            transportServices: "",
            transportLinks: "",
            nearbyAirports: "",
            publicTransportLinks: "",
            taxiServices: "",
            bikeRentals: "",
            proximityToNearbyAttractions: "",
            carRentalServices: "",
            airportTransferServices: "",
        });
    const [environmentalConsiderations, setEnvironmentalConsiderations] =
        useState({
            environmentalCertifications: "",
            wasteDisposal: "",
            wasteManagementPolicies: "",
            waterQualityMonitoring: "",
            wasteDisposalServices: "",
            waterTreatmentSystems: "",
            waterConservationMeasures: "",
            waterHookupSpecifications: "",
            recyclingPrograms: "",
            ecoFriendlyCleaningProducts: "",
            pollutionControlMeasures: "",
            wildlifeConservationEfforts: "",
            greenBuildingCertifications: "",
            energySources: "",
            marineLifeProtectionMeasures: "",
            greenCertifications: "",
            ecoFriendlyProductsAvailability: "",
            sewageTreatmentPlants: "",
        });
    const [securityAndSafety, setSecurityAndSafety] = useState({
        fireSafetySystems: "",
        emergencyContactInformation: "",
        emergencyMedicalServices: "",
        emergencyEvacuationPlans: "",
        fireSafetyEquipment: "",
        firstAidKits: "",
        evacuationPlan: "",
        navigationAssistance: "",
        navigationAids: "",
        pilotageServices: "",
        harborEntranceDepth: "",
        tideInformationServices: "",
        dockingDepths: "",
        marinaBasinDepth: "",
        waveProtectionMeasures: "",
        weatherMonitoringServices: "",
        shelterAndProtection: "",
        prevailingWinds: "",
        seaConditions: "",
        breakwaterTypes: "",
        weatherShelters: "",
        stormPreparationServices: "",
        floatingDockAvailability: "",
        safetyInspections: "",
        dockConstructionMaterial: "",
        pileAnchoringSystem: "",
        dockMaterial: "",
        security: "",
        securityPatrol: "",
        cctvSurveillance: "",
        accessControlSystems: "",
        securityLighting: "",
    });
    const [legalAndCompliance, setLegalAndCompliance] = useState({
        permitsAndLicenses: "",
        customsAndImmigration: "",
        healthAndSafetyRegulations: "",
        environmentalRegulationsCompliance: "",
        portStateControlInspections: "",
        quarantineServices: "",
    });
    const [insuranceAndRegulations, setInsuranceAndRegulations] = useState({
        insuranceRequirements: "",
        liabilityInsuranceRequirements: "",
        proofOfOwnershipRequired: "",
        complianceWithLocalRegulations: "",
        safetyInspections: "",
        certificateOfSeaworthiness: "",
        dockUseRegulations: "",
        environmentalComplianceCertificates: "",
    });
    const [financialInformation, setFinancialInformation] = useState({
        currency: "",
        mooringFees: "",
        serviceCharges: "",
        membershipPrograms: "",
        paymentMethods: "",
        pricingStructure: "",
        depositRequirements: "",
        cancellationPolicies: "",
        discountsAvailable: "",
    });
    const [pricingAndLeaseTerms, setPricingAndLeaseTerms] = useState({
        pricePA: "",
        pricePCM: "",
        pricePerWeek: "",
        availability: "",
        annualLeaseRenewable: "",
        cancellationPolicy: "",
        latePaymentFees: "",
        insuranceRequirements: "",
    });
    const [paymentTerms, setPaymentTerms] = useState({
        paymentTerms: "",
        currency: "",
        preferredPaymentMethods: "",
        invoiceAndReceiptProcedures: "",
        calculatePriceAndPay: "",
        priceLabel: "",
        priceDrop: "",
        vat: "",
        totalPrice: "",
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
                        // if(field.value){
                        //   console.log("001 field value--",field);
                        // }
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
        siteDetails,
        communityAndSocial,
        environmentalConsiderations,//
        generalInformation,
        amenitiesAndServices,
        surroundingArea,
        securityAndSafety,
        familyFacilities,
        services,
        financialInformation,
        additionalFeatures,
        repairAndMaintenance,
        accessibility,
        legalAndCompliance,
        connectivityAndTransportation,
        insuranceAndRegulations,
        pricingAndLeaseTerms,
        paymentTerms,
    };

    const setStateFunctions = {
        siteDetails: setSiteDetails,
        generalInformation: setGeneralInformation,
        amenitiesAndServices: setAmenitiesAndServices,
        communityAndSocial: setCommunityAndSocial,
        familyFacilities: setFamilyFacilities,
        additionalFeatures: setAdditionalFeatures,
        surroundingArea: setSurroundingArea,
        services: setServices,
        repairAndMaintenance: setRepairAndMaintenance,
        accessibility: setAccessibility,
        connectivityAndTransportation: setConnectivityAndTransportation,
        environmentalConsiderations: setEnvironmentalConsiderations,
        securityAndSafety: setSecurityAndSafety,
        legalAndCompliance: setLegalAndCompliance,
        insuranceAndRegulations: setInsuranceAndRegulations,
        financialInformation: setFinancialInformation,
        pricingAndLeaseTerms: setPricingAndLeaseTerms,
        paymentTerms: setPaymentTerms,
    };

    const handleOptionSelect = (category, field, selectedOption) => {
        console.log("001 relevant data selected otpions--", selectedOption);
        console.log("001 relevant data all otpions--", allSelectedOptions);
        setAllSelectedOptions((prevState) => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [field]: selectedOption,
            },
        }));

        if (
            category === "identification" &&
            (field === "trailerId" || field === "manufacturer" || field === "make")
        ) {
            fetchIdentificationSectionOptions(category, selectedOption, field);
        }

        if (category === "identification" && field === "model") {
            console.log("001 relevant data all otpions after--", allSelectedOptions);
            fetchRelevantOptions();
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (checkRequired()) {
                console.log("001 Form is valid, submitting...");
                // localStorage.setItem("advertise_engine", JSON.stringify(form));
            } else {
                console.warn(error);
            }
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
            console.error(`No setState function found for key: ${key}`);
        }
    }

    const cacheKey = "berthsFilterData";
    const URL = "http://localhost:3001/api/advert_berth/";

    const fetchDistinctData = async () => {
        try {
            setLoading(true);
            const promises = Object.keys(sections).map(async (key) => {
                const response = await fetch(`${URL}berths`, {
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
        }
    };
    const fetchRelevantOptions = async () => {
        try {
            setLoading(true);
            // console.log("001 relevant data all otpions--",allSelectedOptions);
            const response = await fetch(`${URL}relevant_data`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ allSelectedOptions }),
            });
            const data = await response.json();
            const result = data?.result;
            Object.keys(result).forEach((fieldKey) => {
                Object.keys(sections).forEach((sectionKey) => {
                    if (sections[sectionKey][fieldKey] !== undefined) {
                        const fieldValue =
                            Array.isArray(result[fieldKey]) && result[fieldKey].length > 0
                                ? result[fieldKey]?.[0]
                                : sections[sectionKey][fieldKey];
                        setAllSelectedOptions((prevState) => ({
                            ...prevState,
                            [sectionKey]: {
                                ...prevState[sectionKey],
                                [fieldKey]: [fieldValue],
                            },
                        }));
                    }
                });
            });
        } catch (error) {
            console.error("Error fetching other section:", error);
        } finally {
            setLoading(false);
            console.log("001 relevant data all otpions after--", allSelectedOptions);
        }
    };
    const fetchIdentificationSectionOptions = async (
        category,
        selectedOption,
        Key
    ) => {
        try {
            setLoading(true);
            const tableName = "berths_ID";
            let fetchColumn;
            let requestBody = {};

            if (Key === "trailerId") {
                fetchColumn = "manufacturer";
                requestBody = { trailerId: selectedOption };
            } else if (Key === "manufacturer") {
                fetchColumn = "make";
                requestBody = {
                    trailerId: allSelectedOptions[category]?.trailerId,
                    manufacturer: selectedOption,
                };
            } else if (Key === "make") {
                fetchColumn = "model";
                requestBody = {
                    trailerId: allSelectedOptions[category]?.trailerId,
                    manufacturer: allSelectedOptions[category]?.manufacturer,
                    make: selectedOption,
                };
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
            console.error("Error fetching manufacturers:", error);
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

    const errorDisplay = (fieldName) => {
        return <div style={{ color: "red" }}>{fieldName} field is required</div>;
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
                                    <h6 style={{ padding: "15px 0px 0px 0px" }}>
                                        {makeString(title)}
                                    </h6>
                                </legend>
                                {Object.keys(sections[title]).map((fieldKey) => {
                                    const field = typeDef[title][fieldKey];
                                    if (field && field.type === "radio") {
                                        return (
                                            <Col
                                                md={12}
                                                className="mt-4 mr-3"
                                                key={fieldKey}
                                                style={{ width: 480 }}
                                            >
                                                <Col xs={3} md={12} className="mb-2">
                                                    <DropdownWithRadio
                                                        heading={fieldKey}
                                                        title={makeString(fieldKey)}
                                                        options={sections[title][fieldKey]}
                                                        selectedOption={
                                                            allSelectedOptions[title]?.[fieldKey] || ""
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
                                                        <div>{errorDisplay(makeString(fieldKey))}</div>
                                                    )}
                                                </Col>
                                            </Col>
                                        );
                                    }
                                    return null;
                                })}
                            </Col>
                        ))}
                    </Row>
                    {/* <div className="d-flex justify-content-center p-4 pt-5">
                        <button
                            type="submit"
                            className="btn btn-success p-3"
                            style={{
                                backgroundColor: "#971e28",
                                color: "#fff",
                                padding: "8px 32px",
                                border: "0px none",
                                borderRadius: 30,
                                textTransform: "uppercase",
                                marginBottom: 8,
                                width: "50%",
                                cursor: "pointer",
                                transition: "all .5s ease",
                            }}
                            name="advert_berth-submit"
                            id="advert_berth-submit"
                        >
                            Submit
                        </button>
                    </div> */}
                    <SubmitButton text="Submit" name="advert_berth_submit" onClick={handleSubmit} />
                </Form>
            )}
        </Container>
    );
}
