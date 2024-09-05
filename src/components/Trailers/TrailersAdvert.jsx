import { Form, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import DropdownWithRadio from "../DropdownWithRadio";
import Loader from "../Loader";

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
    marisailTrailerId: "",
    manufacturer: "",
    make: "",
    model: "",
    year: "",
    askingPrice:""
  },
  basics: {
    type: "",
    gvwr: "",
    loadCapacity: "",
    length: "",
    width: "",
    totalHeight: "",
    axleHeightFromGround: "",
  },
  constructionMaterials: {
    frameMaterial: "",
    frameCoating: "",
    frameCrossmemberType: "",
    frameWeldType: "",
    maximumAngleOfApproach: "",
    floorMaterial: "",
    sidesMaterial: "",
    roofMaterial: "",
  },
  maintenanceFeatures: {
    greasePoints: "",
    bearingType: "",
    maintenanceSchedule: "",
  },
  userFeatures: {
    storage: "",
    tieDownPoints: "",
    toolBox: "",
    bumperType: "",
  },
  specialFeatures: {
    hydraulicTilt: "",
    extendableTongue: "",
    adjustableDeckHeight: "",
    detachableSidePanels: "",
  },
  additionalAccessories: {
    rampType: "",
    winchPost: "",
    splashGuards: "",
    fenders: "",
    sideRails: "",
  },
  customizationOptions: {
    color: "",
    decals: "",
    storageBox: "",
    lightingPackage: "",
    suspensionUpgrade: "",
  },
  axlesAndSuspension: {
    axleType: "",
    axleCapacity: "",
    axleSealType: "",
    axleHubSize: "",
    axlePosition: "",
    dropAxleOption: "",
    suspensionType: "",
    suspensionCapacity: "",
    suspensionAdjustment: "",
  },
  tyresAndWheels: {
    tyreSize: "",
    tyreLoadRange: "",
    tyreType: "",
    wheelType: "",
    wheelBoltPattern: "",
    hubLubricationSystem: "",
  },
  brakes: {
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
  },
  winchAndWrinchAccessories: {
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
  },
  lightingAndElectrical: {
    lighting: "",
    lightMountingPosition: "",
    lightType: "",
    electricalConnectorType: "",
    electricalWiringType: "",
    batteryType: "",
    batteryChargerType: "",
  },
  acessories: {
    spareTyreCarrier: "",
    spareTyreSize: "",
    spareTyreMountingLocation: "",
    jackType: "",
    jackWheelType: "",
    jackCapacity: "",
    jackLiftHeight: "",
  },
  loadingAndTransportFeatures: {
    loadingSystem: "",
    bunks: "",
    bunkMaterial: "",
    bunkWidth: "",
    bunkHeightAdjustment: "",
    bunkMountingBracketMaterial: "",
    rollers: "",
    rollerMaterial: "",
    rollerAxleDiameter: "",
  },
  securityFeatures: {
    wheelLocks: "",
    lockType: "",
    alarmSystem: "",
    gpsTrackingDevice: "",
  },
  environmentalAndCorrosionResistance: {
    corrosionProtection: "",
    rustInhibitors: "",
  },
  performanceAndHandling: {
    maximumSpeedRating: "",
    turningRadius: "",
  },
  tongue: {
    tongueMaterial: "",
    tongueShape: "",
    tongueJackWheelSize: "",
    tongueJackType: "",
    tongueWeight: "",
    tongueWeightRatio: "",
  },
  documentation: {
    ownerManual: "",
    warranty: "",
  },
  regulatoryCompliance: {
    dotCompliance: "",
    natmCertification: "",
    euTypeApproval: "",
    adrCompliance: "",
  },
  paymentTerms: {
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
  },
};

export default function TrailersAdvert() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [allSelectedOptions, setAllSelectedOptions] = useState("");
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

  function setFilters(key, data) {
    const setStateFunction = setStateFunctions[key];
    console.log(key);
    console.log(data);
    if (setStateFunction) {
      setStateFunction(data);
    } else {
      console.error(`No setState function found for key: ${key}`);
    }

    console.log("Data fetched from API", filters);
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
      console.log("Data fetched from cache", JSON.parse(cachedData));
    } else {
      // Fetch data if not cached
      fetchFilterData();
    }

    console.log(filters);
  }, "");

  const [trailers, setTrailers] = useState("");
  useEffect(() => {
    setLoading(true);
    let currInfo = {
      selectedOptions: allSelectedOptions,
      page: page,
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
        console.log(data);
        setTrailers(data.res[0]);
        // console.log("trailers", trailers);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);

        console.log("done");
      }
    };

    fetchTrailerData();
  }, [allSelectedOptions, page]);

  return (
    <Container className="mb-5">
      <Form>
        <Row>
          {Object.keys(filters).map((key) => (
            <Col md={6} key={key}>
              <legend className="fieldset-legend">
                <h6
                  style={{
                    padding: "15px 0px 0px 0px",
                  }}
                >
                  {makeString(key)}
                </h6>
              </legend>
              {Object.keys(filters[key]).map((key2) => (
                <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }} key={key2}>
                  <Form.Group>
                    <Col xs={3} md={12} className="mb-2">
                      <DropdownWithRadio
                        heading={key2}
                        title={makeString(key2)}
                        options={filters[key][key2]}
                        selectedOptions={allSelectedOptions}
                        setSelectedOptions={setAllSelectedOptions}
                      />
                    </Col>
                  </Form.Group>
                </Col>
              ))}
            </Col>
          ))}
        </Row>
      </Form>
    </Container>
  );
}
