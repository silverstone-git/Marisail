import { Container } from "react-bootstrap";
import { Col, Form, Row } from "react-bootstrap";
import SelectComponent from "../SelectComponent";
import InputComponent from "../InputComponent";
import MultipleSelectComponent from "../MultipleSelectComponent";
import { ENGINE_ADVERT } from "../../services/constsnts"
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
  });
  const [openKey, setOpenKey] = useState(null);
  const [engineMakeOptions, setEngineMakeOptions] = useState([]);
  const [engineModelOptions, setEngineModelOptions] = useState([]);

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
          const sortedOptions = updatedOptions.sort((a, b) => a.localeCompare(b));
          setEngineMakeOptions(sortedOptions);
        }
      } else if (label === ENGINE_ADVERT.ENGINE_MODEL) {
        if (engineModelOptions.includes(capitalizedOption)) {
          alert(`"${capitalizedOption}" already exists in the options.`);
        } else {
          const updatedOptions = [...engineModelOptions, capitalizedOption];
          const sortedOptions = updatedOptions.sort((a, b) => a.localeCompare(b));
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
  useEffect(() => {
    fetchEngineMake();
    fetchEngineModel();
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.ENGINE_MAKE)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.ENGINE_MODEL)}
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
                    label="engineModelYear"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.ENGINE_TYPE}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.ENGINE_TYPE)}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <MultipleSelectComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.TYPE_DESIGNATION}
                    options={engineMakeOptions}
                    isMandatory={true}
                    value={form.engineMake}
                    setValue={(newValues) =>
                      setForm({ ...form, engineMake: newValues })
                    }
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.TYPE_DESIGNATION)}
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
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    value={form.usedCondition}
                    setValue={(val) => setForm({ ...form, usedCondition: val })}
                    label="UsedCondition"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.offeredBy}
                    setValue={(val) => setForm({ ...form, offeredBy: val })}
                    label="offeredBy"
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.MARISAIL_VESSEL_ID)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.ENGINE_CLASSIFICATION)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.CERTIFICATION)}
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
                    label="manufacturerWarranty"
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
                    label="engineSerialNumber"
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.CE_DESIGN_CATEGORY)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.NUMBER_DRIVES)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.NUMBER_ENGINES)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.RANGE_MILES)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.CRUISING_SPEED)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.DRIVE_TYPE)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.ENGINE_HOURS)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.IGNITION_SYSTEM)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.NOISE_LEVEL)}
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
                    label="EngineSoundproofingKits"
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.TRANSMISSION_TYPE)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.GEAR_SHIFT)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.GEAR_RATIO)}
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
                    onAddOption={(newOption) => handleAddOption(newOption,ENGINE_ADVERT.GEAR_SHIFT_TYPE)}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.flywheelSAE14}
                    setValue={(val) => setForm({ ...form, flywheelSAE14: val })}
                    label="flywheelSAE14"
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.SILUMIN_FLYWHEEL_HOUSING)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.CAMSHAFT)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.CRANKSHAFT_ALLOY)}
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
                    label="crankcaseDesign"
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
                    label="engineMountingOrientation"
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
                    label="engineSuspension"
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.ENGINE_MOUNTING_TYPE)}
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
                    label="mountingBracketMaterial"
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
                    label="alignmentRequirements"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.engineBlock}
                    setValue={(val) => setForm({ ...form, engineBlock: val })}
                    label="engineBlock"
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
                    label="scheduledMaintenancePlan"
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
                    label="serviceInterval"
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
                    label="maintenanceLogRequirements"
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
                    label="availabilityOfSpareParts"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.operationMode}
                    setValue={(val) => setForm({ ...form, operationMode: val })}
                    label="operationMode"
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.LAST_SERVICE_DATE)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.ENGINE_MANAGEMENT_SYSTEM)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.ENGINE_CONTROL_SYSTEM)}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.unitInjectors}
                    setValue={(val) =>
                      setForm({ ...form, unitInjectors: val })
                    }
                    label="unitInjectors"
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.TURBO_CHARGER)}
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.TURBO_CHARGING)}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.starterMotor}
                    setValue={(val) => setForm({ ...form, starterMotor: val })}
                    label="starterMotor"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.protectionCovers}
                    setValue={(val) => setForm({ ...form, protectionCovers: val })}
                    label="protectionCovers"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.closedCrankcaseVentilation}
                    setValue={(val) => setForm({ ...form, closedCrankcaseVentilation: val })}
                    label="closedCrankcaseVentilation"
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.HEAT_EXCHANGER)}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.heatExchangerWithExpansionTank}
                    setValue={(val) => setForm({ ...form, heatExchangerWithExpansionTank: val })}
                    label="heatExchangerWithExpansionTank"
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
                    onAddOption={(newOption) => handleAddOption(newOption, ENGINE_ADVERT.SEA_WATER_PUMP)}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.seaWaterCooledChargeAirCooler}
                    setValue={(val) => setForm({ ...form, seaWaterCooledChargeAirCooler: val })}
                    label="seaWaterCooledChargeAirCooler"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.workingPrinciple}
                    setValue={(val) => setForm({ ...form, workingPrinciple: val })}
                    label="workingPrinciple"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.compressionRatio}
                    setValue={(val) => setForm({ ...form, compressionRatio: val })}
                    label="compressionRatio"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.workingPrinciple}
                    setValue={(val) => setForm({ ...form, workingPrinciple: val })}
                    label="workingPrinciple"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.PistonSpeedAt1500Rpm}
                    setValue={(val) => setForm({ ...form, PistonSpeedAt1500Rpm: val })}
                    label="PistonSpeedAt1500Rpm"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.PistonSpeedAt1800Rpm}
                    setValue={(val) => setForm({ ...form, PistonSpeedAt1800Rpm: val })}
                    label="PistonSpeedAt1800Rpm"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.firingOrder}
                    setValue={(val) => setForm({ ...form, firingOrder : val })}
                    label="firingOrder"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.pistons}
                    setValue={(val) => setForm({ ...form, pistons : val })}
                    label="pistons"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.connectionRods}
                    setValue={(val) => setForm({ ...form, connectionRods : val })}
                    label="connectionRods"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.auxiliaryPowerTakeOff}
                    setValue={(val) => setForm({ ...form, auxiliaryPowerTakeOff : val })}
                    label="auxiliaryPowerTakeOff"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.remoteControlSystems}
                    setValue={(val) => setForm({ ...form, remoteControlSystems : val })}
                    label={ENGINE_ADVERT.REMOTE_CONTROL_SYSTEMS}
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
