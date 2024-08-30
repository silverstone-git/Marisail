import { Form, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
// import DropdownWithRadioButtons from "../components/DropdownWithRadioButtons";
import DropdownWithRadioButtons from "../Dropdown2";

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

  // ID, VAT, EU wagera ka hisab dekhna h

  console.log(newStr);
  return newStr;
};

export default function TrailersSearch() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    identification: {
      marisailTrailerId: ["sarthak"],
      manufacturer: "",
      make: "",
      model: "",
      year: "",
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
    // ise kaise handle krna h uppercase m
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
      // currency: "",
      VAT: "",
      totalPrice: "",
      country: "",
      globalAddressLookup: "",
      distance: "",
      contactDetails: "",
      uploadPhotos: "",
      uploadVideos: "",
    },
  });

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalRecords: 0,
    limit: 20,
  });
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Row>
            <h4
              className="py-3"
              style={{ borderBottom: "2px solid #f5f5f5", width: "80%" }}
            >
              Search For Trailer
            </h4>
          </Row>
          {/* <Row>
            <SearchBar
              selectedTags={allSelectedOptions}
              removeTag={removeTag}
              onChange={handleSearchChange}
            />
          </Row> */}
          <Row>
            {Object.keys(filters).map((key) => (
              <fieldset
                style={{ borderBottom: "2px solid #f5f5f5", width: "80%" }}
                key={key}
              >
                <legend
                  style={{
                    // borderBottom: "2px solid #f5f5f5",
                    fontSize: "16px",
                    fontWeight: "bold",
                    width: "100%",
                    marginBottom: "12px",
                  }}
                >
                  {makeString(key)}
                </legend>
                {Object.keys(filters[key]).map((key2) => (
                  <Row key={key2} className="row-margin">
                    <Col md={12}>
                      <Form.Group>
                        <DropdownWithRadioButtons
                          title={makeString(key2)}
                          // selectedOptions={selectedOptions}
                          category="condition_1"
                          // onSelect={handleSingleSelectOption}
                          tableName="engine_general"
                          columnName="condition_1"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                ))}
              </fieldset>
            ))}
          </Row>
        </Col>
        <Col md={9}>
          <Row>
            <Col md={12}>
              <h1
                style={{
                  fontSize: "28.8px",
                  fontWeight: "200",
                  padding: "20px",
                }}
              >
                Trailers For Sale
              </h1>
            </Col>
          </Row>
          <Row>
            {/* {engines.map((engine) => (
              <Col md={4}>
                <EngineCard key={engine.engine_id} {...engine} />
              </Col>
            ))} */}
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <div>
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
              <span>
                Page {page} of {pagination.totalPages}
              </span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === pagination.totalPages}
              >
                Next
              </button>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
