import { Form, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import DropdownWithRadio from "../DropdownWithRadio";
import Loader from "../Loader";
import InputComponentDynamic from "../InputComponentDynamic";
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
  identification: {
    trailerId: { value: "", type: "radio", mandatory: true },
    manufacturer: { value: "", type: "radio", mandatory: true },
    make: { value: "", type: "radio", mandatory: true },
    model: { value: "", type: "radio", mandatory: true },
    year: { value: "", type: "radio", mandatory: true },
    askingPrice: { value: "", type: "radio", mandatory: true },
  },
  basics: {
    type: { value: "", type: "radio", mandatory: true },
    gvwr: { value: "", type: "radio", mandatory: true },
    loadCapacity: { value: "", type: "radio", mandatory: true },
    length: { value: "", type: "radio", mandatory: true },
    width: { value: "", type: "radio", mandatory: true },
    totalHeight: { value: "", type: "radio", mandatory: true },
    axleHeightFromGround: { value: "", type: "radio", mandatory: true },
  },
  constructionMaterials: {
    frameMaterial: { value: "", type: "radio", mandatory: true },
    frameCoating: { value: "", type: "radio", mandatory: true },
    frameCrossmemberType: { value: "", type: "radio", mandatory: true },
    frameWeldType: { value: "", type: "radio", mandatory: false },
    maximumAngleOfApproach: { value: "", type: "radio", mandatory: false },
    floorMaterial: { value: "", type: "radio", mandatory: true },
    sidesMaterial: { value: "", type: "radio", mandatory: true },
    roofMaterial: { value: "", type: "radio", mandatory: true },
  },
  maintenanceFeatures: {
    greasePoints: { value: "", type: "radio", mandatory: false },
    bearingType: { value: "", type: "radio", mandatory: false },
    maintenanceSchedule: { value: "", type: "radio", mandatory: false },
  },
  userFeatures: {
    storage: { value: "", type: "radio", mandatory: false },
    tieDownPoints: { value: "", type: "radio", mandatory: true },
    toolBox: { value: "", type: "radio", mandatory: false },
    bumperType: { value: "", type: "radio", mandatory: false },
  },
  specialFeatures: {
    hydraulicTilt: { value: "", type: "radio", mandatory: true },
    extendableTongue: { value: "", type: "radio", mandatory: true },
    adjustableDeckHeight: { value: "", type: "radio", mandatory: false },
    detachableSidePanels: { value: "", type: "radio", mandatory: false },
  },
  additionalAccessories: {
    rampType: { value: "", type: "radio", mandatory: true },
    winchPost: { value: "", type: "radio", mandatory: true },
    splashGuards: { value: "", type: "radio", mandatory: true },
    fenders: { value: "", type: "radio", mandatory: true },
    sideRails: { value: "", type: "radio", mandatory: true },
  },
  customizationOptions: {
    color: { value: "", type: "radio", mandatory: true },
    decals: { value: "", type: "radio", mandatory: false },
    storageBox: { value: "", type: "radio", mandatory: false },
    lightingPackage: { value: "", type: "radio", mandatory: false },
    suspensionUpgrade: { value: "", type: "radio", mandatory: false },
  },
  axlesAndSuspension: {
    axleType: { value: "", type: "radio", mandatory: true },
    axleCapacity: { value: "", type: "radio", mandatory: true },
    axleSealType: { value: "", type: "radio", mandatory: false },
    axleHubSize: { value: "", type: "radio", mandatory: true },
    axlePosition: { value: "", type: "radio", mandatory: true },
    dropAxleOption: { value: "", type: "radio", mandatory: false },
    suspensionType: { value: "", type: "radio", mandatory: true },
    suspensionCapacity: { value: "", type: "radio", mandatory: true },
    suspensionAdjustment: { value: "", type: "radio", mandatory: true },
  },
  tyresAndWheels: {
    tyreSize: { value: "", type: "radio", mandatory: true },
    tyreLoadRange: { value: "", type: "radio", mandatory: true },
    tyreType: { value: "", type: "radio", mandatory: true },
    wheelType: { value: "", type: "radio", mandatory: true },
    wheelBoltPattern: { value: "", type: "radio", mandatory: false },
    hubLubricationSystem: { value: "", type: "radio", mandatory: false },
  },
  brakes: {
    brakeType: { value: "", type: "radio", mandatory: false },
    brakeActuator: { value: "", type: "radio", mandatory: false },
    brakeLineMaterial: { value: "", type: "radio", mandatory: true },
    brakeDrumDiameter: { value: "", type: "radio", mandatory: true },
    brakeFluidType: { value: "", type: "radio", mandatory: true },
    brakes: { value: "", type: "radio", mandatory: true },
    couplerSize: { value: "", type: "radio", mandatory: false },
    couplerType: { value: "", type: "radio", mandatory: true },
    couplerLockType: { value: "", type: "radio", mandatory: true },
    hitchClass: { value: "", type: "radio", mandatory: true },
    hitchReceiverSize: { value: "", type: "radio", mandatory: false },
    safetyChains: { value: "", type: "radio", mandatory: true },
    breakawaySystem: { value: "", type: "radio", mandatory: true },
  },
  winchAndWrinchAccessories: {
    winchType: { value: "", type: "radio", mandatory: true },
    winchCapacity: { value: "", type: "radio", mandatory: true },
    winchRopeLength: { value: "", type: "radio", mandatory: true },
    winchDrumMaterial: { value: "", type: "radio", mandatory: false },
    winchGearRatio: { value: "", type: "radio", mandatory: false },
    winchRemoteControl: { value: "", type: "radio", mandatory: false },
    winchBrakeType: { value: "", type: "radio", mandatory: false },
    winchCableType: { value: "", type: "radio", mandatory: false },
    winchStrapLength: { value: "", type: "radio", mandatory: false },
    winchHandleLength: { value: "", type: "radio", mandatory: false },
    winchMounting: { value: "", type: "radio", mandatory: false },
  },
  lightingAndElectrical: {
    lighting: { value: "", type: "radio", mandatory: true },
    lightMountingPosition: { value: "", type: "radio", mandatory: false },
    lightType: { value: "", type: "radio", mandatory: true },
    electricalConnectorType: { value: "", type: "radio", mandatory: true },
    electricalWiringType: { value: "", type: "radio", mandatory: true },
    batteryType: { value: "", type: "radio", mandatory: true },
    batteryChargerType: { value: "", type: "radio", mandatory: true },
  },
  acessories: {
    spareTyreCarrier: { value: "", type: "radio", mandatory: true },
    spareTyreSize: { value: "", type: "radio", mandatory: true },
    spareTyreMountingLocation: { value: "", type: "radio", mandatory: false },
    jackType: { value: "", type: "radio", mandatory: false },
    jackWheelType: { value: "", type: "radio", mandatory: false },
    jackCapacity: { value: "", type: "radio", mandatory: true },
    jackLiftHeight: { value: "", type: "radio", mandatory: false },
  },
  loadingAndTransportFeatures: {
    loadingSystem: { value: "", type: "radio", mandatory: true },
    bunks: { value: "", type: "radio", mandatory: false },
    bunkMaterial: { value: "", type: "radio", mandatory: false },
    bunkWidth: { value: "", type: "radio", mandatory: false },
    bunkHeightAdjustment: { value: "", type: "radio", mandatory: false },
    bunkMountingBracketMaterial: { value: "", type: "radio", mandatory: false },
    rollers: { value: "", type: "radio", mandatory: false },
    rollerMaterial: { value: "", type: "radio", mandatory: false },
    rollerAxleDiameter: { value: "", type: "radio", mandatory: false },
  },
  securityFeatures: {
    wheelLocks: { value: "", type: "radio", mandatory: true },
    lockType: { value: "", type: "radio", mandatory: true },
    alarmSystem: { value: "", type: "radio", mandatory: true },
    gpsTrackingDevice: { value: "", type: "radio", mandatory: true },
  },
  environmentalAndCorrosionResistance: {
    corrosionProtection: { value: "", type: "radio", mandatory: true },
    rustInhibitors: { value: "", type: "radio", mandatory: false },
  },
  performanceAndHandling: {
    maximumSpeedRating: { value: "", type: "radio", mandatory: true },
    turningRadius: { value: "", type: "radio", mandatory: true },
  },
  tongue: {
    tongueMaterial: { value: "", type: "radio", mandatory: false },
    tongueShape: { value: "", type: "radio", mandatory: false },
    tongueJackWheelSize: { value: "", type: "radio", mandatory: true },
    tongueJackType: { value: "", type: "radio", mandatory: false },
    tongueWeight: { value: "", type: "radio", mandatory: true },
    tongueWeightRatio: { value: "", type: "radio", mandatory: false },
  },
  documentation: {
    ownerManual: { value: "", type: "radio", mandatory: false },
    warranty: { value: "", type: "radio", mandatory: false },
  },
  regulatoryCompliance: {
    dotCompliance: { value: "", type: "radio", mandatory: false },
    natmCertification: { value: "", type: "radio", mandatory: false },
    euTypeApproval: { value: "", type: "radio", mandatory: false },
    adrCompliance: { value: "", type: "radio", mandatory: false },
  },
  paymentTerms: {
    paymentTerms: { value: "", type: "radio", mandatory: false },
    currency: { value: "", type: "radio", mandatory: false },
    preferredPaymentMethod: { value: "", type: "radio", mandatory: false },
    invoiceAndRecieptProcedures: { value: "", type: "radio", mandatory: false },
    calculatePriceAndPay: { value: "", type: "radio", mandatory: false },
    priceLabel: { value: "", type: "radio", mandatory: false },
    priceDrop: { value: "", type: "radio", mandatory: false },
    VAT: { value: "", type: "radio", mandatory: false },
    totalPrice: { value: "", type: "radio", mandatory: false },
    country: { value: "", type: "radio", mandatory: false },
    globalAddressLookup: { value: "", type: "radio", mandatory: false },
    distance: { value: "", type: "radio", mandatory: false },
    contactDetails: { value: "", type: "radio", mandatory: false },
    uploadPhotos: { value: "", type: "radio", mandatory: false },
    uploadVideos: { value: "", type: "radio", mandatory: false },
  },
};

