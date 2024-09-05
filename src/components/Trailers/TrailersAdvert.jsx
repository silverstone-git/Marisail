import { Form, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import DropdownWithRadio from "../DropdownWithRadio";
import Loader from "../Loader";
import "./trailersAdvert.module.scss";
import InputComponent from "../InputComponent";

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
  // console.log(newStr);
  return newStr;
};

const typeDef = {
  identification: {
    marisailTrailerId:  { value: "", type: "radio" },
    manufacturer: { value: "", type: "radio" },
    make: { value: "", type: "radio" },
    model: { value: "", type: "radio" },
    year: { value: "", type: "number" },
    askingPrice: { value: "", type: "number" },
  },
  basics: {
    type: { value: "", type: "radio" },
    gvwr: { value: "", type: "number" },
    loadCapacity: { value: "", type: "number" },
    length: { value: "", type: "number" },
    width: { value: "", type: "number" },
    totalHeight: { value: "", type: "number" },
    axleHeightFromGround: { value: "", type: "number" },
  },
  constructionMaterials: {
    frameMaterial: { value: "", type: "radio" },
    frameCoating: { value: "", type: "radio" },
    frameCrossmemberType: { value: "", type: "radio" },
    frameWeldType: { value: "", type: "radio" },
    maximumAngleOfApproach: { value: "", type: "radio" },
    floorMaterial: { value: "", type: "radio" },
    sidesMaterial: { value: "", type: "radio" },
    roofMaterial: { value: "", type: "radio" },
  },
  maintenanceFeatures: {
    greasePoints: { value: "", type: "radio" },
    bearingType: { value: "", type: "radio" },
    maintenanceSchedule: { value: "", type: "radio" },
  },
  userFeatures: {
    storage: { value: "", type: "radio" },
    tieDownPoints: { value: "", type: "radio" },
    toolBox: { value: "", type: "radio" },
    bumperType: { value: "", type: "radio" },
  },
  specialFeatures: {
    hydraulicTilt: { value: "", type: "radio" },
    extendableTongue: { value: "", type: "radio" },
    adjustableDeckHeight: { value: "", type: "radio" },
    detachableSidePanels: { value: "", type: "radio" },
  },
  additionalAccessories: {
    rampType: { value: "", type: "radio" },
    winchPost: { value: "", type: "radio" },
    splashGuards: { value: "", type: "radio" },
    fenders: { value: "", type: "radio" },
    sideRails: { value: "", type: "radio" },
  },
  customizationOptions: {
    color: { value: "", type: "radio" },
    decals: { value: "", type: "radio" },
    storageBox: { value: "", type: "radio" },
    lightingPackage: { value: "", type: "radio" },
    suspensionUpgrade: { value: "", type: "radio" },
  },
  axlesAndSuspension: {
    axleType: { value: "", type: "radio" },
    axleCapacity: { value: "", type: "radio" },
    axleSealType: { value: "", type: "radio" },
    axleHubSize: { value: "", type: "radio" },
    axlePosition: { value: "", type: "radio" },
    dropAxleOption: { value: "", type: "radio" },
    suspensionType: { value: "", type: "radio" },
    suspensionCapacity: { value: "", type: "number" },
    suspensionAdjustment: { value: "", type: "radio" },
  },
  tyresAndWheels: {
    tyreSize: { value: "", type: "radio" },
    tyreLoadRange: { value: "", type: "radio" },
    tyreType: { value: "", type: "radio" },
    wheelType: { value: "", type: "radio" },
    wheelBoltPattern: { value: "", type: "radio" },
    hubLubricationSystem: { value: "", type: "radio" },
  },
  brakes: {
    brakeType: { value: "", type: "radio" },
    brakeActuator: { value: "", type: "radio" },
    brakeLineMaterial: { value: "", type: "radio" },
    brakeDrumDiameter: { value: "", type: "radio" },
    brakeFluidType: { value: "", type: "radio" },
    brakes: { value: "", type: "radio" },
    couplerSize: { value: "", type: "radio" },
    couplerType: { value: "", type: "radio" },
    couplerLockType: { value: "", type: "radio" },
    hitchClass: { value: "", type: "radio" },
    hitchReceiverSize: { value: "", type: "radio" },
    safetyChains: { value: "", type: "radio" },
    breakawaySystem: { value: "", type: "radio" },
  },
  winchAndWrinchAccessories: {
    winchType: { value: "", type: "radio" },
    winchCapacity: { value: "", type: "number" },
    winchRopeLength: { value: "", type: "radio" },
    winchDrumMaterial: { value: "", type: "radio" },
    winchGearRatio: { value: "", type: "radio" },
    winchRemoteControl: { value: "", type: "radio" },
    winchBrakeType: { value: "", type: "radio" },
    winchCableType: { value: "", type: "radio" },
    winchStrapLength: { value: "", type: "radio" },
    winchHandleLength: { value: "", type: "radio" },
    winchMounting: { value: "", type: "radio" },
  },
  lightingAndElectrical: {
    lighting: { value: "", type: "radio" },
    lightMountingPosition: { value: "", type: "radio" },
    lightType: { value: "", type: "radio" },
    electricalConnectorType: { value: "", type: "radio" },
    electricalWiringType: { value: "", type: "radio" },
    batteryType: { value: "", type: "radio" },
    batteryChargerType: { value: "", type: "radio" },
  },
  acessories: {
    spareTyreCarrier: { value: "", type: "radio" },
    spareTyreSize: { value: "", type: "radio" },
    spareTyreMountingLocation: { value: "", type: "radio" },
    jackType: { value: "", type: "radio" },
    jackWheelType: { value: "", type: "radio" },
    jackCapacity: { value: "", type: "radio" },
    jackLiftHeight: { value: "", type: "radio" },
  },
  loadingAndTransportFeatures: {
    loadingSystem: { value: "", type: "radio" },
    bunks: { value: "", type: "radio" },
    bunkMaterial: { value: "", type: "radio" },
    bunkWidth: { value: "", type: "radio" },
    bunkHeightAdjustment: { value: "", type: "radio" },
    bunkMountingBracketMaterial: { value: "", type: "radio" },
    rollers: { value: "", type: "radio" },
    rollerMaterial: { value: "", type: "radio" },
    rollerAxleDiameter: { value: "", type: "radio" },
  },
  securityFeatures: {
    wheelLocks: { value: "", type: "radio" },
    lockType: { value: "", type: "radio" },
    alarmSystem: { value: "", type: "radio" },
    gpsTrackingDevice: { value: "", type: "radio" },
  },
  environmentalAndCorrosionResistance: {
    corrosionProtection: { value: "", type: "radio" },
    rustInhibitors: { value: "", type: "radio" },
  },
  performanceAndHandling: {
    maximumSpeedRating: { value: "", type: "radio" },
    turningRadius: { value: "", type: "radio" },
  },
  tongue: {
    tongueMaterial: { value: "", type: "radio" },
    tongueShape: { value: "", type: "radio" },
    tongueJackWheelSize: { value: "", type: "radio" },
    tongueJackType: { value: "", type: "radio" },
    tongueWeight: { value: "", type: "radio" },
    tongueWeightRatio: { value: "", type: "radio" },
  },
  documentation: {
    ownerManual: { value: "", type: "radio" },
    warranty: { value: "", type: "radio" },
  },
  regulatoryCompliance: {
    dotCompliance: { value: "", type: "radio" },
    natmCertification: { value: "", type: "radio" },
    euTypeApproval: { value: "", type: "radio" },
    adrCompliance: { value: "", type: "radio" },
  },
  paymentTerms: {
    paymentTerms: { value: "", type: "radio" },
    currency: { value: "", type: "radio" },
    preferredPaymentMethod: { value: "", type: "radio" },
    invoiceAndRecieptProcedures: { value: "", type: "radio" },
    calculatePriceAndPay: { value: "", type: "radio" },
    priceLabel: { value: "", type: "radio" },
    priceDrop: { value: "", type: "radio" },
    VAT: { value: "", type: "radio" },
    totalPrice: { value: "", type: "radio" },
    country: { value: "", type: "radio" },
    globalAddressLookup: { value: "", type: "radio" },
    distance: { value: "", type: "radio" },
    contactDetails: { value: "", type: "radio" },
    uploadPhotos: { value: "", type: "radio" },
    uploadVideos: { value: "", type: "radio" },
  },
};

