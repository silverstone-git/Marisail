import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import DropdownWithSearchAndCheckBoxes from "../DropdownWithSearchAndCheckBoxes";
import EngineCard from "../EngineCard";
import CustomDatePicker from "../CustomDatePicker";
import axios from "axios";
import SearchBar from "../SearchBar";

import "./engineSearch.scss";
const Engines = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const cardData = {
    image: "./images/slider-sailboat.jpg",
    status: "NEW LISTING!",
    statusLabel: "New Listing!",
    year: "2009",
    title: "Fairline Targa 44 GT",
    price: "£ 249,950 Tax Paid",
    location: "Lymington Yacht Haven United Kingdom",
    isNew: true,
    description: "This is a sample description of the boat.",
    save: "Save",
    share: "Share",
    download: "Download",
    enquire: "Enquire",
  };

  const [dropdownOptions, setDropdownOptions] = useState({
    conditionOptions: [],
    sellerOptions: [],
    offeredByOptions: [],
    brokerValuationOptions: [],
    marisailVesselIdOptions: [],
    engineMakeOptions: [],
    engineClassifiableOptions: [],
    certificationOptions: [],
    engineModelOptions: [],
    manufacturerWarrantyOptions: [],
    engineModelYearOptions: [],
    engineSerialNumberOptions: [],
    engineTypeOptions: [],
    typeDesginationOptions: [],
    engineYearOptions: [],
    ceCategoryOptions: [],
    numberDrivesOptions: [],
    numberEnginesOptions: [],
    rangeOptions: [],
    cruiseSpeedOptions: [],
    driveTypeOptions: [],
    engineHoursOptions: [],
    ignitionSystemOptions: [],
    noiseLevelDbOptions: [],
    engineSoundProofingKitsOptions: [],
  });
  const [selectedOptions, setSelectedOptions] = useState({
    conditionOptions: [],
    sellerOptions: [],
    offeredByOptions: [],
    brokerValuationOptions: [],
    marisailVesselIdOptions: [],
    engineMakeOptions: [],
    engineClassifiableOptions: [],
    certificationOptions: [],
    engineModelOptions: [],
    manufacturerWarrantyOptions: [],
    engineModelYearOptions: [],
    engineSerialNumberOptions: [],
    engineTypeOptions: [],
    typeDesginationOptions: [],
    engineYearOptions: [],
    ceCategoryOptions: [],
    numberDrivesOptions: [],
    numberEnginesOptions: [],
    rangeOptions: [],
    cruiseSpeedOptions: [],
    driveTypeOptions: [],
    engineHoursOptions: [],
    ignitionSystemOptions: [],
    noiseLevelDbOptions: [],
    engineSoundProofingKitsOptions: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSelect = (category, options) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [category]: options,
    }));
  };
  // Get all selected options across all dropdowns
  const allSelectedOptions = Object.values(selectedOptions).flat();

  // Remove a tag and update the corresponding dropdown
  const removeTag = (tag) => {
    setSelectedOptions((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((key) => {
        newState[key] = newState[key].filter((option) => option !== tag);
      });
      return newState;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log("here");

        const response = await axios.get("http://localhost:3000/engines");
        console.log(response.data);
        const engines = response.data.results;

        setengineData(response.data);
        setDropdownOptions((prevState) => ({
          ...prevState,
          conditionOptions: engines.map((engine) => ({
            name: engine.Condition,
          })),
          sellerOptions: engines.map((engine) => ({ name: engine.Seller })),
          offeredByOptions: engines.map((engine) => ({
            name: engine.Offered_By,
          })),
          brokerValuationOptions: engines.map((engine) => ({
            name: engine.Broker_Valuation,
          })),
          marisailVesselIdOptions: engines.map((engine) => ({
            name: engine.Marisail_Vessel_ID,
          })),
          engineMakeOptions: engines.map((engine) => ({
            name: engine.Engine_Make,
          })),
          engineClassifiableOptions: engines.map((engine) => ({
            name: engine.Engine_Classifiable,
          })),
          certificationOptions: engines.map((engine) => ({
            name: engine.Certification,
          })),
          engineModelOptions: engines.map((engine) => ({
            name: engine.Engine_Model,
          })),
          manufacturerWarrantyOptions: engines.map((engine) => ({
            name: engine.Manufacturer_Warranty,
          })),
          engineModelYearOptions: engines.map((engine) => ({
            name: engine.Engine_Model_Year,
          })),
          engineSerialNumberOptions: engines.map((engine) => ({
            name: engine.Engine_Serial_Number,
          })),
          engineTypeOptions: engines.map((engine) => ({
            name: engine.Engine_Type,
          })),

          typeDesginationOptions: engines.map((engine) => ({
            name: engine.Type_Designation,
          })),
          engineYearOptions: engines.map((engine) => ({
            name: engine.Engine_Year,
          })),

          ceCategoryOptions: engines.map((engine) => ({
            name: engine.CE_Category,
          })),
          numberDrivesOptions: engines.map((engine) => ({
            name: engine.Number_Drives,
          })),
          numberEnginesOptions: engines.map((engine) => ({
            name: engine.Number_Engines,
          })),
          rangeOptions: engines.map((engine) => ({
            name: engine.Range,
          })),
          cruiseSpeedOptions: engines.map((engine) => ({
            name: engine.Cruise_Speed,
          })),
          driveTypeOptions: engines.map((engine) => ({
            name: engine.Drive_Type,
          })),
          engineHoursOptions: engines.map((engine) => ({
            name: engine.Engine_Hours,
          })),
          ignitionSystemOptions: engines.map((engine) => ({
            name: engine.Ignition_System,
          })),
          // noiseLevelDbOptions: engines.map((engine) => ({
          //   name: engine.Noise_Level_(dB),
          // })),
          engineSoundProofingKitsOptions: engines.map((engine) => ({
            name: engine.Engine_Soundproofing_Kits,
          })),
        }));
        setLoading(false);
      } catch (err) {
        console.log("Error fetching data:", err);
        // Handle errors
        setError(err.message);
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Row>
            <h4
              className="py-3"
              style={{ borderBottom: "2px solid #f5f5f5", width: "80%" }}
            >
              Search an Engine
            </h4>
          </Row>
          <Row>
            <SearchBar
              selectedTags={allSelectedOptions}
              removeTag={removeTag}
            />
          </Row>
          <Row>
            <fieldset
              style={{ borderBottom: "2px solid #f5f5f5", width: "80%" }}
            >
              <legend
                style={{
                  borderBottom: "2px solid #f5f5f5",
                  fontSize: "16px",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                Condition
              </legend>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="Condition"
                      options={dropdownOptions.conditionOptions}
                      selectedOptions={selectedOptions}
                      category="conditionOptions"
                      onSelect={handleSelect}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="Seller"
                      options={dropdownOptions.sellerOptions}
                      selectedOptions={selectedOptions}
                      category="conditionOptions"
                      onSelect={handleSelect}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="Offered By (Dealer)"
                      options={dropdownOptions.offeredByOptions}
                      selectedOption={selectedOptions}
                      category={"offeredByOptions"}
                      onSelect={handleSelect}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12} style={{ marginBottom: "10px" }}>
                  <Form.Group>
                    <CustomDatePicker
                      style={{ width: "108%" }}
                      selectedDate={selectedDate}
                      handleDateChange={handleDateChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="Broker Valuation"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </fieldset>

            <fieldset
              className="py-1"
              style={{ borderBottom: "2px solid #f5f5f5", width: "80%" }}
            >
              <legend
                style={{
                  borderBottom: "2px solid #f5f5f5",
                  fontSize: "16px",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                General
              </legend>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title=" Marisail Vessel ID"
                      options={dropdownOptions.marisailVesselIdOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"marisailVesselIdOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title=" Engine Make"
                      options={dropdownOptions.engineMakeOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"engineMakeOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Engine Classification"
                      options={dropdownOptions.engineClassifiableOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"engineClassifiableOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Certification"
                      options={dropdownOptions.certificationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"certificationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Engine Model"
                      options={dropdownOptions.engineModelOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"engineModelOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Manufacturer Warranty"
                      options={dropdownOptions.manufacturerWarrantyOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"manufacturerWarrantyOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Engine Model Year"
                      options={dropdownOptions.engineModelOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"engineModelYearOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="   Engine Serial Number"
                      options={dropdownOptions.engineSerialNumberOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"engineSerialNumberOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row> */}
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Engine Type"
                      options={dropdownOptions.engineTypeOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"engineTypeOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Type Designation"
                      options={dropdownOptions.typeDesginationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"typeDesginationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Type Designation"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Engine Year"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  CE Design Category"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Number Drives"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="   Number Engines"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Range (Miles)"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="   Cruising Speed (Knots)"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Drive Type"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Engine Hours"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Ignition System (Starting) "
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Noise Level (dB) "
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Engine Soundproofing Kits"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </fieldset>

            <fieldset
              className="py-1"
              style={{ borderBottom: "2px solid #f5f5f5" }}
            >
              <legend
                style={{
                  borderBottom: "2px solid #f5f5f5",
                  fontSize: "16px",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                Transmission
              </legend>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Transmission Type"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="Gear Shift"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="Gear Ratio"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="Gear Shift Type"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Flywheel SAE 14"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="Silumin Flywheel Housing"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="Camshaft"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title=" Crankshaft Alloy"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="   Crankcase Design"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </fieldset>

            <fieldset
              className="py-1"
              style={{ borderBottom: "2px solid #f5f5f5" }}
            >
              <legend
                style={{
                  borderBottom: "2px solid #f5f5f5",
                  fontSize: "16px",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                Installation and Mounting
              </legend>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Engine Mounting Orientation"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title=" Engine Suspension"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Engine Mounting Type"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Mounting Bracket Material"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="   Alignment Requirements"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-margin">
                <Col md={12}>
                  <Form.Group>
                    <DropdownWithSearchAndCheckBoxes
                      title="  Engine Block Type"
                      options={dropdownOptions.brokerValuationOptions}
                      selectedOption={selectedOptions}
                      onSelect={handleSelect}
                      category={"brokerValuationOptions"}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </fieldset>
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
                Engines For Sale
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <EngineCard {...cardData} />
            </Col>
            <Col md={4}>
              <EngineCard {...cardData} />
            </Col>
            <Col md={4}>
              <EngineCard {...cardData} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Engines;