export default function TrailersAdvert() {
  const [error, setError] = useState({});
  const hasFetched = useRef(false);
  const [trailers, setTrailers] = useState("");
  const [openKey, setOpenKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allSelectedOptions, setAllSelectedOptions] = useState({});
  const [identification, setIdentification] = useState({
    trailerId: "",
    manufacturer: "",
    make: "",
    model: "",
    year: "",
    askingPrice: "",
  });
  const [basics, setBasics] = useState({
    type: "",
    grossVehicleWeightRating: "",
    loadCapacity: "",
    length: "",
    width: "",
    totalHeight: "",
    axleHeightFromGround: "",
  });
  const [constructionMaterials, setConstructionMaterials] = useState({
    frameMaterial: "",
    frameCoating: "",
    frameCrossmemberType: "",
    frameWeldType: "",
    maximumAngleOfApproach: "",
    floorMaterial: "",
    sidesMaterial: "",
    roofMaterial: "",
  });
  const [maintenanceFeatures, setMaintenanceFeatures] = useState({
    greasePoints: "", //
    bearingType: "",
    maintenanceSchedule: "", //
  });
  const [userFeatures, setUserFeatures] = useState({
    storage: "",
    tieDownPoints: "",
    toolBox: "",
    bumperType: "",
    userFeatures: "",
  });
  const [specialFeatures, setSpecialFeatures] = useState({
    hydraulicTilt: "", //
    extendableTongue: "", //
    adjustableDeckHeight: "",
    detachableSidePanels: "", //
  });
  const [additionalAccessories, setAdditionalAccessories] = useState({
    rampType: "",
    winchPost: "",
    splashGuards: "",
    fenders: "",
    sideRails: "",
  });
  const [customizationOptions, setCustomizationOptions] = useState({
    color: "",
    decals: "", //
    storageBox: "", //
    lightingPackage: "", //
    suspensionUpgrade: "", //
  });
  const [axlesAndSuspension, setAxlesAndSuspension] = useState({
    axleType: "",
    axleCapacity: "",
    axleSealType: "",
    axleHubSize: "",
    axlePosition: "", //
    dropAxleOption: "", //
    suspensionType: "",
    suspensionCapacity: "",
    suspensionAdjustment: "",
  });
  const [tyresAndWheels, setTyresAndWheels] = useState({
    tyreSize: "",
    tyreLoadRange: "",
    tyreType: "",
    wheelType: "",
    wheelBoltPattern: "", //
    hubLubricationSystem: "", //
  });
  const [brakes, setBrakes] = useState({
    brakeType: "",
    brakeActuator: "",
    brakeLineMaterial: "",
    brakeDrumDiameter: "",
    brakeFluidType: "",
    brakes: "",
    couplerSize: "",
    couplerType: "",
    couplerLockType: "",
    hitchClass: "",
    hitchReceiverSize: "",
    safetyChains: "",
    breakawaySystem: "",
  });
  const [winchAndWrinchAccessories, setWinchAndWrinchAccessories] = useState({
    winchType: "",
    winchCapacity: "",
    winchRopeLength: "",
    winchDrumMaterial: "",
    winchGearRatio: "",
    winchRemoteControl: "",
    winchBrakeType: "",
    winchCableType: "",
    winchStrapLength: "",
    winchHandleLength: "",
    winchMounting: "",
  });
  const [lightingAndElectrical, setLightingAndElectrical] = useState({
    lighting: "",
    lightMountingPosition: "",
    lightType: "",
    electricalConnectorType: "",
    electricalWiringType: "",
    batteryType: "",
    batteryChargerType: "",
  });
  const [acessories, setAcessories] = useState({
    spareTyreCarrier: "",
    spareTyreSize: "",
    spareTyreMountingLocation: "",
    jackType: "",
    jackWheelType: "",
    jackCapacity: "",
    jackLiftHeight: "",
  });
  const [loadingAndTransportFeatures, setLoadingAndTransportFeatures] =
    useState({
      loadingSystem: "",
      bunks: "",
      bunkMaterial: "",
      bunkWidth: "",
      bunkHeightAdjustment: "",
      bunkMountingBracketMaterial: "",
      rollers: "",
      rollerMaterial: "",
      rollerAxleDiameter: "",
    });
  const [securityFeatures, setSecurityFeatures] = useState({
    wheelLocks: "",
    lockType: "",
    alarmSystem: "",
    gpsTrackingDevice: "",
  });
  const [
    environmentalAndCorrosionResistance,
    setEnvironmentalAndCorrosionResistance,
  ] = useState({
    corrosionProtection: "",
    rustInhibitors: "",
  });
  const [performanceAndHandling, setPerformanceAndHandling] = useState({
    maximumSpeedRating: "",
    turningRadius: "",
  });
  const [tongue, setTongue] = useState({
    tongueMaterial: "",
    tongueShape: "",
    tongueJackWheelSize: "",
    tongueJackType: "",
    tongueWeight: "",
    tongueWeightRatio: "",
  });
  const [documentation, setDocumentation] = useState({
    ownerManual: "",
    warranty: "",
  });
  const [regulatoryCompliance, setRegulatoryCompliance] = useState({
    dotCompliance: "",
    natmCertification: "",
    euTypeApproval: "",
    adrCompliance: "",
  });
  const [paymentTerms, setPaymentTerms] = useState({
    paymentTerms: "",
    currency: "",
    preferredPaymentMethod: "",
    invoiceAndRecieptProcedures: "",
    calculatePriceAndPay: "",
    priceLabel: "",
    priceDrop: "",
    VAT: "",
    totalPrice: "",
    country: "",
    globalAddressLookup: "",
    distance: "",
    contactDetails: "",
    uploadPhotos: "",
    uploadVideos: "",
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
            if (fieldValue === undefined || fieldValue === "" || isNaN(fieldValue)) {
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
    identification,
    specialFeatures,
    constructionMaterials,
    basics,
    userFeatures,
    securityFeatures,
    additionalAccessories,
    customizationOptions,
    axlesAndSuspension,
    loadingAndTransportFeatures,
    brakes,
    winchAndWrinchAccessories,
    lightingAndElectrical,
    acessories,
    performanceAndHandling,
    documentation,
    tyresAndWheels,
    tongue,
    regulatoryCompliance,
    maintenanceFeatures,
    paymentTerms,
    environmentalAndCorrosionResistance,
  };

  const setStateFunctions = {
    identification: setIdentification,
    basics: setBasics,
    constructionMaterials: setConstructionMaterials,
    maintenanceFeatures: setMaintenanceFeatures,
    userFeatures: setUserFeatures,
    specialFeatures: setSpecialFeatures,
    additionalAccessories: setAdditionalAccessories,
    customizationOptions: setCustomizationOptions,
    axlesAndSuspension: setAxlesAndSuspension,
    tyresAndWheels: setTyresAndWheels,
    brakes: setBrakes,
    winchAndWrinchAccessories: setWinchAndWrinchAccessories,
    lightingAndElectrical: setLightingAndElectrical,
    acessories: setAcessories,
    loadingAndTransportFeatures: setLoadingAndTransportFeatures,
    securityFeatures: setSecurityFeatures,
    environmentalAndCorrosionResistance: setEnvironmentalAndCorrosionResistance,
    performanceAndHandling: setPerformanceAndHandling,
    tongue: setTongue,
    documentation: setDocumentation,
    regulatoryCompliance: setRegulatoryCompliance,
    paymentTerms: setPaymentTerms,
  };

  const handleOptionSelect = (category, field, selectedOption) => {
    console.log("001 relevant data selected otpions--",selectedOption);
    console.log("001 relevant data all otpions--",allSelectedOptions);
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
      console.log("001 relevant data all otpions after--",allSelectedOptions);
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
  const URL = "http://localhost:3001/api/trailers/";

  const fetchDistinctData = async () => {
    try {
      setLoading(true);
      const promises = Object.keys(sections).map(async (key) => {
        const response = await fetch(`${URL}trailers`, {
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
            const fieldValue = Array.isArray(result[fieldKey]) && result[fieldKey].length > 0
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
      console.log("001 relevant data all otpions after--",allSelectedOptions);
    }
  };
  const fetchIdentificationSectionOptions = async (
    category,
    selectedOption,
    Key
  ) => {
    try {
      setLoading(true);
      const tableName = "Trailers_ID";
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

  const handleInputChange = (title, fieldKey, newValue) => {
    setTrailers((prevTrailers) => ({
      ...prevTrailers,
      [title]: {
        ...prevTrailers[title],
        [fieldKey]: newValue,
      },
    }));
  };

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
                      <Col md={12} className="mt-4 mr-3" key={fieldKey} style={{ width: 480 }}>
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
                            <div>
                              {errorDisplay(makeString(fieldKey))}
                            </div>
                          )}
                        </Col>
                      </Col>
                    );
                  } else if (field && field.type === "number") {
                    return (
                      <Col md={12} className="mt-4 mr-3" key={fieldKey} style={{ width: 480 }}>
                        <InputComponentDynamic
                          label={makeString(fieldKey)}
                          value={trailers[title]?.[fieldKey] || ""}
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
                            {errorDisplay(makeString(fieldKey))}
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
          <SubmitButton text="Submit" name="advert_trailer_submit" onClick={handleSubmit} />
        </Form>
      )}
    </Container>
  );
}
