import { Form, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import DropdownWithRadio from "../DropdownWithRadio";
import Loader from "../Loader";
import InputComponentDynamic from "../InputComponentDynamic";

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
  engineDetails: {
    engineMake: { value: "", type: "radio", mandatory: true },
    engineModel: { value: "", type: "radio", mandatory: true },
    engineModelYear: { value: "", type: "radio", mandatory: true },
    engineType: { value: "", type: "radio", mandatory: true },
    typeDesignation: { value: "", type: "radio", mandatory: true },
    askingPrice: { value: "", type: "number", mandatory: true },
  },
  condition: {
    conditon: { value: "", type: "radio", mandatory: true },
    usedCondition: { value: "", type: "number", mandatory: true },
    seller: { value: "", type: "number", mandatory: true },
    offeredBy: { value: "", type: "number", mandatory: false },
    lastSurveyDate: { value: "", type: "date", mandatory: true },
    brokerValuation: { value: "", type: "number", mandatory: true },
  },
  general: {
    engineClassification: { value: "", type: "radio", mandatory: true },
    certification: { value: "", type: "radio", mandatory: true },
    manufacturerWarranty: { value: "", type: "radio", mandatory: false },
    engineSerialNumber: { value: "", type: "radio", mandatory: false },
    ceDesignCategory: { value: "", type: "radio", mandatory: true },
    numberDrives: { value: "", type: "radio", mandatory: true },
    numberEngines: { value: "", type: "radio", mandatory: true },
    rangeMiles: { value: "", type: "radio", mandatory: true },
    cruisingSpeed: { value: "", type: "radio", mandatory: true },
    driveType: { value: "", type: "radio", mandatory: true },
    engineHours: { value: "", type: "radio", mandatory: true },
    ignitionSystem: { value: "", type: "radio", mandatory: true },
    noiseLevel: { value: "", type: "radio", mandatory: true },
    engineSoundproofingKits: { value: "", type: "radio", mandatory: true },
  },
  transmission: {
    transmissionType: { value: "", type: "radio", mandatory: true },
    gearShift: { value: "", type: "radio", mandatory: false },
    gearRatio: { value: "", type: "radio", mandatory: false },
    gearShiftType: { value: "", type: "radio", mandatory: false },
    flywheelSAE14: { value: "", type: "radio", mandatory: false },
    siluminFlywheelHousing: { value: "", type: "radio", mandatory: false },
    camShaft: { value: "", type: "radio", mandatory: false },
    camShaftAlloy: { value: "", type: "radio", mandatory: false },
    crankcaseDesign: { value: "", type: "radio", mandatory: false },
  },
  installationAndMounting: {
    engineMountingOrientation: { value: "", type: "radio", mandatory: false },
    engineSuspension: { value: "", type: "radio", mandatory: false },
    engineMountingType: { value: "", type: "radio", mandatory: false },
    mountingBracketMaterial: { value: "", type: "radio", mandatory: false },
    alignmentRequirements: { value: "", type: "radio", mandatory: false },
    engineBlock: { value: "", type: "radio", mandatory: false },
  },
  serviceAndMaintenance: {
    scheduledMaintenancePlan: { value: "", type: "radio", mandatory: false },
    serviceInterval: { value: "", type: "radio", mandatory: false },
    maintenanceLogRequirements: { value: "", type: "radio", mandatory: false },
    availabilityOfSpareParts: { value: "", type: "radio", mandatory: true },
    operationMode: { value: "", type: "radio", mandatory: false },
    lastServiceDate: { value: "", type: "radio", mandatory: true },
  },
  equipment: {
    engineManagementSystem: { value: "", type: "radio", mandatory: false },
    engineControlSystem: { value: "", type: "radio", mandatory: false },
    unitInjectors: { value: "", type: "radio", mandatory: false },
    turboCharger: { value: "", type: "radio", mandatory: false },
    turboCharging: { value: "", type: "radio", mandatory: false },
    starterMotor: { value: "", type: "radio", mandatory: false },
    protectionCovers: { value: "", type: "radio", mandatory: false },
    closedCrankcaseVentilation: { value: "", type: "radio", mandatory: false },
    heatExchanger: { value: "", type: "radio", mandatory: false },
    heatExchangerWithExpansionTank: { value: "", type: "radio", mandatory: false },
    seaWaterPump: { value: "", type: "radio", mandatory: false },
    seaWaterCooledChargeAirCooler: { value: "", type: "radio", mandatory: false },
    workingPrinciple: { value: "", type: "radio", mandatory: false },
    compressionRatio: { value: "", type: "radio", mandatory: false },
    pistonSpeedAt1500Rpm: { value: "", type: "radio", mandatory: false },
    pistonSpeedAt1800Rpm: { value: "", type: "radio", mandatory: false },
    firingOrder: { value: "", type: "radio", mandatory: false },
    pistons: { value: "", type: "radio", mandatory: false },
    connectionRods: { value: "", type: "radio", mandatory: false },
    auxiliaryPowerTakeOff: { value: "", type: "radio", mandatory: false },
    remoteControlSystems: { value: "", type: "radio", mandatory: false },
  },
  dimensions: {
    displacement: { value: "", type: "radio", mandatory: true },
    length: { value: "", type: "radio", mandatory: true },
    width: { value: "", type: "radio", mandatory: true },
    height: { value: "", type: "radio", mandatory: true },
    lengthFromFrontEndOfFlywheelHousing: { value: "", type: "radio", mandatory: false },
    engineWeight: { value: "", type: "radio", mandatory: true },
    dryWeight: { value: "", type: "radio", mandatory: true },
    exclOilWeight: { value: "", type: "radio", mandatory: false },
    weightWithHeatExchanger: { value: "", type: "radio", mandatory: false },
    weightWithKeelCooling: { value: "", type: "radio", mandatory: false },
  },
  performance: {
    nominalRating: { value: "", type: "radio", mandatory: false },
    enginePerformance: { value: "", type: "radio", mandatory: false },
    maxPowerOutput: { value: "", type: "radio", mandatory: true },
    maxPowerBHP: { value: "", type: "radio", mandatory: true },
    maxSpeedKnots: { value: "", type: "radio", mandatory: true },
    supercharged: { value: "", type: "radio", mandatory: false },
    valveTrain: { value: "", type: "radio", mandatory: false },
    grossPowerFullLoadKW: { value: "", type: "radio", mandatory: false },
    grossPowerFullLoadHpMetric: { value: "", type: "number", mandatory: false },
    GrossPowerPropellerCurveKw: { value: "", type: "radio", mandatory: false },
    GrossPowerPropellerCurveHpMetric: { value: "", type: "number", mandatory: false },
    grossTorque: { value: "", type: "radio", mandatory: false },
    powerToWeightRatio: { value: "", type: "number", mandatory: false },
    engineEfficiency: { value: "", type: "radio", mandatory: true },
    engineSpeedRange: { value: "", type: "number", mandatory: true },
    maximumContinuousRating: { value: "", type: "radio", mandatory: false },
    continuousPower: { value: "", type: "radio", mandatory: false },
  },
  cylinders: {
    cylinderConfiguration: "",
    numberCylinders: "",
    cylindersAndArrangement: "",
    numberValves: "",
    valvePerCylinder: "",
    boreXStroke: "",
    bore: "",
    stroke: "",
  },
  rpm: {
    idleRPM: { value: "", type: "radio", mandatory: false },
    ratedSpeedRPM: { value: "", type: "radio", mandatory: true },
    rpmAtMaxPower: { value: "", type: "radio", mandatory: false },
  },
  torque: {
    maximumTorque: { value: "", type: "radio", mandatory: false },
    maximumTorqueAtSpeed: { value: "", type: "number", mandatory: true },
    torqueAtRatedSpeed: { value: "", type: "radio", mandatory: false },
  },
  coolingSystem: {
    afterCooled: { value: "", type: "radio", mandatory: false },
    coolingSystem: { value: "", type: "radio", mandatory: true },
    openCoolingSystem: { value: "", type: "radio", mandatory: false },
    closedCoolingSystem: { value: "", type: "radio", mandatory: false },
    intercooled: { value: "", type: "radio", mandatory: false },
    recommendedCoolant: { value: "", type: "radio", mandatory: false },
    typeOfCooling: { value: "", type: "radio", mandatory: false },
    heatDissipationRate: { value: "", type: "radio", mandatory: false },
    heatExchangerMaterial: { value: "", type: "radio", mandatory: false },
    engineLubrication: { value: "", type: "radio", mandatory: false },
    lubricationSystem: { value: "", type: "radio", mandatory: false },
    coolingCapacity: { value: "", type: "radio", mandatory: false },
    coolingFluidType: { value: "", type: "radio", mandatory: true },
    coolingSystemPressure: { value: "", type: "radio", mandatory: false },
    airFilterType: { value: "", type: "radio", mandatory: false },
    circulationPumpType: { value: "", type: "radio", mandatory: false },
    rawWaterpumpType: { value: "", type: "radio", mandatory: false },
  },
  propulsion: {
    propulsion: { value: "", type: "radio", mandatory: true },
    bowthruster: { value: "", type: "radio", mandatory: true },
    propulsionSystem: { value: "", type: "radio", mandatory: false },
    propulsionSystemType: { value: "", type: "radio", mandatory: false },
    propellerDiameter: { value: "", type: "radio", mandatory: false },
    propellerMaterial: { value: "", type: "radio", mandatory: false },
    propellerPitch: { value: "", type: "radio", mandatory: false },
    propellerType: { value: "", type: "radio", mandatory: false },
    propellerShaftDiameter: { value: "", type: "radio", mandatory: false },
    gearboxType: { value: "", type: "radio", mandatory: false },
    transmissionCooling: { value: "", type: "radio", mandatory: false },
    propellerBladeMaterial: { value: "", type: "radio", mandatory: true },
    propellerShaftMaterial: { value: "", type: "radio", mandatory: false },
    steeringSystem: { value: "", type: "radio", mandatory: false },
    steeringControlType: { value: "", type: "radio", mandatory: false },
    trimSystem: { value: "", type: "radio", mandatory: false },
    trimTabMaterial: { value: "", type: "radio", mandatory: false },
    trimTabType: { value: "", type: "radio", mandatory: false },
  },
  fuelSystem: {
    electronicFuelinjection: { value: "", type: "radio", mandatory: true },
    fuelPreFilter: { value: "", type: "radio", mandatory: false },
    fuelFilter: { value: "", type: "radio", mandatory: false },
    fuelFilterType: { value: "", type: "radio", mandatory: false },
    fuelReserve: { value: "", type: "radio", mandatory: false },
    fuelSystem: { value: "", type: "radio", mandatory: true },
    fuelTankCapacity: { value: "", type: "radio", mandatory: false },
    fuelType: { value: "", type: "radio", mandatory: true },
    lowestSpecificFuelConsumption: { value: "", type: "radio", mandatory: false },
    recommendedFuel: { value: "", type: "radio", mandatory: false },
    fuelConsumptionAtCruisingSpeed: { value: "", type: "radio", mandatory: false },
    fuelConsumptionRate: { value: "", type: "radio", mandatory: true },
    fuelConsumtpionAtFullLoad: { value: "", type: "radio", mandatory: false },
    fuelInjectionSystemType: { value: "", type: "radio", mandatory: false },
    fuelDeliveryPressure: { value: "", type: "radio", mandatory: false },
    fuelTankMaterial: { value: "", type: "radio", mandatory: true },
    fuelLineDiameter: { value: "", type: "radio", mandatory: false },
  },
  fuelConsumption: {
    fuelConsumption: { value: "", type: "radio", mandatory: false },
    fuelConsumptionHalfLoad: { value: "", type: "radio", mandatory: false },
    fuelConsumptionPropellerCurve: { value: "", type: "radio", mandatory: false },
    heatRejectionToCoolant: { value: "", type: "radio", mandatory: false },
  },
  oil: {
    oilFilter: { value: "", type: "radio", mandatory: false },
    oilFilterType: { value: "", type: "radio", mandatory: false },
    centrifugalOilCleaner: { value: "", type: "radio", mandatory: false },
    oilCooler: { value: "", type: "radio", mandatory: false },
    oilFiller: { value: "", type: "radio", mandatory: false },
    oilDipstick: { value: "", type: "radio", mandatory: false },
    recommendedOil: { value: "", type: "radio", mandatory: false },
    oilCapacity: { value: "", type: "radio", mandatory: false },
    oilChangeInterval: { value: "", type: "radio", mandatory: false },
    oilCoolingMethod: { value: "", type: "radio", mandatory: false },
    lubricationOilPressure: { value: "", type: "radio", mandatory: false },
    oilFilterBypassValve: { value: "", type: "radio", mandatory: false },
  },
  electricalSystem: {
    alternator: { value: "", type: "radio", mandatory: false },
    alternatorOutput: { value: "", type: "radio", mandatory: false },
    batteryType: { value: "", type: "radio", mandatory: false },
    batteryVoltage: { value: "", type: "radio", mandatory: false },
    generatorOutputKw: { value: "", type: "radio", mandatory: false },
    alternatorOutputAmps: { value: "", type: "radio", mandatory: false },
    starterMotorVoltage: { value: "", type: "radio", mandatory: false },
    engineControlUnitModel: { value: "", type: "radio", mandatory: false },
    batteryChargingSystem: { value: "", type: "radio", mandatory: false },
    integratedGenerator: { value: "", type: "radio", mandatory: false },
  },
  emissionsAndEnvironment: {
    emissionCompliance: { value: "", type: "radio", mandatory: false },
    exhaustSystem: { value: "", type: "radio", mandatory: false },
    exhaustSystemType: { value: "", type: "radio", mandatory: false },
    exhaustGasAfterTreatment: { value: "", type: "radio", mandatory: false },
    exhaustGasStatus: { value: "", type: "radio", mandatory: false },
    exhaustValveTiming: { value: "", type: "radio", mandatory: false },
    intakeValveTiming: { value: "", type: "radio", mandatory: false },
    emissionControlTechnology: { value: "", type: "radio", mandatory: false },
    noxEmissions: { value: "", type: "radio", mandatory: false },
    coxEmissions: { value: "", type: "radio", mandatory: false },
    soxEmissions: { value: "", type: "radio", mandatory: false },
    complianceWithIMOStandards: { value: "", type: "radio", mandatory: false },
  },
  safetyAndMonitoring: {
    emergencyStopSystem: { value: "", type: "radio", mandatory: false },
    engineMonitoringSystems: { value: "", type: "radio", mandatory: false },
    overheatProtection: { value: "", type: "radio", mandatory: false },
    lowOilPressureAlarm: { value: "", type: "radio", mandatory: false },
  },
};

