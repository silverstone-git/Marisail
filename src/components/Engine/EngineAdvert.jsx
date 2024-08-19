import { Container } from "react-bootstrap";
import { Col, Form, Row } from "react-bootstrap";
import SelectComponent from "../SelectComponent";
import InputComponent from "../InputComponent";
import MultipleSelectComponent from "../MultipleSelectComponent";
import { ENGINE_ADVERT } from "../../services/constants";
import DatePickerComponent from "../DatePickerComponent";
import { useEffect, useState } from "react";
import "./engineAdvert.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const EngineAdvert = () => {
  const [form, setForm] = useState({
    condition: "",
    usedCondition: "",
    seller: "",
    offeredBy: "",
    lastSurveyDate: null,
    brokerValuation: "",
    marisailVesselId: "",
    engineMake: [],
    engineClassification: "",
    certification: "",
    engineModel: "",
    engineType: "",
    typeDesignation: "",
    manufacturerWarranty: "",
    engineSerialNumber: "",
    engineSoundproofingKits: "",
    crankcaseDesign: "",
    flywheelSAE14: "",
    engineMountingOrientation: "",
    engineSuspension: "",
    mountingBracketMaterial: "",
    alignmentRequirements: "",
    engineBlock: "",
    scheduledMaintenancePlan: "",
    serviceInterval: "",
    maintenanceLogRequirements: "",
    availabilityOfSpareParts: "",
    operationMode: "",
    displacement: "",
    length: "",
    width: "",
    height: "",
    lengthFromFrontEndOfFlywheelHousing: "",
    engineWeight: "",
    dryWeight: "",
    exclOilWeight: "",
    nominalRating: "",
    enginePerformance: "",
    maxPowerOutput: "",
    maxSpeedKnots: "",
    supercharged: "",
    grossPowerFullLoadKW: "",
    grossPowerFullLoadHpMetric: "",
    GrossPowerPropellerCurveKw: "",
    GrossPowerPropellerCurveHpMetric: "",
    grossTorque: "",
    powerToWeightRatio: "",
    engineEfficiency: "",
    engineSpeedRange: "",
    maximumContinuousRating: "",
    continuousPower: "",
    cylinderConfiguration: "",
    numberCylinders: "",
    cylindersAndArrangement: "",
    numberValves: "",
    valvePerCylinder: "",
    boreXStroke: "",
    bore: "",
    stroke: "",
    idleRPM: "",
    ratedSpeedRPM: "",
    rpmAtMaxPower: "",
    maximumTorque: "",
    maximumTorqueAtSpeed: "",
    torqueAtRatedSpeed: "",
    rawWaterpumpType:"",
    circulationPumpType:"",
    airFilterType:"",
    coolingSystemPressure:"",
    coolingFluidType:"",
    coolingCapacity:"",
    lubricationSystem:"",
    engineLubrication:"",
    heatDissipationRate:"",
    heatExchangerMaterial:"",
    typeOfCooling:"",
    recommendedCoolant:"",
    intercooled:"",
    openCoolingSystem:"",
    closedCoolingSystem:"",
    coolingSystem:"",
    afterCooled:"",
    propulsion:"",
    bowthruster:"",
    propulsionSystem:"",
    propulsionSystemType:"",
    propellerDiameter:"",
    propellerMaterial:"",
    propellerPitch:"",
    propellerType:"",
    propellerShaftDiameter:"",
    gearboxType:"",
    transmissionCooling:"",
    propellerBladeMaterial:"",
    propellerShaftMaterial:"",
    steeringSystem:"",
    steeringControlType:"",
    trimSystem:"",
    trimTabMaterial:"",
    trimTabType:""
  });
  const [openKey, setOpenKey] = useState(null);
  const [engineMakeOptions, setEngineMakeOptions] = useState([]);
  const [engineModelOptions, setEngineModelOptions] = useState([]);
  const [unitInjectorsOptions, setUnitInjectorsOptions] = useState([]);
  const [engineModelYearOptions, setEngineModelYearOptions] = useState([]);
  const [conditionOptions, setConditionOptions] = useState([]);
  const [engineTypeOptions, setEngineTypeOptions] = useState([]);
  const [typeDesignationOptions, setTypeDesignationOptions] = useState([]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const handleAddOption = (newOption, label) => {
    if (newOption.trim() !== "") {
      const capitalizedOption = capitalizeFirstLetter(newOption.trim());

      if (label === ENGINE_ADVERT.ENGINE_MAKE) {
        if (engineMakeOptions.includes(capitalizedOption)) {
          alert(`"${capitalizedOption}" already exists in the options.`);
        } else {
          const updatedOptions = [...engineMakeOptions, capitalizedOption];
          const sortedOptions = updatedOptions.sort((a, b) =>
            a.localeCompare(b)
          );
          setEngineMakeOptions(sortedOptions);
        }
      } else if (label === ENGINE_ADVERT.ENGINE_MODEL) {
        if (engineModelOptions.includes(capitalizedOption)) {
          alert(`"${capitalizedOption}" already exists in the options.`);
        } else {
          const updatedOptions = [...engineModelOptions, capitalizedOption];
          const sortedOptions = updatedOptions.sort((a, b) =>
            a.localeCompare(b)
          );
          setEngineModelOptions(sortedOptions);
        } //[TODO] Need to handle for other options as well
      }
    }
  };

  const handleSubmit = (e) => {
    setOpenKey("Broker Valuation");
    try {
      e.preventDefault();
      const formIsValid = e.target.checkValidity();
      if (formIsValid) {
        console.log("Form submit--", form);
      } else {
        alert("Please fill out all required fields.");
      }
      // const mandatoryFields = ['engineMakeOptions', 'engineModel', 'engineType', 'typeDesignation'];
      // let allFieldsValid = true;
      // mandatoryFields.forEach(field => {
      //   if (!form[field] || form[field].length === 0) {
      //     allFieldsValid = false;
      //   }
      // });
      // if (allFieldsValid) {
      //   console.log("Form submit--", form);
      // } else {
      //   alert("Please fill out all mandatory fields.");
      // }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchEngineMake = async (
    URL = "http://localhost:3001/api/advert_engine/engine_make"
  ) => {
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setEngineMakeOptions(toJson.result);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchEngineModel = async (
    URL = "http://localhost:3001/api/advert_engine/engine_model"
  ) => {
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setEngineModelOptions(toJson.result);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUnitInjectors = async (
    URL = "http://localhost:3001/api/advert_engine/unit_injectors"
  ) => {
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setUnitInjectorsOptions(toJson.result);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchEngineModelYear = async (
    URL = "http://localhost:3001/api/advert_engine/engine_modelyear"
  ) => {
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setEngineModelYearOptions(toJson.result);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchCondition = async (
    URL = "http://localhost:3001/api/advert_engine/conditions"
  ) => {
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setConditionOptions(toJson.result);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchEngineType = async (
    URL = "http://localhost:3001/api/advert_engine/engine_type"
  ) => {
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setEngineTypeOptions(toJson.result);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchTypeDesignation = async (
    URL = "http://localhost:3001/api/advert_engine/type_designation"
  ) => {
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setTypeDesignationOptions(toJson.result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchEngineMake();
    fetchEngineModel();
    fetchUnitInjectors();
    fetchEngineModelYear();
    fetchEngineType();
    fetchCondition();
    fetchTypeDesignation();
  }, []);

  return (
    <>
      <Container className="mb-5">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Make and Model</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.ENGINE_MAKE}
                    isMandatory={true}
                    options={engineMakeOptions}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.ENGINE_MAKE)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.ENGINE_MODEL}
                    isMandatory={true}
                    options={engineModelOptions}
                    value={form.engineModel}
                    setValue={(newValues) =>
                      setForm({ ...form, engineModel: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.ENGINE_MODEL)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.engineModelYear}
                    setValue={(val) =>
                      setForm({ ...form, engineModelYear: val })
                    }
                    label="Engine Model Year"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.ENGINE_TYPE}
                    options={engineTypeOptions}
                    isMandatory={true}
                    value={form.engineType}
                    setValue={(newValues) =>
                      setForm({ ...form, engineType: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.ENGINE_TYPE)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.TYPE_DESIGNATION}
                    options={typeDesignationOptions}
                    isMandatory={true}
                    value={form.typeDesignation}
                    setValue={(newValues) =>
                      setForm({ ...form, typeDesignation: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.TYPE_DESIGNATION)
                    }
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Condition</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    label="Condition"
                    value={form.condition}
                    setValue={(val) => setForm({ ...form, condition: val })}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    options={conditionOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    value={form.usedCondition}
                    setValue={(val) => setForm({ ...form, usedCondition: val })}
                    label="Used Condition"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.seller}
                    setValue={(val) => setForm({ ...form, seller: val })}
                    label="Seller"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.offeredBy}
                    setValue={(val) => setForm({ ...form, offeredBy: val })}
                    label="Offered By"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <div className="customDatePickerWidth">
                    <DatePickerComponent
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      label={"Last Survey Date"}
                      selected={form.lastSurveyDate}
                      value={form.lastSurveyDate}
                      type="advertEngine"
                      setValue={(val) =>
                        setForm({ ...form, lastSurveyDate: val })
                      }
                    />
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <InputComponent
                    label={"Broker Valuation"}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    formType={"number"}
                    type="advertEngine"
                    value={form.brokerValuation}
                    setValue={(e) =>
                      setForm({
                        ...form,
                        brokerValuation: e.target.value,
                      })
                    }
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>General</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={`Marisail Vessel ID`}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(
                        newOption,
                        ENGINE_ADVERT.MARISAIL_VESSEL_ID
                      )
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.ENGINE_CLASSIFICATION}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(
                        newOption,
                        ENGINE_ADVERT.ENGINE_CLASSIFICATION
                      )
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.CERTIFICATION}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.CERTIFICATION)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.manufacturerWarranty}
                    setValue={(val) =>
                      setForm({ ...form, manufacturerWarranty: val })
                    }
                    label="Manufacturer Warranty"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.engineSerialNumber}
                    setValue={(val) =>
                      setForm({ ...form, engineSerialNumber: val })
                    }
                    label="Engine Serial Number"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.CE_DESIGN_CATEGORY}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(
                        newOption,
                        ENGINE_ADVERT.CE_DESIGN_CATEGORY
                      )
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.NUMBER_DRIVES}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.NUMBER_DRIVES)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.NUMBER_ENGINES}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.NUMBER_ENGINES)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.RANGE_MILES}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.RANGE_MILES)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.CRUISING_SPEED}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.CRUISING_SPEED)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.DRIVE_TYPE}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.DRIVE_TYPE)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.ENGINE_HOURS}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.ENGINE_HOURS)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.IGNITION_SYSTEM}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.IGNITION_SYSTEM)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.NOISE_LEVEL}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.NOISE_LEVEL)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.engineSoundproofingKits}
                    setValue={(val) =>
                      setForm({ ...form, engineSoundproofingKits: val })
                    }
                    label="Engine Soundproofing Kits"
                    options={engineModelYearOptions}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Transmission</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.TRANSMISSION_TYPE}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(
                        newOption,
                        ENGINE_ADVERT.TRANSMISSION_TYPE
                      )
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    options={engineMakeOptions}
                    label={ENGINE_ADVERT.GEAR_SHIFT}
                    isMandatory={false}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.GEAR_SHIFT)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.GEAR_RATIO}
                    options={engineMakeOptions}
                    isMandatory={false}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.GEAR_RATIO)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.GEAR_SHIFT_TYPE}
                    options={engineMakeOptions}
                    isMandatory={false}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.GEAR_SHIFT_TYPE)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.flywheelSAE14}
                    setValue={(val) => setForm({ ...form, flywheelSAE14: val })}
                    label="Flywheel SAE 14"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.SILUMIN_FLYWHEEL_HOUSING}
                    options={engineMakeOptions}
                    isMandatory={false}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(
                        newOption,
                        ENGINE_ADVERT.SILUMIN_FLYWHEEL_HOUSING
                      )
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.CAMSHAFT}
                    options={engineMakeOptions}
                    isMandatory={false}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.CAMSHAFT)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    options={engineMakeOptions}
                    label={ENGINE_ADVERT.CRANKSHAFT_ALLOY}
                    isMandatory={false}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.CRANKSHAFT_ALLOY)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.crankcaseDesign}
                    setValue={(val) =>
                      setForm({ ...form, crankcaseDesign: val })
                    }
                    label="Crankcase Design"
                    options={engineModelYearOptions}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Installation and Mounting</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.engineMountingOrientation}
                    setValue={(val) =>
                      setForm({ ...form, engineMountingOrientation: val })
                    }
                    label="Engine Mounting Orientation"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.engineSuspension}
                    setValue={(val) =>
                      setForm({ ...form, engineSuspension: val })
                    }
                    label="Engine Suspension"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.ENGINE_MOUNTING_TYPE}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(
                        newOption,
                        ENGINE_ADVERT.ENGINE_MOUNTING_TYPE
                      )
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.mountingBracketMaterial}
                    setValue={(val) =>
                      setForm({ ...form, mountingBracketMaterial: val })
                    }
                    label="Mounting Bracket Material"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.alignmentRequirements}
                    setValue={(val) =>
                      setForm({ ...form, alignmentRequirements: val })
                    }
                    label="Alignment Requirements"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.engineBlock}
                    setValue={(val) => setForm({ ...form, engineBlock: val })}
                    label="Engine Block"
                    options={engineModelYearOptions}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Service & Maintenance</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.scheduledMaintenancePlan}
                    setValue={(val) =>
                      setForm({ ...form, scheduledMaintenancePlan: val })
                    }
                    label="Scheduled Maintenance Plan"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.serviceInterval}
                    setValue={(val) =>
                      setForm({ ...form, serviceInterval: val })
                    }
                    label="Service Interval"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.maintenanceLogRequirements}
                    setValue={(val) =>
                      setForm({ ...form, maintenanceLogRequirements: val })
                    }
                    label="Maintenance Log Requirements"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.availabilityOfSpareParts}
                    setValue={(val) =>
                      setForm({ ...form, availabilityOfSpareParts: val })
                    }
                    label="Availability Of Spare Parts"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.operationMode}
                    setValue={(val) => setForm({ ...form, operationMode: val })}
                    label="Operation Mode"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.LAST_SERVICE_DATE}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(
                        newOption,
                        ENGINE_ADVERT.LAST_SERVICE_DATE
                      )
                    }
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Equipment</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.ENGINE_MANAGEMENT_SYSTEM}
                    options={engineMakeOptions}
                    isMandatory={false}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(
                        newOption,
                        ENGINE_ADVERT.ENGINE_MANAGEMENT_SYSTEM
                      )
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.ENGINE_CONTROL_SYSTEM}
                    options={engineMakeOptions}
                    isMandatory={false}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(
                        newOption,
                        ENGINE_ADVERT.ENGINE_CONTROL_SYSTEM
                      )
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.unitInjectors}
                    setValue={(val) => setForm({ ...form, unitInjectors: val })}
                    label="Unit Injectors"
                    options={unitInjectorsOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.TURBO_CHARGER}
                    options={engineMakeOptions}
                    isMandatory={false}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.TURBO_CHARGER)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.TURBO_CHARGING}
                    options={engineMakeOptions}
                    isMandatory={false}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.TURBO_CHARGING)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.starterMotor}
                    setValue={(val) => setForm({ ...form, starterMotor: val })}
                    label="Starter Motor"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.protectionCovers}
                    setValue={(val) =>
                      setForm({ ...form, protectionCovers: val })
                    }
                    label="Protection Covers"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.closedCrankcaseVentilation}
                    setValue={(val) =>
                      setForm({ ...form, closedCrankcaseVentilation: val })
                    }
                    label="Closed Crankcase Ventilation"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.HEAT_EXCHANGER}
                    options={engineMakeOptions}
                    isMandatory={false}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.HEAT_EXCHANGER)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.heatExchangerWithExpansionTank}
                    setValue={(val) =>
                      setForm({ ...form, heatExchangerWithExpansionTank: val })
                    }
                    label="Heat Exchanger With Expansion Tank"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.SEA_WATER_PUMP}
                    options={engineMakeOptions}
                    isMandatory={false}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) =>
                      handleAddOption(newOption, ENGINE_ADVERT.SEA_WATER_PUMP)
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.seaWaterCooledChargeAirCooler}
                    setValue={(val) =>
                      setForm({ ...form, seaWaterCooledChargeAirCooler: val })
                    }
                    label="Sea Water Cooled Charge Air Cooler"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.workingPrinciple}
                    setValue={(val) =>
                      setForm({ ...form, workingPrinciple: val })
                    }
                    label="Working Principle"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.compressionRatio}
                    setValue={(val) =>
                      setForm({ ...form, compressionRatio: val })
                    }
                    label="Compression Ratio"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.workingPrinciple}
                    setValue={(val) =>
                      setForm({ ...form, workingPrinciple: val })
                    }
                    label="Working Principle"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.PistonSpeedAt1500Rpm}
                    setValue={(val) =>
                      setForm({ ...form, PistonSpeedAt1500Rpm: val })
                    }
                    label="Piston Speed At 1500Rpm"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.PistonSpeedAt1800Rpm}
                    setValue={(val) =>
                      setForm({ ...form, PistonSpeedAt1800Rpm: val })
                    }
                    label="Piston Speed At 1800Rpm"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.firingOrder}
                    setValue={(val) => setForm({ ...form, firingOrder: val })}
                    label="Firing Order"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.pistons}
                    setValue={(val) => setForm({ ...form, pistons: val })}
                    label="Pistons"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.connectionRods}
                    setValue={(val) =>
                      setForm({ ...form, connectionRods: val })
                    }
                    label="Connection Rods"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.auxiliaryPowerTakeOff}
                    setValue={(val) =>
                      setForm({ ...form, auxiliaryPowerTakeOff: val })
                    }
                    label="Auxiliary Power Take Off (PTO)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.remoteControlSystems}
                    setValue={(val) =>
                      setForm({ ...form, remoteControlSystems: val })
                    }
                    label={ENGINE_ADVERT.REMOTE_CONTROL_SYSTEMS}
                    options={engineModelYearOptions}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Dimensions</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.displacement}
                    setValue={(val) => setForm({ ...form, displacement: val })}
                    label="Displacement"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.length}
                    setValue={(val) => setForm({ ...form, length: val })}
                    label="Length (mm)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.width}
                    setValue={(val) => setForm({ ...form, width: val })}
                    label="Width (mm)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.height}
                    setValue={(val) => setForm({ ...form, height: val })}
                    label="Height (mm)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.lengthFromFrontEndOfFlywheelHousing}
                    setValue={(val) =>
                      setForm({
                        ...form,
                        lengthFromFrontEndOfFlywheelHousing: val,
                      })
                    }
                    label="Length From Front End To Edge Of Flywheel Housing (mm)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.engineWeight}
                    setValue={(val) => setForm({ ...form, engineWeight: val })}
                    label="Engine Weight"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.dryWeight}
                    setValue={(val) => setForm({ ...form, dryWeight: val })}
                    label="Dry Weight (Kg)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.exclOilWeight}
                    setValue={(val) => setForm({ ...form, exclOilWeight: val })}
                    label="Weight (Excl Oil And Coolant)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.weightWithHeatExchanger}
                    setValue={(val) =>
                      setForm({ ...form, weightWithHeatExchanger: val })
                    }
                    label="Weight With Heat Exchanger"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.weightWithKeelCooling}
                    setValue={(val) =>
                      setForm({ ...form, weightWithKeelCooling: val })
                    }
                    label="Weight With Keel Cooling"
                    options={engineModelYearOptions}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Performance</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.nominalRating}
                    setValue={(val) => setForm({ ...form, nominalRating: val })}
                    label="Nominal Rating (Kw) (HP)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.enginePerformance}
                    setValue={(val) =>
                      setForm({ ...form, enginePerformance: val })
                    }
                    label="Engine Performance"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.maxPowerOutput}
                    setValue={(val) =>
                      setForm({ ...form, maxPowerOutput: val })
                    }
                    label="Max Power Output"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.maxPowerBHP}
                    setValue={(val) => setForm({ ...form, maxPowerBHP: val })}
                    label="Max. Power (BHP)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.maxSpeedKnots}
                    setValue={(val) => setForm({ ...form, maxSpeedKnots: val })}
                    label="Max. Speed (Knots)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.supercharged}
                    setValue={(val) => setForm({ ...form, supercharged: val })}
                    label="Supercharged"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.valveTrain}
                    setValue={(val) => setForm({ ...form, valveTrain: val })}
                    label="Valve Train"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.grossPowerFullLoadKW}
                    setValue={(val) =>
                      setForm({ ...form, grossPowerFullLoadKW: val })
                    }
                    label="Gross Power, Full Load (Kw)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.grossPowerFullLoadHpMetric}
                    setValue={(val) =>
                      setForm({ ...form, grossPowerFullLoadHpMetric: val })
                    }
                    label="Gross Power, Full Load (Hp, Metric)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.GrossPowerPropellerCurveKw}
                    setValue={(val) =>
                      setForm({ ...form, GrossPowerPropellerCurveKw: val })
                    }
                    label="Gross Power, Propeller Curve (Kw)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.GrossPowerPropellerCurveHpMetric}
                    setValue={(val) =>
                      setForm({
                        ...form,
                        GrossPowerPropellerCurveHpMetric: val,
                      })
                    }
                    label="Gross Power, Propeller Curve (Hp, Metric)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.grossTorque}
                    setValue={(val) => setForm({ ...form, grossTorque: val })}
                    label="Gross Torque (Nm)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.continuousPower}
                    setValue={(val) =>
                      setForm({ ...form, continuousPower: val })
                    }
                    label="Continuous Power (kW/HP)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.maximumContinuousRating}
                    setValue={(val) =>
                      setForm({ ...form, maximumContinuousRating: val })
                    }
                    label="Maximum Continuous Rating (MCR)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.engineSpeedRange}
                    setValue={(val) =>
                      setForm({ ...form, engineSpeedRange: val })
                    }
                    label="Engine Speed Range (RPM)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.supercharged}
                    setValue={(val) => setForm({ ...form, supercharged: val })}
                    label="Supercharged"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.engineEfficiency}
                    setValue={(val) =>
                      setForm({ ...form, engineEfficiency: val })
                    }
                    label="Engine Efficiency"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.powerToWeightRatio}
                    setValue={(val) =>
                      setForm({ ...form, powerToWeightRatio: val })
                    }
                    label="Power-to-Weight Ratio"
                    options={engineModelYearOptions}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Cylinders</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.cylinderConfiguration}
                    setValue={(val) =>
                      setForm({ ...form, cylinderConfiguration: val })
                    }
                    label="Cylinder Configuration"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.numberCylinders}
                    setValue={(val) =>
                      setForm({ ...form, numberCylinders: val })
                    }
                    label="Number Cylinders"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.cylindersAndArrangement}
                    setValue={(val) =>
                      setForm({ ...form, cylindersAndArrangement: val })
                    }
                    label="Cylinders And Arrangement"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.numberValves}
                    setValue={(val) => setForm({ ...form, numberValves: val })}
                    label="Number Valves"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.valvePerCylinder}
                    setValue={(val) =>
                      setForm({ ...form, valvePerCylinder: val })
                    }
                    label="Valve per Cylinder"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.boreXStroke}
                    setValue={(val) => setForm({ ...form, boreXStroke: val })}
                    label="Bore X Stroke"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.bore}
                    setValue={(val) => setForm({ ...form, bore: val })}
                    label="Bore"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.stroke}
                    setValue={(val) => setForm({ ...form, stroke: val })}
                    label="Stroke"
                    options={engineModelYearOptions}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>RPM</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.idleRPM}
                    setValue={(val) => setForm({ ...form, idleRPM: val })}
                    label="Idle RPM"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.ratedSpeedRPM}
                    setValue={(val) => setForm({ ...form, ratedSpeedRPM: val })}
                    label="Rated Speed (RPM)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.rpmAtMaxPower}
                    setValue={(val) => setForm({ ...form, rpmAtMaxPower: val })}
                    label="RPM at Max Power"
                    options={engineModelYearOptions}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Torque</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.maximumTorque}
                    setValue={(val) => setForm({ ...form, maximumTorque: val })}
                    label="Maximum Torque (Nm)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.maximumTorqueAtSpeed}
                    setValue={(val) =>
                      setForm({ ...form, maximumTorqueAtSpeed: val })
                    }
                    label="Maximum Torque At Speed (RPM)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.torqueAtRatedSpeed}
                    setValue={(val) =>
                      setForm({ ...form, torqueAtRatedSpeed: val })
                    }
                    label="Torque At Rated Speed (Nm)"
                    options={engineModelYearOptions}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Cooling System</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.afterCooled}
                    setValue={(val) => setForm({ ...form, afterCooled: val })}
                    label="Aftercooled"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.coolingSystem}
                    setValue={(val) =>
                      setForm({ ...form, coolingSystem: val })
                    }
                    label="Cooling System"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.closedCoolingSystem}
                    setValue={(val) =>
                      setForm({ ...form, closedCoolingSystem: val })
                    }
                    label="Closed Cooling System"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.openCoolingSystem}
                    setValue={(val) =>
                      setForm({ ...form, openCoolingSystem: val })
                    }
                    label="Open Cooling System"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.intercooled}
                    setValue={(val) =>
                      setForm({ ...form, intercooled: val })
                    }
                    label="Intercooled"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.recommendedCoolant}
                    setValue={(val) =>
                      setForm({ ...form, recommendedCoolant: val })
                    }
                    label="Recommended Coolant"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.typeOfCooling}
                    setValue={(val) =>
                      setForm({ ...form, typeOfCooling: val })
                    }
                    label="Type Of Cooling"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.heatExchangerMaterial}
                    setValue={(val) =>
                      setForm({ ...form, heatExchangerMaterial: val })
                    }
                    label="Heat Exchanger Material"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.heatDissipationRate}
                    setValue={(val) =>
                      setForm({ ...form, heatDissipationRate: val })
                    }
                    label="Heat Dissipation Rate"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.engineLubrication}
                    setValue={(val) =>
                      setForm({ ...form, engineLubrication: val })
                    }
                    label="Engine Lubrication"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.lubricationSystem}
                    setValue={(val) =>
                      setForm({ ...form, lubricationSystem: val })
                    }
                    label="Lubrication System"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.coolingCapacity}
                    setValue={(val) =>
                      setForm({ ...form, coolingCapacity: val })
                    }
                    label="Cooling Capacity (L/min)"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.coolingFluidType}
                    setValue={(val) =>
                      setForm({ ...form, coolingFluidType: val })
                    }
                    label="Cooling Fluid Type"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.coolingSystemPressure}
                    setValue={(val) =>
                      setForm({ ...form, coolingSystemPressure: val })
                    }
                    label="Cooling System Pressure"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.airFilterType}
                    setValue={(val) =>
                      setForm({ ...form, airFilterType: val })
                    }
                    label="Air Filter Type"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.circulationPumpType}
                    setValue={(val) =>
                      setForm({ ...form, circulationPumpType: val })
                    }
                    label="Circulation Pump Type"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.rawWaterpumpType}
                    setValue={(val) =>
                      setForm({ ...form, rawWaterpumpType: val })
                    }
                    label="Raw Water Pump Type"
                    options={engineModelYearOptions}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Propulsion System</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.propulsion}
                    setValue={(val) => setForm({ ...form, propulsion: val })}
                    label="Propulsion"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.bowthruster}
                    setValue={(val) =>
                      setForm({ ...form, bowthruster: val })
                    }
                    label="Bowthruster"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.propulsionSystem}
                    setValue={(val) =>
                      setForm({ ...form, propulsionSystem : val })
                    }
                    label="Propulsion System"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.propulsionSystemType}
                    setValue={(val) =>
                      setForm({ ...form, propulsionSystemType: val })
                    }
                    label="Propulsion System Type"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.propellerDiameter}
                    setValue={(val) =>
                      setForm({ ...form, propellerDiameter: val })
                    }
                    label="Propeller Diameter"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.propellerMaterial}
                    setValue={(val) =>
                      setForm({ ...form, propellerMaterial: val })
                    }
                    label="Propeller Material"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.propellerPitch}
                    setValue={(val) =>
                      setForm({ ...form, propellerPitch: val })
                    }
                    label="Propeller Pitch"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.propellerType}
                    setValue={(val) =>
                      setForm({ ...form, propellerType: val })
                    }
                    label="Propeller Type"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.propellerShaftDiameter}
                    setValue={(val) =>
                      setForm({ ...form, propellerShaftDiameter: val })
                    }
                    label="Propeller Shaft Diameter"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.gearboxType}
                    setValue={(val) =>
                      setForm({ ...form, gearboxType: val })
                    }
                    label="Gearbox Type"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.transmissionCooling}
                    setValue={(val) =>
                      setForm({ ...form, transmissionCooling: val })
                    }
                    label="Transmission Cooling"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.propellerBladeMaterial}
                    setValue={(val) =>
                      setForm({ ...form, propellerBladeMaterial: val })
                    }
                    label="Propeller Blade Material"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.propellerShaftMaterial}
                    setValue={(val) =>
                      setForm({ ...form, propellerShaftMaterial: val })
                    }
                    label="Propeller Shaft Material"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.steeringSystem}
                    setValue={(val) =>
                      setForm({ ...form, steeringSystem: val })
                    }
                    label="Steering System"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.steeringControlType}
                    setValue={(val) =>
                      setForm({ ...form, steeringControlType: val })
                    }
                    label="Steering Control Type"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.trimSystem}
                    setValue={(val) =>
                      setForm({ ...form, trimSystem: val })
                    }
                    label="Trim System"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.trimTabMaterial}
                    setValue={(val) =>
                      setForm({ ...form, trimTabMaterial: val })
                    }
                    label="Trim Tab Material"
                    options={engineModelYearOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.trimTabType}
                    setValue={(val) =>
                      setForm({ ...form, trimTabType: val })
                    }
                    label="Trim Tab Type"
                    options={engineModelYearOptions}
                  />
                </Col>
              </Col>
            </Col>
          </Row>
          <p style={{ textAlign: "center" }}>
            <button
              type="submit"
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
              name="ae-submit"
              id="ae-submit"
            >
              Submit
            </button>
          </p>
          {/* <p style={{textAlign: 'center'}}>
          <input type="submit" 
            style={{backgroundColor: '#971e28', color: '#fff', padding: '8px 32px', border: '0px none',
            borderRadius: 30, textTransform: 'uppercase', marginBottom: 8, width: '50%', cursor: 'pointer',
            transition: 'all .5s ease'}}
            name="ae-submit" id="ae-submit" value="Submit"
          />
        </p> */}
        </Form>
      </Container>
    </>
  );
};

export default EngineAdvert;