export default function TrailersAdvert() {
  const handleOptionSelect = (category, field, selectedOption) => {
    setAllSelectedOptions((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: selectedOption,
      },
    }));
  };
  const [openKey, setOpenKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allSelectedOptions, setAllSelectedOptions] = useState({});
  const [identification, setIdentification] = useState({
    marisailTrailerId: "",
    manufacturer: "",
    make: "",
    model: "",
    year: "",
    askingPrice:""
  });
  const [basics, setBasics] = useState({
    type: "",
    grossVehicleWeightRating: "", //
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
    maximumAngleOfApproach: "", //
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
    storage: "", //
    tieDownPoints: "",
    toolBox: "", //
    bumperType: "",
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

  const filters = {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // if (checkRequired()) {
        // If no errors, proceed with form submission logic
        // console.log("001 Form is valid, submitting...", form);
        // localStorage.setItem("advertise_engine", JSON.stringify(form));
      // } else {
      //   console.log("001 Form has errors, not submitting.", error);
      // }
    } catch (error) {
      console.log(error);
    }
  };
  function setFilters(key, data) {
    const setStateFunction = setStateFunctions[key];
    console.log("001 Key---",key);
    console.log("001 Data---",data);
    if (setStateFunction) {
      setStateFunction(data);
    } else {
      console.error(`No setState function found for key: ${key}`);
    }
    console.log("001 Data fetched from API---", filters);
  }

  const cacheKey = "trailersFilterData";
  const URL = "http://localhost:3001/api/search_trailer/";

  // fetch all the count of the available columns
  var data;
  const fetchFilterData = async () => {
    for (const key of Object.keys(filters)) {
      console.log(typeDef[key]);
      try {
        const response = await fetch(`${URL}trailers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filters[key]),
        });

        data = await response.json();
        // console.log(data.res);
        setFilters(key, data.res);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("done");
      }
    }
    console.log("Data fetched from API", filters);
  };

  useEffect(() => {
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      setFilters(JSON.parse(cachedData));
      console.log("001 Data fetched from cache---", JSON.parse(cachedData));
    } else {
      // Fetch data if not cached
      fetchFilterData();
    }
    console.log("001 Filters---",filters);
  }, "");

  const [trailers, setTrailers] = useState("");
  useEffect(() => {
    setLoading(true);
    let currInfo = {
      selectedOptions: allSelectedOptions
    };
    const fetchTrailerData = async () => {
      try {
        const response = await fetch(`${URL}trailersData`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currInfo),
        });
        const data = await response.json();
        // console.log("001 Data---->",data);
        setTrailers(data.res[0]);
        console.log("001 trailers", trailers); 
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
        console.log("done");
      }
    };

    fetchTrailerData();
  }, [allSelectedOptions]);

  const handleInputChange = (title, fieldKey, newValue) => {
    setTrailers((prevTrailers) => ({
      ...prevTrailers,
      [title]: {
        ...prevTrailers[title],
        [fieldKey]: newValue,
      },
    }));
  };

  return (
    <Container className="mb-5">
      <Form>
        <Row>
          {Object.keys(filters).map((title) => (
            <Col md={6} key={title} className="mt-2">
              <legend className="fieldset-legend">
                <h6 style={{ padding: "15px 0px 0px 0px" }}>{makeString(title)}</h6>
              </legend>
              {Object.keys(filters[title]).map((fieldKey) => {
                const field = typeDef[title][fieldKey];  // Get field type info

                // Check if field exists and has a defined type
                if (field && field.type === "radio") {
                  return (
                    <Col md={12} className="mt-4 mr-3" key={fieldKey}>
                      <Form.Group>
                        <Col xs={3} md={12} className="mb-2">
                          <DropdownWithRadio
                            heading={fieldKey}
                            title={makeString(fieldKey)}
                            options={filters[title][fieldKey]}
                            selectedOptions={allSelectedOptions}
                            setSelectedOptions={setAllSelectedOptions}
                            openKey={openKey}
                            setOpenKey={setOpenKey}
                            isMandatory={false}
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  );
                } else if(field && field.type === "number"){
                  return (
                    <Col md={12} className="mt-4 mr-3" key={fieldKey}>
                      <InputComponent
                        label={makeString(fieldKey)}
                        value={trailers[title]?.[fieldKey] || ""}
                        setValue={(e) =>
                          handleInputChange(title, fieldKey, e.target.value)
                        }
                        formType="number"
                        setOpenKey={setOpenKey}
                        openKey={openKey}
                        isMandatory={false} // Update if field is mandatory
                      />
                    </Col>
                  );
                }
                // Render a different component or nothing for other field types
                return null;
              })}
            </Col>
          ))}
        </Row>
      </Form>
        <div className="d-flex justify-content-center p-4 pt-5">
          <button
            type="button"
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
            name="Trailers-submit"
            id="Trailers-submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
    </Container>
  );
}