export default function TrailersAdvert() {
  const [error, setError] = useState({});
  const hasFetched = useRef(false);
  const [engines, setEngines] = useState("");
  const [openKey, setOpenKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allSelectedOptions, setAllSelectedOptions] = useState({});
  const [engineDetails, setEngineDetails] = useState({
    engineMake: "",
    engineModel: "",
    engineModelYear: "",
    engineType: "",
    typeDesignation: "",
    askingPrice: "",
  });
  const [condition, setCondition] = useState({
    condition: "",
    usedCondition: "",
    seller: "",
    offeredBy: "",
    lastSurveyDate: new Date(),
    brokerValuation: "",
  });
  const [general, setGeneral] = useState({
    engineClassification: "",
    certification: "",
    manufacturerWarranty: "",
    engineSerialNumber: 0,
    ceDesignCategory: "",
    numberDrives: 0,
    numberEngines: 0,
    rangeMiles: 0,
    cruisingSpeed: "",
    driveType: "",
    engineHours: 0,
    ignitionSystem: "",
    noiseLevel: "",
    engineSoundproofingKits: "",
  });
  const [transmission, setTransmission] = useState({
    transmissionType: "",
    gearShift: "",
    gearRatio: "",
    gearShiftType: "",
    flywheelSAE14: "",
    siluminFlywheelHousing: "",
    camShaft: "",
    camShaftAlloy: "",
    crankcaseDesign: "",
  });
  const [installationAndMounting, setInstallationAndMounting] = useState({
    engineMountingOrientation: "",
    engineSuspension: "",
    engineMountingType: "",
    mountingBracketMaterial: "",
    alignmentRequirements: "",
    engineBlock: "",
  });
  const [serviceAndMaintenance, setServiceAndMaintenance] = useState({
    scheduledMaintenancePlan: "",
    serviceInterval: "",
    maintenanceLogRequirements: "",
    availabilityOfSpareParts: "",
    operationMode: "",
    lastServiceDate: "",
  });
  const [equipment, setEquipment] = useState({
    engineManagementSystem: "",
    engineControlSystem: "",
    unitInjectors: "",
    turboCharger: "",
    turboCharging: "",
    starterMotor: "",
    protectionCovers: "",
    closedCrankcaseVentilation: "",
    heatExchanger: "",
    heatExchangerWithExpansionTank: "",
    seaWaterPump: "",
    seaWaterCooledChargeAirCooler: "",
    workingPrinciple: "",
    compressionRatio: "",
    pistonSpeedAt1500Rpm: "",
    pistonSpeedAt1800Rpm: "",
    firingOrder: "",
    pistons: "",
    connectionRods: "",
    auxiliaryPowerTakeOff: "",
    remoteControlSystems: "",
  });
  const [dimensions, setDimensions] = useState({
    displacement: "",
    length: "",
    width: "",
    height: "",
    lengthFromFrontEndOfFlywheelHousing: "",
    engineWeight: "",
    dryWeight: "",
    exclOilWeight: "",
    weightWithHeatExchanger: "",
    weightWithKeelCooling: "",
  });
  const [performance, setPerformance] = useState({
    nominalRating: "",
    enginePerformance: "",
    maxPowerOutput: "",
    maxPowerBHP: "",
    maxSpeedKnots: "",
    supercharged: "",
    valveTrain: "",
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
  });
  const [cylinders, setCylinders] = useState({
    cylinderConfiguration: "",
    numberCylinders: "",
    cylindersAndArrangement: "",
    numberValves: "",
    valvePerCylinder: "",
    boreXStroke: "",
    bore: "",
    stroke: "",
  });
  const [rpm, setRpm] = useState({
    idleRPM: "",
    ratedSpeedRPM: "",
    rpmAtMaxPower: "",
  });
  const [torque, setTorque] = useState({
    maximumTorque: "",
    maximumTorqueAtSpeed: "",
    torqueAtRatedSpeed: "",
  });
  const [coolingSystem, setCoolingSystem] = useState({
    afterCooled: "",
    coolingSystem: "",
    openCoolingSystem: "",
    closedCoolingSystem: "",
    intercooled: "",
    recommendedCoolant: "",
    typeOfCooling: "",
    heatDissipationRate: "",
    heatExchangerMaterial: "",
    engineLubrication: "",
    lubricationSystem: "",
    coolingCapacity: "",
    coolingFluidType: "",
    coolingSystemPressure: "",
    airFilterType: "",
    circulationPumpType: "",
    rawWaterpumpType: "",
  });
  const [propulsion, setPropulsion] = useState({
    propulsion: "",
    bowthruster: "",
    propulsionSystem: "",
    propulsionSystemType: "",
    propellerDiameter: "",
    propellerMaterial: "",
    propellerPitch: "",
    propellerType: "",
    propellerShaftDiameter: "",
    gearboxType: "",
    transmissionCooling: "",
    propellerBladeMaterial: "",
    propellerShaftMaterial: "",
    steeringSystem: "",
    steeringControlType: "",
    trimSystem: "",
    trimTabMaterial: "",
    trimTabType: "",
  });
  const [fuelSystem, setFuelSystem] = useState({
    electronicFuelinjection: "",
    fuelPreFilter: "",
    fuelFilter: "",
    fuelFilterType: "",
    fuelReserve: "",
    fuelSystem: "",
    fuelTankCapacity: "",
    fuelType: "",
    lowestSpecificFuelConsumption: "",
    recommendedFuel: "",
    fuelConsumptionAtCruisingSpeed: "",
    fuelConsumptionRate: "",
    fuelConsumtpionAtFullLoad: "",
    fuelInjectionSystemType: "",
    fuelDeliveryPressure: "",
    fuelTankMaterial: "",
    fuelLineDiameter: "",
    });
  const [fuelConsumption, setFuelConsumption] = useState({
    fuelConsumption: "",
    fuelConsumptionHalfLoad: "",
    fuelConsumptionPropellerCurve: "",
    heatRejectionToCoolant: "",
  });
  const [oil,  setOil ] = useState({
    oilFilter: "",
    oilFilterType: "",
    centrifugalOilCleaner: "",
    oilCooler: "",
    oilFiller: "",
    oilDipstick: "",
    recommendedOil: "",
    oilCapacity: "",
    oilChangeInterval: "",
    oilCoolingMethod: "",
    lubricationOilPressure: "",
    oilFilterBypassValve: "",
  });
  const [electricalSystem, setElectricalSystem] = useState({
    alternator: "",
    alternatorOutput: "",
    batteryType: "",
    batteryVoltage: "",
    generatorOutputKw: "",
    alternatorOutputAmps: "",
    starterMotorVoltage: "",
    engineControlUnitModel: "",
    batteryChargingSystem: "",
    integratedGenerator: "",
  });
  const [emissionsAndEnvironment, setEmissionsAndEnvironment] = useState({
    emissionCompliance: "",
    exhaustSystem: "",
    exhaustSystemType: "",
    exhaustGasAfterTreatment: "",
    exhaustGasStatus: "",
    exhaustValveTiming: "",
    intakeValveTiming: "",
    emissionControlTechnology: "",
    noxEmissions: "",
    coxEmissions: "",
    soxEmissions: "",
    complianceWithIMOStandards: "",
  });
  const [safetyAndMonitoring, setSafetyAndMonitoring] = useState({
    emergencyStopSystem: "",
    engineMonitoringSystems: "",
    overheatProtection: "",
    lowOilPressureAlarm: "",
  });

  const checkRequired = () => {
    const errors = {};
  
    // Iterate over each section in typeDef
    Object.keys(typeDef).forEach((sectionKey) => {
      const section = typeDef[sectionKey];
      const sectionData = sections[sectionKey];
        Object.keys(section).forEach((fieldKey) => {
        const field = section[fieldKey];
        if (field.mandatory) {
          const fieldValue = sectionData[fieldKey];
          if (field.type === "radio") {
            if(field.value){
              console.log("001 field value--",field);
            }
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
    engineDetails,
    condition,
    general,
    performance,
    transmission,
    cylinders,
    equipment,
    propulsion,
    fuelSystem,
    coolingSystem,
    installationAndMounting,
    safetyAndMonitoring,
    serviceAndMaintenance,
    fuelConsumption,
    torque,
    rpm,
    oil,
    emissionsAndEnvironment,
    dimensions,
    electricalSystem,
  };

  const setStateFunctions = {
    engineDetails: setEngineDetails,
    condition: setCondition,
    general: setGeneral,
    transmission: setTransmission,
    installationAndMounting: setInstallationAndMounting,
    serviceAndMaintenance: setServiceAndMaintenance,
    equipment: setEquipment,
    dimensions: setDimensions,
    performance: setPerformance,
    cylinders: setCylinders,
    rpm: setRpm,
    torque: setTorque,
    coolingSystem: setCoolingSystem,
    propulsion: setPropulsion,
    fuelSystem: setFuelSystem,
    fuelConsumption: setFuelConsumption,
    oil: setOil,
    electricalSystem: setElectricalSystem,
    emissionsAndEnvironment: setEmissionsAndEnvironment,
    safetyAndMonitoring: setSafetyAndMonitoring,
  };

  const handleOptionSelect = (category, field, selectedOption) => {
    setAllSelectedOptions((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: selectedOption,
      },
    }));

    if (
      category === "identification" &&
      (field === "engineModel" || field === "engineModelYear" || field === "engineMake" || field === "engineType" || field === "typeDesignation")
    ) {
      // Fetch manufacturers based on selected trailerId
      fetchIdentificationSectionOptions(category, selectedOption, field);
    }

    if (category === "identification" && field === "typeDesignation") {
      fetchRelevantOptions();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (checkRequired()) {
        // If no errors, proceed with form submission logic
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

  const cacheKey = "enginesFilterData";
  const URL = "http://localhost:3001/api/advert_engine/";

  const fetchDistinctData = async () => {
    try {
      setLoading(true);
      const promises = Object.keys(sections).map(async (key) => {
        const response = await fetch(`${URL}engines`, {
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
  const fetchRelevantOptions = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${URL}relevant_data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ allSelectedOptions }),
      });
      const data = await response.json();
      const result = data.result;
      Object.keys(result).forEach((fieldKey) => {
        Object.keys(sections).forEach((sectionKey) => {
          if (sections[sectionKey][fieldKey] !== undefined) {
            const fieldValue = Array.isArray(result[fieldKey]) && result[fieldKey].length > 0
              ? result[fieldKey][0]
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
    }
  };
  const fetchIdentificationSectionOptions = async (
    category,
    selectedOption,
    Key
  ) => {
    try {
      setLoading(true);
      const tableName = "General";
      let fetchColumn;
      let requestBody = {};

      if (Key === "engineMake") {
        fetchColumn = "engineModel";
        requestBody = { engineMake: selectedOption };
      } else if (Key === "engineModel") {
        fetchColumn = "engineModelYear";
        requestBody = {
          engineMake: allSelectedOptions[category]?.engineMake,
          engineModel: selectedOption,
        };
      } else if (Key === "engineModelYear") {
        fetchColumn = "engineType";
        requestBody = {
          engineMake: allSelectedOptions[category]?.engineMake,
          engineModel: allSelectedOptions[category]?.engineModel,
          engineModelYear: selectedOption,
        };
      } else if (Key === "engineType") {
        fetchColumn = "typeDesignation";
        requestBody = {
          engineMake: allSelectedOptions[category]?.engineMake,
          engineModel: allSelectedOptions[category]?.engineModel,
          engineModelYear: allSelectedOptions[category]?.engineModelYear,
          engineType: selectedOption,
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
    setEngines((prevTrailers) => ({
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
          <div className="d-flex justify-content-center p-4 pt-5">
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
              name="engines-submit"
              id="engines-submit"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Container>
  );
}
