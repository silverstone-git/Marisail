import { Container } from "react-bootstrap";
import { Col, Form, Row } from "react-bootstrap";
import SelectComponent from "../SelectComponent";
import InputComponent from "../InputComponent";
// import MultipleSelectComponent from "../MultipleSelectComponent";
import { ENGINE_ADVERT } from "../../services/constants";
import DatePickerComponent from "../DatePickerComponent";
import { useEffect, useState } from "react";
import "./engineAdvert.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { useRef } from "react";
import Loader from "../Loader";

const EngineAdvert = () => {
  const cache = {};
  const hasFetched = useRef(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    engineMake: "",
    engineModel: "",
    engineModelYear: "",
    engineType: "",
    typeDesignation: "",

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

    condition: "",
    usedCondition: "",
    seller: "",
    offeredBy: "",
    lastSurveyDate: new Date(),
    brokerValuation: "",

    transmissionType: "",
    gearShift: "",
    gearRatio: "",
    gearShiftType: "",
    flywheelSAE14: "",
    siluminFlywheelHousing: "",
    camShaft: "",
    camShaftAlloy: "",
    crankcaseDesign: "",

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
    lastServiceDate: "",

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

    nominalRating: "",
    enginePerformance: "",
    maxPowerOutput: "",
    maxPowerBHP: 0,
    maxSpeedKnots: 0,
    supercharged: "",
    grossPowerFullLoadKW: 0,
    grossPowerFullLoadHpMetric: 0,
    GrossPowerPropellerCurveKw: 0,
    GrossPowerPropellerCurveHpMetric: 0,
    grossTorque: "",
    powerToWeightRatio: "",
    engineEfficiency: "",
    engineSpeedRange: "",
    maximumContinuousRating: "",
    continuousPower: "",

    cylinderConfiguration: "",
    numberCylinders: 0,
    cylindersAndArrangement: "",
    numberValves: 0,
    valvePerCylinder: "",
    boreXStroke: "",
    bore: "",
    stroke: "",

    idleRPM: "",
    ratedSpeedRPM: 0,
    rpmAtMaxPower: "",

    maximumTorque: 0,
    maximumTorqueAtSpeed: 0,
    torqueAtRatedSpeed: 0,

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

    fuelConsumption: "",
    fuelConsumptionHalfLoad: "",
    fuelConsumptionPropellerCurve: "",
    heatRejectionToCoolant: "",

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

    emergencyStopSystem: "",
    engineMonitoringSystems: "",
    overheatProtection: "",
    lowOilPressureAlarm: "",

    location: "",
    distance: "",
    globalAddressLookup: "",
  });
  const [error, setError] = useState({});
  const [openKey, setOpenKey] = useState(null);
  // const [relevantOptions, setRelevantOptions] = useState([]);
  const [engineMakeOptions, setEngineMakeOptions] = useState([]);
  const [engineModelOptions, setEngineModelOptions] = useState([]);
  const [unitInjectorsOptions, setUnitInjectorsOptions] = useState([]);
  const [engineModelYearOptions, setEngineModelYearOptions] = useState([]);
  const [conditionOptions, setConditionOptions] = useState([]);
  const [usedConditionOptions, setUsedConditionOptions] = useState([]);
  const [engineTypeOptions, setEngineTypeOptions] = useState([]);
  const [typeDesignationOptions, setTypeDesignationOptions] = useState([]);
  const [defaultOptions, setDefaultOptions] = useState(["No data found"]);
  const [sellerOptions, setSellerOptions] = useState([]);
  const [offeredByOptions, setOfferedByOptions] = useState([]);
  const [certificationOptions, setCertificationOptions] = useState([]);
  const [engineSerialNumberOptions, setEngineSerialNumberOptions] = useState(
    []
  );
  const [manufactureWarrantyOptions, setManufactureWarrantyOptions] = useState(
    []
  );
  const [engineClassifiableOptions, setEngineClassifiableOptions] = useState(
    []
  );
  const [ceDesignCategoryOptions, setCEDesignCategoryOptions] = useState([]);
  const [numberDrivesOptions, setNumberDrivesOptions] = useState([]);
  const [numberEnginesOptions, setNumberEnginesOptions] = useState([]);
  const [engineRangeOptions, setEngineRangeOptions] = useState([]);
  const [cruisingSpeedOptions, setCruisingSpeedOptions] = useState([]);
  const [driveTypeOptions, setDriveTypeOptions] = useState([]);

  const [engineHoursOptions, setEngineHoursOptions] = useState([]);
  const [ignitionSystemOptions, setIgnitionSystemOptions] = useState([]);
  const [noiseLevelOptions, setNoiseLevelOptions] = useState([]);
  const [engineSoundproofingKits, setEngineSoundproofingKits] = useState([]);

  const [nominalRatingOptions, setNominalRatingOptions] = useState([]);
  const [enginePerformanceOptions, setEnginePerformanceOptions] = useState([]);
  const [maxPowerOutputOptions, setMaxPowerOutputOptions] = useState([]);
  const [maxPowerBHPOptions, setMaxPowerBHPOptions] = useState([]);
  const [maxSpeedKnotsOptions, setMaxSpeedKnotsOptions] = useState([]);
  const [superchargedOptions, setSuperchargedOptions] = useState([]);
  const [valveTrainOptions, setValveTrainOptions] = useState([]);
  const [grossPowerFullLoadKwOptions, setGrossPowerFullLoadKwOptions] =
    useState([]);
  const [grossPowerFullLoadOptions, setGrossPowerFullLoadOptions] = useState(
    []
  );
  const [
    grossPowerPropellerCurveKwOptions,
    setGrossPowerPropellerCurveKwOptions,
  ] = useState([]);
  const [grossPowerPropellerCurveOptions, setGrossPowerPropellerCurveOptions] =
    useState([]);
  const [grossTorqueOptions, setGrossTorqueOptions] = useState([]);
  const [continuousPowerOptions, setContinuousPowerOptions] = useState([]);
  const [maxContinuousRatingOptions, setMaxContinuousRatingOptions] = useState(
    []
  );
  const [engineSpeedRangeOptions, setEngineSpeedRangeOptions] = useState([]);

  const [engineEfficiencyOptions, setEngineEfficiencyOptions] = useState([]);
  const [powerToWeightRatioOptions, setPowerToWeightRatioOptions] = useState(
    []
  );
  const [transmissionTypeOptions, setTransmissionTypeOptions] = useState([]);
  const [gearShiftOptions, setGearShiftOptions] = useState([]);
  const [gearRatioOptions, setGearRatioOptions] = useState([]);
  const [flywheelOptions, setFlywheelOptions] = useState([]);
  const [siluminFlywheelHousingOptions, setSiluminFlywheelHousingOptions] =
    useState([]);
  const [camShaftOptions, setCamShaftOptions] = useState([]);
  const [camShaftAlloyOptions, setCamShaftAlloyOptions] = useState([]);
  const [crankcaseDesignOptions, setCrankcaseDesignOptions] = useState([]);

  const [cylinderConfigurationOptions, setCylinderConfigurationOptions] =
    useState([]);
  const [numberCylindersOptions, setNumberCylindersOptions] = useState([]);
  const [cylindersArrangementOptions, setCylindersArrangementOptions] =
    useState([]);
  const [gearShiftTypeOptions, setGearShiftTypeOptions] = useState([]);
  const [alternatorOutputOptions, setAlternatorOutputOptions] = useState([]);

  const [numberValvesOptions, setNumberValvesOptions] = useState([]);
  const [boreStrokeOptions, setBoreStrokeOptions] = useState([]);
  const [boreOptions, setBoreOptions] = useState([]);
  const [idleRPMOptions, setIdleRPMOptions] = useState([]);
  const [rpmMaxPowerOptions, setRPMMaxPowerOptions] = useState([]);
  const [ratedSpeedOptions, setRatedSpeedOptions] = useState([]);
  const [maxTorqueOptions, setMaxTorqueOptions] = useState([]);
  const [maxTorqueRPMOptions, setMaxTorqueRPMOptions] = useState([]);
  const [torqueRatedSpeedOptions, setTorqueRatedSpeed] = useState([]);
  const [valvePerCylinderOptions, setValvePerCylinderOptions] = useState([]);

  const [compressionRatioOptions, setCompressionRatioOptions] = useState([]);
  const [workingPrincipleOptions, setWorkingPrincipleOptions] = useState([]);
  const [
    seaWaterCooledChargeAirCoolerOptions,
    setSeaWaterCooledChargeAirCoolerOptions,
  ] = useState([]);
  const [seaWaterPumpOptions, setSeaWaterPumpOptions] = useState([]);
  const [
    heatExchangerWithExpansionTankOptions,
    setHeatExchangerWithExpansionTankOptions,
  ] = useState([]);
  const [heatExchangerOptions, setHeatExchangerOptions] = useState([]);
  const [
    closedCrankcaseVentilationOptions,
    setClosedCrankcaseVentilationOptions,
  ] = useState([]);
  const [starterMotorOptions, setStarterMotorOptions] = useState([]);
  const [turboChargerOptions, setTurboChargerOptions] = useState([]);
  const [turboChargingOptions, setTurboChargingOptions] = useState([]);
  const [engineControlSystemOptions, setEngineControlSystemOptions] = useState(
    []
  );
  const [engineManagementSystemOptions, setEngineManagementSystemOptions] =
    useState([]);

  const [PistonSpeedAt1500RpmOptions, setPistonSpeedAt1500RpmOptions] =
    useState([]);
  const [PistonSpeedAt1800RpmOptions, setPistonSpeedAt1800RpmOptions] =
    useState([]);
  const [firingOrderOptions, setFiringOrderOptions] = useState([]);
  const [pistonsOptions, setPistonsOptions] = useState([]);
  const [connectionRodsOptions, setConnectionRodsOptions] = useState([]);
  const [auxiliaryPowerTakeOffOptions, setAuxiliaryPowerTakeOffOptions] =
    useState([]);
  const [remoteControlSystemsOptions, setRemoteControlSystemsOptions] =
    useState([]);
  const [protectionCoversOptions, setProtectionCoversOptions] = useState([]);

  const [propulsionOptions, setPropulsionOptions] = useState([]);
  const [bowthrusterOptions, setBowthrusterOptions] = useState([]);
  const [propulsionSystemOptions, setPropulsionSystemOptions] = useState([]);
  const [propulsionSystemTypeOptions, setPropulsionSystemTypeOptions] =
    useState([]);
  const [propellerDiameterOptions, setPropellerDiameterOptions] = useState([]);
  const [propellerMaterialOptions, setPropellerMaterialOptions] = useState([]);
  const [propellerPitchOptions, setPropellerPitchOptions] = useState([]);
  const [propellerTypeOptions, setPropellerTypeOptions] = useState([]);
  const [propellerShaftDiameterOptions, setPropellerShaftDiameterOptions] =
    useState([]);
  const [gearboxTypeOptions, setGearboxTypeOptions] = useState([]);
  const [transmissionCoolingOptions, setTransmissionCoolingOptions] = useState(
    []
  );
  const [propellerBladeMaterialOptions, setPropellerBladeMaterialOptions] =
    useState([]);
  const [propellerShaftMaterialOptions, setPropellerShaftMaterialOptions] =
    useState([]);
  const [steeringSystemOptions, setSteeringSystemOptions] = useState([]);
  const [steeringControlTypeOptions, setSteeringControlTypeOptions] = useState(
    []
  );
  const [trimSystemOptions, setTrimSystemOptions] = useState([]);
  const [trimTabMaterialOptions, setTrimTabMaterialOptions] = useState([]);
  const [trimTabTypeOptions, setTrimTabTypeOptions] = useState([]);

  const [fuelPreFilterOptions, setFuelPreFilterOptions] = useState([]);
  const [electronicFuelinjectionOptions, setElectronicFuelinjectionOptions] =
    useState([]);
  const [fuelFilterOptions, setFuelFilterOptions] = useState([]);
  const [fuelFilterTypeOptions, setFuelFilterTypeOptions] = useState([]);
  const [fuelReserveOptions, setFuelReserveOptions] = useState([]);
  const [fuelSystemOptions, setFuelSystemOptions] = useState([]);
  const [fuelTankCapacityOptions, setFuelTankCapacityOptions] = useState([]);
  const [fuelTypeOptions, setFuelTypeOptions] = useState([]);
  const [
    lowestSpecificFuelConsumptionOptions,
    setLowestSpecificFuelConsumptionOptions,
  ] = useState([]);
  const [recommendedFuelOptions, setRecommendedFuelOptions] = useState([]);
  const [afterCooledOptions, setAfterCooledOptions] = useState([]);
  const [fuelConsumptionRateOptions, setFuelConsumptionRateOptions] = useState(
    []
  );
  const [
    fuelConsumtpionAtFullLoadOptions,
    setFuelConsumtpionAtFullLoadOptions,
  ] = useState([]);
  const [fuelInjectionSystemTypeOptions, setFuelInjectionSystemTypeOptions] =
    useState([]);
  const [fuelDeliveryPressureOptions, setDuelDeliveryPressureOptions] =
    useState([]);
  const [fuelTankMaterialOptions, setFuelTankMaterialOptions] = useState([]);
  const [fuelLineDiameterOptions, setFuelLineDiameterOptions] = useState([]);
  const [coolingSystemOptions, setCoolingSystemOptions] = useState([]);
  const [closedCoolingSystemOptions, setClosedCoolingSystemOptions] = useState(
    []
  );
  const [openCoolingSystemOptions, setOpenCoolingSystemOptions] = useState([]);
  const [intercooledOptions, setIntercooledOptions] = useState([]);
  const [recommendedCoolantOptions, setRecommendedCoolantOptions] = useState(
    []
  );
  const [typeOfCoolingOptions, setTypeOfCoolingOptions] = useState([]);
  const [heatExchangerMaterialOptions, setHeatExchangerMaterialOptions] =
    useState([]);
  const [heatDissipationRateOptions, setHeatDissipationRateOptions] = useState(
    []
  );
  const [engineLubricationOptions, setEngineLubricationOptions] = useState([]);
  const [lubricationSystemOptions, setLubricationSystemOptions] = useState([]);
  const [coolingCapacityOptions, setCoolingCapacityOptions] = useState([]);
  const [coolingFluidTypeOptions, setCoolingFluidTypeOptions] = useState([]);
  const [coolingSystemPressureOptions, setCoolingSystemPressureOptions] =
    useState([]);
  const [airFilterTypeOptions, setAirFilterTypeOptions] = useState([]);
  const [circulationPumpTypeOptions, setCirculationPumpTypeOptions] = useState(
    []
  );
  const [rawWaterpumpTypeOptions, setRawWaterpumpTypeOptions] = useState([]);

  const [alternatorOptions, setAlternatorOptions] = useState([]);
  const [batteryTypeOptions, setBatteryTypeOptions] = useState([]);
  const [batteryVoltageOptions, setBatteryVoltageOptions] = useState([]);
  const [starterMotorVoltageOptions, setStarterMotorVoltageOptions] = useState(
    []
  );
  const [engineControlUnitModelOptions, setEngineControlUnitModelOptions] =
    useState([]);
  const [batteryChargingSystemOptions, setBatteryChargingSystemOptions] =
    useState([]);
  const [integratedGeneratorOptions, setIntegratedGeneratorOptions] = useState(
    []
  );
  const [alternatorOutputAmpsOptions, setAlternatorOutputAmpsOptions] =
    useState([]);
  const [emissionComplianceOptions, setEmissionComplianceOptions] = useState(
    []
  );
  const [exhaustSystemOptions, setExhaustSystemOptions] = useState([]);
  const [exhaustSystemTypeOptions, setExhaustSystemTypeOptions] = useState([]);
  const [exhaustGasAfterTreatmentOptions, setExhaustGasAfterTreatmentOptions] =
    useState([]);
  const [exhaustGasStatusOptions, setExhaustGasStatusOptions] = useState([]);
  const [exhaustValveTimingOptions, setExhaustValveTimingOptions] = useState(
    []
  );
  const [intakeValveTimingOptions, setIntakeValveTimingOptions] = useState([]);
  const [
    emissionControlTechnologyOptions,
    setEmissionControlTechnologyOptions,
  ] = useState([]);
  const [noxEmissionsOptions, setNoxEmissionsOptions] = useState([]);
  const [soxEmissionsOptions, setSoxEmissionsOptions] = useState([]);
  const [coxEmissionsOptions, setCoxEmissionsOptions] = useState([]);
  const [
    complianceWithIMOStandardsOptions,
    setComplianceWithIMOStandardsOptions,
  ] = useState([]);

  const [displacementOptions, setDisplacementOptions] = useState([]);
  const [lengthOptions, setLengthOptions] = useState([]);
  const [widthOptions, setWidthOptions] = useState([]);
  const [heightOptions, setHeightOptions] = useState([]);
  const [weightWithKeelCoolingOptions, setWeightWithKeelCoolingOptions] =
    useState([]);
  const [exclOilWeightOptions, setExclOilWeightOptions] = useState([]);
  const [dryWeightOptions, setDryWeightOptions] = useState([]);
  const [engineWeightOptions, setEngineWeightOptions] = useState([]);
  const [
    lengthFromFrontEndOfFlywheelHousingOptions,
    setLengthFromFrontEndOfFlywheelHousingOptions,
  ] = useState([]);
  const [weightWithHeatExchangerOptions, setWeightWithHeatExchangerOptions] =
    useState([]);

  const [serviceIntervalOptions, setServiceIntervalOptions] = useState([]);
  const [scheduledMaintenancePlanOptions, setScheduledMaintenancePlanOptions] =
    useState([]);
  const [
    maintenanceLogRequirementsOptions,
    setMaintenanceLogRequirementsOptions,
  ] = useState([]);
  const [availabilityOfSparePartsOptions, setAvailabilityOfSparePartsOptions] =
    useState([]);
  const [lastServiceDateOptions, setLastServiceDateOptions] = useState([]);
  const [operationModeOptions, setOperationModeOptions] = useState([]);

  const [
    engineMountingOrientationOptions,
    setEngineMountingOrientationOptions,
  ] = useState([]);
  const [engineSuspensionOptions, setEngineSuspensionOptions] = useState([]);
  const [engineMountingTypeOptions, setEngineMountingTypeOptions] = useState(
    []
  );
  const [mountingBracketMaterialOptions, setMountingBracketMaterialOptions] =
    useState([]);
  const [alignmentRequirementsOptions, setAlignmentRequirementsOptions] =
    useState([]);
  const [engineBlockOptions, setEngineBlockOptions] = useState([]);

  const [engineMonitoringSystemsOptions, setEngineMonitoringSystemsOptions] =
    useState([]);
  const [overheatProtectionOptions, setOverheatProtectionOptions] = useState(
    []
  );
  const [lowOilPressureAlarmOptions, setLowOilPressureAlarmOptions] = useState(
    []
  );
  const [emergencyStopSystemOptions, setEmergencyStopSystemOptions] = useState(
    []
  );

  const [fuelConsumptionOptions, setFuelConsumptionOptions] = useState([]);
  const [fuelConsumptionHalfLoadOptions, setFuelConsumptionHalfLoadOptions] =
    useState([]);
  const [
    fuelConsumptionPropellerCurveOptions,
    setFuelConsumptionPropellerCurveOptions,
  ] = useState([]);
  const [heatRejectionToCoolantOptions, setHeatRejectionToCoolantOptions] =
    useState([]);

  const [oilFilterOptions, setOilFilterOptions] = useState([]);
  const [oilFilterTypeOptions, setOilFilterTypeOptions] = useState([]);
  const [centrifugalOilCleanerOptions, setCentrifugalOilCleanerOptions] =
    useState([]);
  const [oilCoolerOptions, setOilCoolerOptions] = useState([]);
  const [oilFillerOptions, setOilFillerOptions] = useState([]);
  const [oilDipstickOptions, setOilDipstickOptions] = useState([]);
  const [recommendedOilOptions, setRecommendedOilOptions] = useState([]);
  const [oilCapacityOptions, setOilCapacityOptions] = useState([]);
  const [oilChangeIntervalOptions, setOilChangeIntervalOptions] = useState([]);
  const [oilCoolingMethodOptions, setOilCoolingMethodOptions] = useState([]);
  const [lubricationOilPressureOptions, setLubricationOilPressureOptions] =
    useState([]);
  const [oilFilterBypassValveOptions, setOilFilterBypassValveOptions] =
    useState([]);

  const requiredField = {
    engineMake: true,
    engineModel: true,
    engineModelYear: true,
    engineType: true,
    typeDesignation: true,

    // marisailVesselId: true,
    engineClassification: true,
    certification: true,
    manufacturerWarranty: false,
    engineSerialNumber: false,
    ceDesignCategory: true,
    numberDrives: true,
    numberEngines: true,
    rangeMiles: true,
    cruisingSpeed: true,
    driveType: true,
    engineHours: true,
    ignitionSystem: true,
    noiseLevel: true,
    engineSoundproofingKits: false,

    condition: true,
    usedCondition: true,
    seller: true,
    offeredBy: false,
    lastSurveyDate: true,
    brokerValuation: true,

    transmissionType: true,
    gearShift: false,
    gearRatio: false,
    gearShiftType: false,
    flywheelSAE14: false,
    siluminFlywheelHousing: false,
    camShaft: false,
    camShaftAlloy: false,
    crankcaseDesign: false,

    engineMountingOrientation: false,
    engineSuspension: false,

    mountingBracketMaterial: false,
    alignmentRequirements: false,
    engineBlock: false,

    scheduledMaintenancePlan: false,
    serviceInterval: false,
    maintenanceLogRequirements: false,
    availabilityOfSpareParts: true,
    operationMode: false,
    lastServiceDate: true,

    engineManagementSystem: false,
    engineControlSystem: false,
    unitInjectors: false,
    turboCharger: false,
    turboCharging: false,
    starterMotor: false,
    protectionCovers: false,
    closedCrankcaseVentilation: false,
    heatExchanger: false,
    heatExchangerWithExpansionTank: false,
    seaWaterPump: false,
    seaWaterCooledChargeAirCooler: false,
    workingPrinciple: false,
    compressionRatio: false,
    pistonSpeedAt1500Rpm: false,
    pistonSpeedAt1800Rpm: false,
    firingOrder: false,
    pistons: false,
    connectionRods: false,
    auxiliaryPowerTakeOff: false,
    remoteControlSystems: false,

    displacement: true,
    length: true,
    width: true,
    height: true,
    lengthFromFrontEndOfFlywheelHousing: false,
    engineWeight: true,
    dryWeight: true,
    exclOilWeight: false,
    weightWithHeatExchanger: false,
    weightWithKeelCooling: false,

    nominalRating: false,
    enginePerformance: false,
    maxPowerOutput: false,
    maxPowerBHP: true,
    maxSpeedKnots: true,
    supercharged: false,
    grossPowerFullLoadKW: false,
    grossPowerFullLoadHpMetric: false,
    GrossPowerPropellerCurveKw: false,
    GrossPowerPropellerCurveHpMetric: false,
    grossTorque: false,
    powerToWeightRatio: false,
    engineEfficiency: true,
    engineSpeedRange: true,
    maximumContinuousRating: false,
    continuousPower: false,

    cylinderConfiguration: false,
    numberCylinders: true,
    cylindersAndArrangement: false,
    numberValves: true,
    valvePerCylinder: false,
    boreXStroke: false,
    bore: false,
    stroke: false,

    idleRPM: false,
    ratedSpeedRPM: true,
    rpmAtMaxPower: false,

    maximumTorque: false,
    maximumTorqueAtSpeed: true,
    torqueAtRatedSpeed: false,

    afterCooled: false,
    coolingSystem: true,
    openCoolingSystem: false,
    closedCoolingSystem: false,
    intercooled: false,
    recommendedCoolant: false,
    typeOfCooling: false,
    heatDissipationRate: false,
    heatExchangerMaterial: false,
    engineLubrication: false,
    lubricationSystem: false,
    coolingCapacity: false,
    coolingFluidType: true,
    coolingSystemPressure: false,
    airFilterType: false,
    circulationPumpType: false,
    rawWaterpumpType: false,

    propulsion: true,
    bowthruster: true,
    propulsionSystem: false,
    propulsionSystemType: false,
    propellerDiameter: false,
    propellerMaterial: false,
    propellerPitch: false,
    propellerType: false,
    propellerShaftDiameter: false,
    gearboxType: false,
    transmissionCooling: false,
    propellerBladeMaterial: true,
    propellerShaftMaterial: false,
    steeringSystem: false,
    steeringControlType: false,
    trimSystem: false,
    trimTabMaterial: false,
    trimTabType: false,

    electronicFuelinjection: false,
    fuelPreFilter: false,
    fuelFilter: false,
    fuelFilterType: false,
    fuelReserve: false,
    fuelSystem: true,
    fuelTankCapacity: false,
    fuelType: true,
    lowestSpecificFuelConsumption: false,
    recommendedFuel: false,
    fuelConsumptionAtCruisingSpeed: false,
    fuelConsumptionRate: true,
    fuelConsumtpionAtFullLoad: false,
    fuelInjectionSystemType: false,
    fuelDeliveryPressure: false,
    fuelTankMaterial: true,
    fuelLineDiameter: false,

    fuelConsumption: false,
    fuelConsumptionHalfLoad: false,
    fuelConsumptionPropellerCurve: false,
    heatRejectionToCoolant: false,

    oilFilter: false,
    oilFilterType: false,
    centrifugalOilCleaner: false,
    oilCooler: false,
    oilFiller: false,
    oilDipstick: false,
    recommendedOil: false,
    oilCapacity: false,
    oilChangeInterval: false,
    oilCoolingMethod: false,
    lubricationOilPressure: false,
    oilFilterBypassValve: false,

    alternator: false,
    alternatorOutput: false,
    batteryType: false,
    batteryVoltage: false,
    generatorOutputKw: false,
    alternatorOutputAmps: false,
    starterMotorVoltage: false,
    engineControlUnitModel: false,
    batteryChargingSystem: false,
    integratedGenerator: false,

    emissionCompliance: false,
    exhaustSystem: false,
    exhaustSystemType: false,
    exhaustGasAfterTreatment: false,
    exhaustGasStatus: false,
    exhaustValveTiming: false,
    intakeValveTiming: false,
    emissionControlTechnology: false,
    noxEmissions: false,
    coxEmissions: false,
    soxEmissions: false,
    complianceWithIMOStandards: false,

    emergencyStopSystem: false,
    engineMonitoringSystems: false,
    overheatProtection: false,
    lowOilPressureAlarm: false,

    location: false,
    distance: false,
    globalAddressLookup: false,
  };
  const checkRequired = () => {
    const errors = {};
    Object.keys(requiredField).forEach((key) => {
      const value = form[key];
      if (requiredField[key] && String(value).trim() === "") {
        errors[key] = true;
        // console.log("001 Error Key.", requiredField[key]);
      }
    });
    setError(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (checkRequired()) {
        // If no errors, proceed with form submission logic
        console.log("001 Form is valid, submitting...", form);
        localStorage.setItem("advertise_engine", JSON.stringify(form));
      } else {
        console.log("001 Form has errors, not submitting.", error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchRelevantData = async (
    engineMake,
    engineModel,
    engineModelYear,
    engineType,
    typeDesignation
  ) => {
    const URL = `http://localhost:3001/api/advert_engine/relevant_data?engine_make=${encodeURIComponent(
      engineMake
    )}&engine_model=${encodeURIComponent(
      engineModel
    )}&engine_modelyear=${encodeURIComponent(
      engineModelYear
    )}&engine_type=${encodeURIComponent(
      engineType
    )}&type_designation=${encodeURIComponent(typeDesignation)}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      console.log(
        "001 Relevant data--",
        toJson.result.engine_general.condition_1[0]
      );

      setForm((prevForm) => ({
        ...prevForm,
        engineMake: toJson.result.engine_general.engine_make[0] || "",
        engineModel: toJson.result.engine_general.engine_model[0] || "",
        engineModelYear: toJson.result.engine_general.engine_modelyear[0] || "",
        engineType: toJson.result.engine_general.engine_type[0] || "",
        typeDesignation: toJson.result.engine_general.type_designation[0] || "",
        condition: toJson.result.engine_general.condition_1[0] || "",
        usedCondition: toJson.result.engine_general.used_condition[0] || "",
        seller: toJson.result.engine_general.seller[0] || "",
        offeredBy: toJson.result.engine_general.offered_by[0] || "",
        lastSurveyDate:
          new Date(toJson.result.engine_general.lastsurvey_date[0]) ||
          new Date(),
        brokerValuation: toJson.result.engine_general.broker_valuation[0] || "",
        engineClassification:
          toJson.result.engine_general.engine_classifiable[0],
        certification: toJson.result.engine_general.engine_certification,
        manufacturerWarranty: toJson.result.engine_general.manufacture_warranty,
        engineSerialNumber: toJson.result.engine_general.engine_serial,
        ceDesignCategory: toJson.result.engine_general.ce_category,
        numberDrives: toJson.result.engine_general.number_drives,
        numberEngines: toJson.result.engine_general.number_engines,
        rangeMiles: toJson.result.engine_general.engine_range,
        cruisingSpeed: toJson.result.engine_general.cruise_speed,
        driveType: toJson.result.engine_general.drive_type,
        engineHours: toJson.result.engine_general.engine_hours,
        ignitionSystem: toJson.result.engine_general.ignition_system,
        noiseLevel: toJson.result.engine_general.noiselevel_db,
        engineSoundproofingKits:
          toJson.result.engine_general.enginesound_proofingkits,

        transmissionType: toJson.result.engine_transmission.transmission_type,
        gearShift: toJson.result.engine_transmission.gear_shift,
        gearRatio: toJson.result.engine_transmission.gear_ratio,
        gearShiftType: toJson.result.engine_transmission.gearshift_type,
        flywheelSAE14: toJson.result.engine_transmission.flywheel_SAE,
        siluminFlywheelHousing:
          toJson.result.engine_transmission.flywheel_housing,
        camShaft: toJson.result.engine_transmission.camshaft,
        camShaftAlloy: toJson.result.engine_transmission.crankshaft_alloy,
        crankcaseDesign: toJson.result.engine_transmission.crankcase_design,

        engineMountingOrientation:
          toJson.result.engine_mounting.enginemounting_orientation,
        engineSuspension: toJson.result.engine_mounting.engine_suspension,

        mountingBracketMaterial:
          toJson.result.engine_mounting.mountingbracket_material,
        alignmentRequirements:
          toJson.result.engine_mounting.alignment_requirements,
        engineBlock: toJson.result.engine_mounting.engine_block,

        scheduledMaintenancePlan:
          toJson.result.engine_maintenance.scheduled_maintenanceplan,
        serviceInterval: toJson.result.engine_maintenance.service_interval,
        maintenanceLogRequirements:
          toJson.result.engine_maintenance.maintenancelog_requirements,
        availabilityOfSpareParts:
          toJson.result.engine_maintenance.availability_spareparts,
        operationMode: toJson.result.engine_maintenance.operation_mode,
        lastServiceDate: toJson.result.engine_maintenance.last_servicedate,

        engineManagementSystem: toJson.result.engine_equipment.EMS,
        engineControlSystem:
          toJson.result.engine_equipment.engine_controlsystem,
        unitInjectors: toJson.result.engine_equipment.unit_injectors,
        turboCharger: toJson.result.engine_equipment.turbocharger,
        turboCharging: toJson.result.engine_equipment.turbo_charging,
        starterMotor: toJson.result.engine_equipment.starter_motor,
        protectionCovers: toJson.result.engine_equipment.protection_covers,
        closedCrankcaseVentilation:
          toJson.result.engine_equipment.crankcase_ventilation,
        heatExchanger: toJson.result.engine_equipment.heat_exchanger,
        heatExchangerWithExpansionTank:
          toJson.result.engine_equipment.heat_exchanger_WET,
        seaWaterPump: toJson.result.engine_equipment.seawater_pump,
        seaWaterCooledChargeAirCooler:
          toJson.result.engine_equipment.charge_aircooler,
        workingPrinciple: toJson.result.engine_equipment.working_principle,
        compressionRatio: toJson.result.engine_equipment.compression_ratio,
        pistonSpeedAt1500Rpm: toJson.result.engine_equipment.pistonspeed_1500,
        pistonSpeedAt1800Rpm: toJson.result.engine_equipment.pistonspeed_1800,
        firingOrder: toJson.result.engine_equipment.firing_order,
        pistons: toJson.result.engine_equipment.pistons,
        connectionRods: toJson.result.engine_equipment.connection_rods,
        auxiliaryPowerTakeOff:
          toJson.result.engine_equipment.auxiliarypower_takeoff,
        remoteControlSystems:
          toJson.result.engine_equipment.remote_controlsystems,

        displacement: toJson.result.engine_dimensions.displacement,
        length: toJson.result.engine_dimensions.length,
        width: toJson.result.engine_dimensions.width,
        height: toJson.result.engine_dimensions.height,
        lengthFromFrontEndOfFlywheelHousing:
          toJson.result.engine_dimensions.Engine_length,
        engineWeight: toJson.result.engine_dimensions.engine_weight,
        dryWeight: toJson.result.engine_dimensions.dry_weight,
        exclOilWeight: toJson.result.engine_dimensions.weight_excloil,
        weightWithHeatExchanger:
          toJson.result.engine_dimensions.weight_heatexchanger,
        weightWithKeelCooling:
          toJson.result.engine_dimensions.weight_keelcooling,

        nominalRating: toJson.result.engine_performance.nominal_rating,
        enginePerformance: toJson.result.engine_performance.engine_performance,
        maxPowerOutput: toJson.result.engine_performance.max_poweroutput,
        maxPowerBHP: toJson.result.engine_performance.max_power,
        maxSpeedKnots: toJson.result.engine_performance.max_speed,
        supercharged: toJson.result.engine_performance.supercharged,
        grossPowerFullLoadKW: toJson.result.engine_performance.GP_fullloadKW,
        grossPowerFullLoadHpMetric:
          toJson.result.engine_performance.GP_fullloadmetric,
        GrossPowerPropellerCurveKw:
          toJson.result.engine_performance.GP_propellercurveKW,
        GrossPowerPropellerCurveHpMetric:
          toJson.result.engine_performance.GP_propellercurvemetric,
        grossTorque: toJson.result.engine_performance.gross_torque,
        powerToWeightRatio:
          toJson.result.engine_performance.powertoweight_ratio,
        engineEfficiency: toJson.result.engine_performance.engine_efficiency,
        engineSpeedRange: toJson.result.engine_performance.Engine_speedrange,
        maximumContinuousRating:
          toJson.result.engine_performance.Max_Continuousrating,
        continuousPower: toJson.result.engine_performance.continuouspower_KWHP,

        cylinderConfiguration:
          toJson.result.engine_performance.cylinder_configuration,
        numberCylinders: toJson.result.engine_performance.number_cylinders,
        cylindersAndArrangement:
          toJson.result.engine_performance.cylinders_arrangement,
        numberValves: toJson.result.engine_performance.number_valves,
        valvePerCylinder: toJson.result.engine_performance.valve_percylinder,
        boreXStroke: toJson.result.engine_performance.bore_stroke,
        bore: toJson.result.engine_performance.bore,
        stroke: toJson.result.engine_performance.bore_stroke,

        idleRPM: "",
        ratedSpeedRPM: "",
        rpmAtMaxPower: "",

        maximumTorque: "",
        maximumTorqueAtSpeed: "",
        torqueAtRatedSpeed: "",

        afterCooled: toJson.result.engine_cooling.after_cooled,
        coolingSystem: toJson.result.engine_cooling.cooling_system,
        openCoolingSystem: toJson.result.engine_cooling.open_coolingsystem,
        closedCoolingSystem: toJson.result.engine_cooling.closed_coolingsystem,
        intercooled: toJson.result.engine_cooling.cooling_system,
        recommendedCoolant: toJson.result.engine_cooling.recommended_coolant,
        typeOfCooling: toJson.result.engine_cooling.cooling_type,
        heatDissipationRate: toJson.result.engine_cooling.heat_dissipationrate,
        heatExchangerMaterial:
          toJson.result.engine_cooling.heat_exchangermaterial,
        engineLubrication: toJson.result.engine_cooling.engine_lubrication,
        lubricationSystem: toJson.result.engine_cooling.lubrication_system,
        coolingCapacity: toJson.result.engine_cooling.cooling_system,
        coolingFluidType: toJson.result.engine_cooling.cooling_fluidtype,
        coolingSystemPressure:
          toJson.result.engine_cooling.cooling_systempressure,
        airFilterType: toJson.result.engine_cooling.air_filtertype,
        circulationPumpType: toJson.result.engine_cooling.circulation_pumptype,
        rawWaterpumpType: toJson.result.engine_cooling.rawwater_pumptype,

        propulsion: toJson.result.engine_propulsion.propulsion,
        bowthruster: toJson.result.engine_propulsion.bowthruster,
        propulsionSystem: toJson.result.engine_propulsion.propulsion_systemtype,
        propulsionSystemType: toJson.result.engine_propulsion.propulsion,
        propellerDiameter: toJson.result.engine_propulsion.propeller_diameter,
        propellerMaterial: toJson.result.engine_propulsion.propeller_material,
        propellerPitch: toJson.result.engine_propulsion.propeller_pitch,
        propellerType: toJson.result.engine_propulsion.propeller_type,
        propellerShaftDiameter:
          toJson.result.engine_propulsion.propeller_shaftdiameter,
        gearboxType: toJson.result.engine_propulsion.gearbox_type,
        transmissionCooling:
          toJson.result.engine_propulsion.transmission_cooling,
        propellerBladeMaterial:
          toJson.result.engine_propulsion.propeller_bladematerial,
        propellerShaftMaterial:
          toJson.result.engine_propulsion.propeller_shaftmaterial,
        steeringSystem: toJson.result.engine_propulsion.steering_system,
        steeringControlType:
          toJson.result.engine_propulsion.steering_controltype,
        trimSystem: toJson.result.engine_propulsion.trim_system,
        trimTabMaterial: toJson.result.engine_propulsion.trim_tabmaterial,
        trimTabType: toJson.result.engine_propulsion.trim_tab_type,

        electronicFuelinjection: toJson.result.engine_fuel.EFI,
        fuelPreFilter: toJson.result.engine_fuel.fuel_prefilter, //
        fuelFilter: toJson.result.engine_fuel.fuel_filter,
        fuelFilterType: toJson.result.engine_fuel.fuel_filtertype,
        fuelReserve: toJson.result.engine_fuel.fuel_reserve,
        fuelSystem: toJson.result.engine_fuel.fuel_system,
        fuelTankCapacity: toJson.result.engine_fuel.fuel_tankcapacity,
        fuelType: toJson.result.engine_fuel.fuel_type,
        lowestSpecificFuelConsumption:
          toJson.result.engine_fuel.lowest_fuelconsumption,
        recommendedFuel: toJson.result.engine_fuel.recommended_fuel,
        fuelConsumptionAtCruisingSpeed:
          toJson.result.engine_fuel.fuel_prefilter, //
        fuelConsumptionRate: toJson.result.engine_fuel.fuel_consumptionrate,
        fuelConsumtpionAtFullLoad: toJson.result.engine_fuel.FC_fullload,
        fuelInjectionSystemType:
          toJson.result.engine_fuel.FuelInjection_systemtype,
        fuelDeliveryPressure: toJson.result.engine_fuel.Fuel_deliverypressure,
        fuelTankMaterial: toJson.result.engine_fuel.Fuel_tankmaterial,
        fuelLineDiameter: toJson.result.engine_fuel.fuel_linediameter,

        fuelConsumption: toJson.result.engine_fuel.FC_3Quarterload,
        fuelConsumptionHalfLoad: toJson.result.engine_fuel.FC_halfload,
        fuelConsumptionPropellerCurve:
          toJson.result.engine_fuel.FC_propellercurve,
        heatRejectionToCoolant: toJson.result.engine_fuel.heat_rejection,

        oilFilter: toJson.result.engine_oil.oil_filter,
        oilFilterType: toJson.result.engine_oil.oil_filtertype,
        centrifugalOilCleaner: toJson.result.engine_oil.centrifugal_oilcleaner,
        oilCooler: toJson.result.engine_oil.oil_cooler,
        oilFiller: toJson.result.engine_oil.oil_filler,
        oilDipstick: toJson.result.engine_oil.oil_dipstick,
        recommendedOil: toJson.result.engine_oil.recommended_oil,
        oilCapacity: toJson.result.engine_oil.oil_capacity,
        oilChangeInterval: toJson.result.engine_oil.oil_changeinterval,
        oilCoolingMethod: toJson.result.engine_oil.oil_coolingmethod,
        lubricationOilPressure:
          toJson.result.engine_oil.lubrication_oilpressure,
        oilFilterBypassValve: toJson.result.engine_oil.oilfilter_bypassvalve,

        alternator: toJson.result.engine_electrical.alternator,
        alternatorOutput: toJson.result.engine_electrical.alternator_outputAMPS,
        batteryType: toJson.result.engine_electrical.battery_type,
        batteryVoltage: toJson.result.engine_electrical.battery_voltage,
        generatorOutputKw: toJson.result.engine_electrical.integrated_generator,
        alternatorOutputAmps:
          toJson.result.engine_electrical.integrated_generator,
        starterMotorVoltage:
          toJson.result.engine_electrical.starter_MotorVoltage,
        engineControlUnitModel: toJson.result.engine_electrical.ECU_Model,
        batteryChargingSystem:
          toJson.result.engine_electrical.Battery_ChargingSystem,
        integratedGenerator:
          toJson.result.engine_electrical.integrated_generator,

        emissionCompliance: toJson.result.engine_emissions.Emission_compliance,
        exhaustSystem: toJson.result.engine_emissions.exhaust_system,
        exhaustSystemType: toJson.result.engine_emissions.exhaust_systemtype,
        exhaustGasAfterTreatment:
          toJson.result.engine_emissions.exhaustgas_aftertreatment,
        exhaustGasStatus: toJson.result.engine_emissions.exhaustGas_status,
        exhaustValveTiming: toJson.result.engine_emissions.exhaust_valvetiming,
        intakeValveTiming: toJson.result.engine_emissions.intake_valvetiming,
        emissionControlTechnology:
          toJson.result.engine_emissions.emission_controltechnology,
        noxEmissions: toJson.result.engine_emissions.NOx_Emission,
        coxEmissions: toJson.result.engine_emissions.COx_Emission,
        soxEmissions: toJson.result.engine_emissions.SOx_Emission,
        complianceWithIMOStandards:
          toJson.result.engine_emissions.compliance_internationalmaritime,

        emergencyStopSystem: toJson.result.engine_safety.emergency_stopsystem,
        engineMonitoringSystems:
          toJson.result.engine_safety.engine_monitoringsystem,
        overheatProtection: toJson.result.engine_safety.overheat_protection,
        lowOilPressureAlarm: toJson.result.engine_safety.lowoil_pressurealarm,

        location: "",
        distance: "",
        globalAddressLookup: "",
      }));
    } catch (err) {
      console.log(err);
    } finally {
      console.log("001 form options--", form);
    }
  };
  const fetchDistinctValues = async (
    engineMake,
    engineModel,
    engineModelYear,
    engineType,
    typeDesignation,
    fetchColumn
  ) => {
    const URL = `http://localhost:3001/api/advert_engine/engine_general/${fetchColumn}/distinct?engine_make=${encodeURIComponent(
      engineMake
    )}&engine_model=${encodeURIComponent(
      engineModel
    )}&engine_modelyear=${encodeURIComponent(
      engineModelYear
    )}&engine_type=${encodeURIComponent(
      engineType
    )}&type_designation=${encodeURIComponent(typeDesignation)}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      if (fetchColumn == "engine_model") {
        setEngineModelOptions(toJson.result);
      } else if (fetchColumn == "engine_make") {
        setEngineMakeOptions(toJson.result);
      } else if (fetchColumn == "engine_modelyear") {
        setEngineModelYearOptions(toJson.result);
      } else if (fetchColumn == "engine_type") {
        setEngineTypeOptions(toJson.result);
      } else if (fetchColumn == "type_designation") {
        setTypeDesignationOptions(toJson.result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchGeneralColumnsList = async () => {
    const tableName = "engine_general";
    const cacheKey = tableName;
    if (cache[cacheKey]) {
      console.log("001 cache key if--", cacheKey);
      // Return cached data if available
      return cache[cacheKey];
    }
    const URL = `http://localhost:3001/api/advert_engine/columns/${tableName}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      cache[cacheKey] = toJson.result.engine_general;

      console.log("001 to json--", toJson.result.engine_general);
      if (toJson.ok) {
        setEngineMakeOptions(toJson.result.engine_general.engine_make);
        setEngineModelOptions(toJson.result.engine_general.engine_model);
        setEngineModelYearOptions(
          toJson.result.engine_general.engine_modelyear
        );
        setEngineTypeOptions(toJson.result.engine_general.engine_type);
        setTypeDesignationOptions(
          toJson.result.engine_general.type_designation
        );

        setEngineSerialNumberOptions(
          toJson.result.engine_general.engine_serial
        );
        setCEDesignCategoryOptions(toJson.result.engine_general.ce_category);
        setNumberDrivesOptions(toJson.result.engine_general.number_drives);
        setNumberEnginesOptions(toJson.result.engine_general.number_engines);
        setCertificationOptions(
          toJson.result.engine_general.engine_certification
        );
        setEngineRangeOptions(toJson.result.engine_general.engine_range);
        setCruisingSpeedOptions(toJson.result.engine_general.cruise_speed);
        setDriveTypeOptions(toJson.result.engine_general.drive_type);
        setEngineHoursOptions(toJson.result.engine_general.engine_hours);
        setIgnitionSystemOptions(toJson.result.engine_general.ignition_system);
        setNoiseLevelOptions(toJson.result.engine_general.noiselevel_db);
        setEngineSoundproofingKits(
          toJson.result.engine_general.enginesound_proofingkits
        );
        setManufactureWarrantyOptions(
          toJson.result.engine_general.manufacture_warranty
        );
        setEngineClassifiableOptions(
          toJson.result.engine_general.engine_classifiable
        );

        //warranty
        //classification
        setConditionOptions(toJson.result.engine_general.condition_1);
        setUsedConditionOptions(toJson.result.engine_general.used_condition);
        setSellerOptions(toJson.result.engine_general.seller);
        setOfferedByOptions(toJson.result.engine_general.offered_by);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDimensionsColumnsList = async () => {
    const tableName = "engine_dimensions";
    const cacheKey = tableName;
    if (cache[cacheKey]) {
      console.log("001 cache key if--", cacheKey);
      // Return cached data if available
      return cache[cacheKey];
    }
    const URL = `http://localhost:3001/api/advert_engine/columns/${tableName}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      cache[cacheKey] = toJson.result.engine_dimensions;
      // console.log("001 to json--", toJson.result.engine_dimensions);

      //DimensionFields
      setDisplacementOptions(toJson.result.engine_dimensions.displacement);
      setLengthOptions(toJson.result.engine_dimensions.length);
      setWidthOptions(toJson.result.engine_dimensions.width);
      setHeightOptions(toJson.result.engine_dimensions.height);
      setLengthFromFrontEndOfFlywheelHousingOptions(
        toJson.result.engine_dimensions.Engine_length
      );
      setEngineWeightOptions(toJson.result.engine_dimensions.engine_weight);
      setDryWeightOptions(toJson.result.engine_dimensions.dry_weight);
      setWeightWithKeelCoolingOptions(
        toJson.result.engine_dimensions.weight_keelcooling
      );
      setExclOilWeightOptions(toJson.result.engine_dimensions.weight_excloil);
      setWeightWithHeatExchangerOptions(
        toJson.result.engine_dimensions.weight_heatexchanger
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCoolingColumnsList = async () => {
    const tableName = "engine_cooling";
    const cacheKey = tableName;
    if (cache[cacheKey]) {
      console.log("001 cache key if--", cacheKey);
      // Return cached data if available
      return cache[cacheKey];
    }
    const URL = `http://localhost:3001/api/advert_engine/columns/${tableName}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      cache[cacheKey] = toJson.result.engine_cooling;
      // console.log("001 to json--", toJson.result.engine_cooling);

      //CoolingFields
      setCoolingSystemOptions(toJson.result.engine_cooling.cooling_system);
      setClosedCoolingSystemOptions(
        toJson.result.engine_cooling.closed_coolingsystem
      );
      setOpenCoolingSystemOptions(
        toJson.result.engine_cooling.open_coolingsystem
      );
      setIntercooledOptions(toJson.result.engine_cooling.intercooled);
      setRecommendedCoolantOptions(
        toJson.result.engine_cooling.recommended_coolant
      );
      setAfterCooledOptions(toJson.result.engine_cooling.after_cooled);
      setTypeOfCoolingOptions(toJson.result.engine_cooling.cooling_type);
      setHeatExchangerMaterialOptions(
        toJson.result.engine_cooling.heat_exchangermaterial
      );
      setHeatDissipationRateOptions(
        toJson.result.engine_cooling.heat_dissipationrate
      );
      setEngineLubricationOptions(
        toJson.result.engine_cooling.engine_lubrication
      );
      setLubricationSystemOptions(
        toJson.result.engine_cooling.lubrication_system
      );
      setCoolingFluidTypeOptions(
        toJson.result.engine_cooling.cooling_fluidtype
      );
      setCoolingSystemPressureOptions(
        toJson.result.engine_cooling.cooling_systempressure
      );
      setAirFilterTypeOptions(toJson.result.engine_cooling.air_filtertype);
      setCirculationPumpTypeOptions(
        toJson.result.engine_cooling.circulation_pumptype
      );
      setRawWaterpumpTypeOptions(
        toJson.result.engine_cooling.rawwater_pumptype
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchElectricalColumnsList = async () => {
    const tableName = "engine_electrical";
    const cacheKey = tableName;
    if (cache[cacheKey]) {
      console.log("001 cache key if--", cacheKey);
      // Return cached data if available
      return cache[cacheKey];
    }
    const URL = `http://localhost:3001/api/advert_engine/columns/${tableName}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      cache[cacheKey] = toJson.result.engine_electrical;
      // console.log("001 to json--", toJson.result.engine_electrical);

      //ElectricalFields
      // setBatteryVoltageNumberOptions(toJson.result.engine_electrical.battery_voltagenumber);
      setIntegratedGeneratorOptions(
        toJson.result.engine_electrical.integrated_generator
      );
      setBatteryChargingSystemOptions(
        toJson.result.engine_electrical.Battery_ChargingSystem
      );
      setEngineControlUnitModelOptions(
        toJson.result.engine_electrical.ECU_Model
      );
      setStarterMotorVoltageOptions(
        toJson.result.engine_electrical.starter_MotorVoltage
      );
      setAlternatorOutputAmpsOptions(
        toJson.result.engine_electrical.alternator_outputAMPS
      );
      setBatteryVoltageOptions(toJson.result.engine_electrical.battery_voltage);
      setAlternatorOptions(toJson.result.engine_electrical.alternator);
      setAlternatorOutputOptions(
        toJson.result.engine_electrical.alternator_output
      );
      setBatteryTypeOptions(toJson.result.engine_electrical.battery_type);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEmissionsColumnsList = async () => {
    const tableName = "engine_emissions";
    const cacheKey = tableName;
    if (cache[cacheKey]) {
      console.log("001 cache key if--", cacheKey);
      // Return cached data if available
      return cache[cacheKey];
    }
    const URL = `http://localhost:3001/api/advert_engine/columns/${tableName}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      cache[cacheKey] = toJson.result.engine_emissions;
      // console.log("001 to json--", toJson.result.engine_emissions);

      setEmissionComplianceOptions(
        toJson.result.engine_emissions.Emission_compliance
      );
      setExhaustSystemOptions(toJson.result.engine_emissions.exhaust_system);
      setExhaustSystemTypeOptions(
        toJson.result.engine_emissions.exhaust_systemtype
      );
      setExhaustGasAfterTreatmentOptions(
        toJson.result.engine_emissions.exhaustgas_aftertreatment
      );
      setExhaustGasStatusOptions(
        toJson.result.engine_emissions.exhaustGas_status
      );
      setExhaustValveTimingOptions(
        toJson.result.engine_emissions.exhaust_valvetiming
      );
      setIntakeValveTimingOptions(
        toJson.result.engine_emissions.intake_valvetiming
      );
      setEmissionControlTechnologyOptions(
        toJson.result.engine_emissions.emission_controltechnology
      );
      setNoxEmissionsOptions(toJson.result.engine_emissions.NOx_Emission);
      setSoxEmissionsOptions(toJson.result.engine_emissions.SOx_Emission);
      setCoxEmissionsOptions(toJson.result.engine_emissions.COx_Emission);
      setComplianceWithIMOStandardsOptions(
        toJson.result.engine_emissions.compliance_internationalmaritime
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchFuelColumnsList = async () => {
    const tableName = "engine_fuel";
    const cacheKey = tableName;
    if (cache[cacheKey]) {
      console.log("001 cache key if--", cacheKey);
      // Return cached data if available
      return cache[cacheKey];
    }
    const URL = `http://localhost:3001/api/advert_engine/columns/${tableName}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      cache[cacheKey] = toJson.result.engine_general;
      // console.log("001 to json--", toJson.result.engine_fuel);

      setFuelPreFilterOptions(toJson.result.engine_fuel.fuel_prefilter);
      setElectronicFuelinjectionOptions(toJson.result.engine_fuel.EFI);
      setFuelFilterTypeOptions(toJson.result.engine_fuel.fuel_filtertype);
      setFuelFilterOptions(toJson.result.engine_fuel.fuel_filter);
      setFuelReserveOptions(toJson.result.engine_fuel.fuel_reserve);
      setFuelSystemOptions(toJson.result.engine_fuel.fuel_system);
      setFuelTankCapacityOptions(toJson.result.engine_fuel.fuel_tankcapacity);
      setFuelTypeOptions(toJson.result.engine_fuel.fuel_type);
      setLowestSpecificFuelConsumptionOptions(
        toJson.result.engine_fuel.lowest_fuelconsumption
      );
      setFuelConsumptionRateOptions(
        toJson.result.engine_fuel.fuel_consumptionrate
      );
      setFuelConsumtpionAtFullLoadOptions(
        toJson.result.engine_fuel.FC_fullload
      );
      setFuelInjectionSystemTypeOptions(
        toJson.result.engine_fuel.FuelInjection_systemtype
      );
      setDuelDeliveryPressureOptions(
        toJson.result.engine_fuel.Fuel_deliverypressure
      );
      setFuelTankMaterialOptions(toJson.result.engine_fuel.Fuel_tankmaterial);
      setFuelLineDiameterOptions(toJson.result.engine_fuel.fuel_linediameter);
      setFuelConsumptionOptions(toJson.result.engine_fuel.FC_3Quarterload);
      setFuelConsumptionHalfLoadOptions(toJson.result.engine_fuel.FC_halfload);
      setFuelConsumptionPropellerCurveOptions(
        toJson.result.engine_fuel.FC_propellercurve
      );
      setHeatRejectionToCoolantOptions(
        toJson.result.engine_fuel.heat_rejection
      );
      setRecommendedFuelOptions(toJson.result.engine_fuel.recommended_fuel);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPropulsionColumnsList = async () => {
    const tableName = "engine_propulsion";
    const cacheKey = tableName;
    if (cache[cacheKey]) {
      console.log("001 cache key if--", cacheKey);
      // Return cached data if available
      return cache[cacheKey];
    }
    const URL = `http://localhost:3001/api/advert_engine/columns/${tableName}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      cache[cacheKey] = toJson.result.engine_propulsion;
      // console.log("001 to json--", toJson.result.engine_propulsion);

      //PropulsionFields
      setPropulsionOptions(toJson.result.engine_propulsion.propulsion);
      setPropellerBladeMaterialOptions(
        toJson.result.engine_propulsion.propeller_bladematerial
      );
      setPropellerShaftMaterialOptions(
        toJson.result.engine_propulsion.propeller_shaftmaterial
      );
      setSteeringSystemOptions(toJson.result.engine_propulsion.steering_system);
      setSteeringControlTypeOptions(
        toJson.result.engine_propulsion.steering_controltype
      );
      setTrimSystemOptions(toJson.result.engine_propulsion.trim_system);
      setTrimTabMaterialOptions(
        toJson.result.engine_propulsion.trim_tabmaterial
      );
      setTrimTabTypeOptions(toJson.result.engine_propulsion.trim_tab_type);
      setBowthrusterOptions(toJson.result.engine_propulsion.bowthruster);
      setPropulsionSystemOptions(
        toJson.result.engine_propulsion.propulsion_system
      );
      setPropulsionSystemTypeOptions(
        toJson.result.engine_propulsion.propulsion_systemtype
      );
      setPropellerDiameterOptions(
        toJson.result.engine_propulsion.propeller_diameter
      );
      setPropellerMaterialOptions(
        toJson.result.engine_propulsion.propeller_material
      );
      setPropellerPitchOptions(toJson.result.engine_propulsion.propeller_pitch);
      setPropellerTypeOptions(toJson.result.engine_propulsion.propeller_type);
      setPropellerShaftDiameterOptions(
        toJson.result.engine_propulsion.propeller_shaftdiameter
      );
      setGearboxTypeOptions(toJson.result.engine_propulsion.gearbox_type);
      setTransmissionCoolingOptions(
        toJson.result.engine_propulsion.transmission_cooling
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTransmissionsColumnsList = async () => {
    const tableName = "engine_transmission";
    const cacheKey = tableName;
    if (cache[cacheKey]) {
      console.log("001 cache key if--", cacheKey);
      // Return cached data if available
      return cache[cacheKey];
    }
    const URL = `http://localhost:3001/api/advert_engine/columns/${tableName}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      cache[cacheKey] = toJson.result.engine_oil;
      // console.log("001 to json--", toJson.result.engine_transmission);
      //TransmissionFields
      setTransmissionTypeOptions(
        toJson.result.engine_transmission.transmission_type
      );
      setGearShiftOptions(toJson.result.engine_transmission.gear_shift);
      setGearRatioOptions(toJson.result.engine_transmission.gear_ratio);
      setGearShiftTypeOptions(toJson.result.engine_transmission.gearshift_type);
      setFlywheelOptions(toJson.result.engine_transmission.flywheel_SAE);
      setSiluminFlywheelHousingOptions(
        toJson.result.engine_transmission.flywheel_housing
      );
      setCamShaftOptions(toJson.result.engine_transmission.camshaft);
      setCamShaftAlloyOptions(
        toJson.result.engine_transmission.crankshaft_alloy
      );
      setCrankcaseDesignOptions(
        toJson.result.engine_transmission.crankcase_design
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchOilColumnsList = async () => {
    const tableName = "engine_oil";
    const cacheKey = tableName;
    if (cache[cacheKey]) {
      console.log("001 cache key if--", cacheKey);
      // Return cached data if available
      return cache[cacheKey];
    }
    const URL = `http://localhost:3001/api/advert_engine/columns/${tableName}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      cache[cacheKey] = toJson.result.engine_oil;
      // console.log("001 to json--", toJson.result.engine_oil);
      //OilFields
      setOilFilterOptions(toJson.result.engine_oil.oil_filter);
      setOilFilterTypeOptions(toJson.result.engine_oil.oil_filtertype);
      setCentrifugalOilCleanerOptions(
        toJson.result.engine_oil.centrifugal_oilcleaner
      );
      setOilCoolerOptions(toJson.result.engine_oil.oil_cooler);
      setOilFillerOptions(toJson.result.engine_oil.oil_filler);
      setOilDipstickOptions(toJson.result.engine_oil.oil_dipstick);
      setRecommendedOilOptions(toJson.result.engine_oil.recommended_oil);
      setOilCapacityOptions(toJson.result.engine_oil.oil_capacity);
      setOilChangeIntervalOptions(toJson.result.engine_oil.oil_changeinterval);
      setOilCoolingMethodOptions(toJson.result.engine_oil.oil_coolingmethod);
      setLubricationOilPressureOptions(
        toJson.result.engine_oil.lubrication_oilpressure
      );
      setOilFilterBypassValveOptions(
        toJson.result.engine_oil.oilfilter_bypassvalve
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSafetyColumnsList = async () => {
    const tableName = "engine_safety";
    const cacheKey = tableName;
    if (cache[cacheKey]) {
      console.log("001 cache key if--", cacheKey);
      // Return cached data if available
      return cache[cacheKey];
    }
    const URL = `http://localhost:3001/api/advert_engine/columns/${tableName}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      cache[cacheKey] = toJson.result.engine_safety;
      // console.log("001 to json--", toJson.result.engine_safety);
      //SafetyFields
      setEngineMonitoringSystemsOptions(
        toJson.result.engine_safety.engine_monitoringsystem
      );
      setOverheatProtectionOptions(
        toJson.result.engine_safety.overheat_protection
      );
      setLowOilPressureAlarmOptions(
        toJson.result.engine_safety.lowoil_pressurealarm
      );
      setEmergencyStopSystemOptions(
        toJson.result.engine_safety.emergency_stopsystem
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEquipmentColumnsList = async () => {
    const tableName = "engine_equipment";
    const cacheKey = tableName;
    if (cache[cacheKey]) {
      console.log("001 cache key if--", cacheKey);
      // Return cached data if available
      return cache[cacheKey];
    }
    const URL = `http://localhost:3001/api/advert_engine/columns/${tableName}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      cache[cacheKey] = toJson.result.engine_equipment;
      // console.log("001 to json--", toJson.result.engine_equipment);
      //Equipment
      setEngineManagementSystemOptions(toJson.result.engine_equipment.EMS);
      setEngineControlSystemOptions(
        toJson.result.engine_equipment.engine_controlsystem
      );
      setUnitInjectorsOptions(toJson.result.engine_equipment.unit_injectors);
      setTurboChargerOptions(toJson.result.engine_equipment.turbocharger);
      setTurboChargingOptions(toJson.result.engine_equipment.turbo_charging);
      setStarterMotorOptions(toJson.result.engine_equipment.starter_motor);
      setProtectionCoversOptions(
        toJson.result.engine_equipment.protection_covers
      );
      setClosedCrankcaseVentilationOptions(
        toJson.result.engine_equipment.crankcase_ventilation
      );
      setHeatExchangerOptions(toJson.result.engine_equipment.heat_exchanger);
      setHeatExchangerWithExpansionTankOptions(
        toJson.result.engine_equipment.heat_exchanger_WET
      );
      setSeaWaterPumpOptions(toJson.result.engine_equipment.seawater_pump);
      setSeaWaterCooledChargeAirCoolerOptions(
        toJson.result.engine_equipment.charge_aircooler
      );
      setWorkingPrincipleOptions(
        toJson.result.engine_equipment.working_principle
      );
      setCompressionRatioOptions(
        toJson.result.engine_equipment.compression_ratio
      );
      setPistonSpeedAt1500RpmOptions(
        toJson.result.engine_equipment.pistonspeed_1500
      );
      setPistonSpeedAt1800RpmOptions(
        toJson.result.engine_equipment.pistonspeed_1800
      );
      setFiringOrderOptions(toJson.result.engine_equipment.firing_order);
      setPistonsOptions(toJson.result.engine_equipment.pistons);
      setConnectionRodsOptions(toJson.result.engine_equipment.connection_rods);
      setAuxiliaryPowerTakeOffOptions(
        toJson.result.engine_equipment.auxiliarypower_takeoff
      );
      setRemoteControlSystemsOptions(
        toJson.result.engine_equipment.remote_controlsystems
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPerformanceColumnsList = async () => {
    const tableName = "engine_performance";
    const cacheKey = tableName;
    if (cache[cacheKey]) {
      console.log("001 cache key if--", cacheKey);
      // Return cached data if available
      return cache[cacheKey];
    }
    const URL = `http://localhost:3001/api/advert_engine/columns/${tableName}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      cache[cacheKey] = toJson.result.engine_performance;
      // console.log("001 to json--", toJson.result.engine_performance);
      //Performance
      setNominalRatingOptions(toJson.result.engine_performance.nominal_rating);
      setEnginePerformanceOptions(
        toJson.result.engine_performance.engine_performance
      );
      setMaxPowerOutputOptions(
        toJson.result.engine_performance.max_poweroutput
      );
      setMaxPowerBHPOptions(toJson.result.engine_performance.max_power);
      setMaxSpeedKnotsOptions(toJson.result.engine_performance.max_speed);
      setSuperchargedOptions(toJson.result.engine_performance.supercharged);
      setValveTrainOptions(toJson.result.engine_performance.valve_train);
      setGrossPowerFullLoadKwOptions(
        toJson.result.engine_performance.GP_fullloadKW
      );
      setGrossPowerFullLoadOptions(
        toJson.result.engine_performance.GP_fullloadmetric
      );
      setGrossPowerPropellerCurveKwOptions(
        toJson.result.engine_performance.GP_propellercurveKW
      );
      setGrossPowerPropellerCurveOptions(
        toJson.result.engine_performance.GP_propellercurvemetric
      );
      setGrossTorqueOptions(toJson.result.engine_performance.gross_torque);
      setContinuousPowerOptions(
        toJson.result.engine_performance.continuouspower_KWHP
      );
      setMaxContinuousRatingOptions(
        toJson.result.engine_performance.Max_Continuousrating
      );
      setEngineSpeedRangeOptions(
        toJson.result.engine_performance.Engine_speedrange
      );
      setEngineEfficiencyOptions(
        toJson.result.engine_performance.engine_efficiency
      );
      setPowerToWeightRatioOptions(
        toJson.result.engine_performance.powertoweight_ratio
      );

      //Cylinders
      setCylinderConfigurationOptions(
        toJson.result.engine_performance.cylinder_configuration
      );
      setNumberCylindersOptions(
        toJson.result.engine_performance.number_cylinders
      );
      setCylindersArrangementOptions(
        toJson.result.engine_performance.cylinders_arrangement
      );
      setNumberValvesOptions(toJson.result.engine_performance.number_valves);
      setBoreStrokeOptions(toJson.result.engine_performance.bore_stroke);
      setBoreOptions(toJson.result.engine_performance.bore);

      setIdleRPMOptions(toJson.result.engine_performance.idle_rpm);
      setRPMMaxPowerOptions(toJson.result.engine_performance.rpm_maxpower);
      setRatedSpeedOptions(toJson.result.engine_performance.rated_speed);
      setMaxTorqueOptions(toJson.result.engine_performance.max_torque);
      setMaxTorqueRPMOptions(toJson.result.engine_performance.max_torquerpm);
      setTorqueRatedSpeed(toJson.result.engine_performance.torque_ratedspeed);
      setValvePerCylinderOptions(
        toJson.result.engine_performance.valve_percylinder
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMaintenanceColumnsList = async () => {
    const tableName = "engine_maintenance";
    const cacheKey = tableName;
    if (cache[cacheKey]) {
      console.log("001 cache key if--", cacheKey);
      // Return cached data if available
      return cache[cacheKey];
    }
    const URL = `http://localhost:3001/api/advert_engine/columns/${tableName}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      cache[cacheKey] = toJson.result.engine_maintenance;
      // console.log("001 to json--", toJson.result.engine_maintenance);
      //MaintenanceFields
      setScheduledMaintenancePlanOptions(
        toJson.result.engine_maintenance.scheduled_maintenanceplan
      );
      setServiceIntervalOptions(
        toJson.result.engine_maintenance.service_interval
      );
      setMaintenanceLogRequirementsOptions(
        toJson.result.engine_maintenance.maintenancelog_requirements
      );
      setAvailabilityOfSparePartsOptions(
        toJson.result.engine_maintenance.availability_spareparts
      );
      setOperationModeOptions(toJson.result.engine_maintenance.operation_mode);
      setLastServiceDateOptions(
        toJson.result.engine_maintenance.last_servicedate
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMountingColumnsList = async () => {
    const tableName = "engine_mounting";
    const cacheKey = tableName;
    if (cache[cacheKey]) {
      console.log("001 cache key if--", cacheKey);
      // Return cached data if available
      return cache[cacheKey];
    }
    const URL = `http://localhost:3001/api/advert_engine/columns/${tableName}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      cache[cacheKey] = toJson.result.engine_mounting;
      // console.log("001 to json--", toJson.result.engine_mounting);
      //MountingFields
      setEngineMountingOrientationOptions(
        toJson.result.engine_mounting.enginemounting_orientation
      );
      setEngineSuspensionOptions(
        toJson.result.engine_mounting.engine_suspension
      );
      setEngineMountingTypeOptions(
        toJson.result.engine_mounting.engine_mountingtype
      );
      setMountingBracketMaterialOptions(
        toJson.result.engine_mounting.mountingbracket_material
      );
      setAlignmentRequirementsOptions(
        toJson.result.engine_mounting.alignment_requirements
      );
      setEngineBlockOptions(toJson.result.engine_mounting.engine_block);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!hasFetched.current) {
      // fetchFuelColumnsList();
      // fetchPerformanceColumnsList();
      // fetchEquipmentColumnsList();
      fetchGeneralColumnsList();
      // fetchMountingColumnsList();
      // fetchMaintenanceColumnsList();
      // fetchSafetyColumnsList();
      // fetchOilColumnsList();
      // fetchTransmissionsColumnsList();
      // fetchPropulsionColumnsList();
      // fetchCoolingColumnsList();
      // fetchElectricalColumnsList();
      // fetchEmissionsColumnsList();
      // fetchDimensionsColumnsList();
      hasFetched.current = true;
    }
  }, []);

  const errorDisplay = (fieldName) => {
    return <div style={{ color: "red" }}>{fieldName} field is required</div>;
  };
  return (
    <>
      <Container className="mb-5">
        {loading ? (
          <Loader />
        ) : (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mt-4">
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                  Make and Model
                </h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineMake}
                      setValue={(val) => {
                        setForm({ ...form, engineMake: val });
                        fetchDistinctValues(
                          val,
                          "",
                          "",
                          "",
                          "",
                          "engine_model"
                        );
                      }}
                      label={ENGINE_ADVERT.ENGINE_MAKE}
                      options={engineMakeOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["engineMake"] &&
                            errorDisplay(ENGINE_ADVERT.ENGINE_MAKE)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  {/* <Col xs={3} md={12} className="mb-2">
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
                    </Col> */}
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineModel}
                      setValue={(val) => {
                        setForm({ ...form, engineModel: val });
                        fetchDistinctValues(
                          form.engineMake,
                          val,
                          "",
                          "",
                          "",
                          "engine_modelyear"
                        );
                      }}
                      label={ENGINE_ADVERT.ENGINE_MODEL}
                      options={engineModelOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["engineModel"] &&
                            errorDisplay(ENGINE_ADVERT.ENGINE_MODEL)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineModelYear}
                      setValue={(val) => {
                        setForm({ ...form, engineModelYear: val });
                        fetchDistinctValues(
                          form.engineMake,
                          form.engineModel,
                          val,
                          "",
                          "",
                          "engine_type"
                        );
                      }}
                      label={ENGINE_ADVERT.ENGINE_MODEL_YEAR}
                      options={engineModelYearOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["engineModel"] &&
                            errorDisplay(ENGINE_ADVERT.ENGINE_MODEL_YEAR)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineType}
                      setValue={(val) => {
                        setForm({ ...form, engineType: val });
                        fetchDistinctValues(
                          form.engineMake,
                          form.engineModel,
                          form.engineModelYear,
                          val,
                          "",
                          "type_designation"
                        );
                      }}
                      label={ENGINE_ADVERT.ENGINE_TYPE}
                      options={engineTypeOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["engineType"] &&
                            errorDisplay(ENGINE_ADVERT.ENGINE_TYPE)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.typeDesignation}
                      setValue={(val) => {
                        setForm({ ...form, typeDesignation: val });
                        fetchRelevantData(
                          form.engineMake,
                          form.engineModel,
                          form.engineModelYear,
                          form.engineType,
                          val
                        );
                      }}
                      label={ENGINE_ADVERT.TYPE_DESIGNATION}
                      options={typeDesignationOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["typeDesignation"] &&
                            errorDisplay(ENGINE_ADVERT.TYPE_DESIGNATION)}
                        </small>
                      </p>
                    </div>
                  </Col>
                </Col>
              </Col>
              <Col md={6} className="mt-4">
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>Condition</h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      label={ENGINE_ADVERT.CONDITION}
                      value={form.condition}
                      setValue={(val) => {
                        setForm({ ...form, condition: val });
                      }}
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      options={conditionOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["condition"] &&
                            errorDisplay(ENGINE_ADVERT.CONDITION)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      value={form.usedCondition}
                      setValue={(val) =>
                        setForm({ ...form, usedCondition: val })
                      }
                      label={ENGINE_ADVERT.USED_CONDITION}
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      options={usedConditionOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["usedCondition"] &&
                            errorDisplay(ENGINE_ADVERT.USED_CONDITION)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.seller}
                      setValue={(val) => setForm({ ...form, seller: val })}
                      label={ENGINE_ADVERT.SELLER}
                      options={sellerOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["seller"] &&
                            errorDisplay(ENGINE_ADVERT.SELLER)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.offeredBy}
                      setValue={(val) => setForm({ ...form, offeredBy: val })}
                      label={ENGINE_ADVERT.OFFERED_BY}
                      options={offeredByOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <div className="customDatePickerWidth">
                      <DatePickerComponent
                        openKey={openKey}
                        setOpenKey={setOpenKey}
                        label={ENGINE_ADVERT.LAST_SURVEY_DATE}
                        selected={form.lastSurveyDate}
                        value={form.lastSurveyDate}
                        type="advertEngine"
                        setValue={(val) =>
                          setForm({ ...form, lastSurveyDate: val })
                        }
                        isMandatory={true}
                      />
                      <div className="ms-2">
                        <p>
                          <small>
                            {error["lastSurveyDate"] &&
                              errorDisplay(ENGINE_ADVERT.LAST_SURVEY_DATE)}
                          </small>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <InputComponent
                      label={ENGINE_ADVERT.BROKER_VALUATION}
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      formType={"number"}
                      type="advertEngine"
                      value={form.brokerValuation}
                      isMandatory={true}
                      setValue={(e) =>
                        setForm({
                          ...form,
                          brokerValuation: e.target.value,
                        })
                      }
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["brokerValuation"] &&
                            errorDisplay(ENGINE_ADVERT.BROKER_VALUATION)}
                        </small>
                      </p>
                    </div>
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>General</h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  {/* <Col xs={3} md={12} className="mb-2">
                      <SelectComponent
                        type="advertEngine"
                        openKey={openKey}
                        setOpenKey={setOpenKey}
                        value={form.marisailVesselId}
                        setValue={(val) =>
                          setForm({ ...form, marisailVesselId: val })
                        }
                        label={ENGINE_ADVERT.MARISAIL_VESSEL_ID}
                        options={defaultOptions}
                        isMandatory={true}
                      />
                      <div className="ms-2"><p><small>{error["marisailVesselId"] && errorDisplay(ENGINE_ADVERT.MARISAIL_VESSEL_ID)}</small></p></div>
                    </Col> */}
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineClassification}
                      setValue={(val) =>
                        setForm({ ...form, engineClassification: val })
                      }
                      label={ENGINE_ADVERT.ENGINE_CLASSIFICATION}
                      options={engineClassifiableOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["engineClassification"] &&
                            errorDisplay(ENGINE_ADVERT.ENGINE_CLASSIFICATION)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.certification}
                      setValue={(val) =>
                        setForm({ ...form, certification: val })
                      }
                      label={ENGINE_ADVERT.CERTIFICATION}
                      options={certificationOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["certification"] &&
                            errorDisplay(ENGINE_ADVERT.CERTIFICATION)}
                        </small>
                      </p>
                    </div>
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
                      label={ENGINE_ADVERT.MANUFACTURER_WARRANTY}
                      options={manufactureWarrantyOptions}
                      isMandatory={true}
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
                      label={ENGINE_ADVERT.ENGINE_SERIAL_NUMBER}
                      options={engineSerialNumberOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.ceDesignCategory}
                      setValue={(val) =>
                        setForm({ ...form, ceDesignCategory: val })
                      }
                      label={ENGINE_ADVERT.CE_DESIGN_CATEGORY}
                      options={ceDesignCategoryOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["ceDesignCategory"] &&
                            errorDisplay(ENGINE_ADVERT.CE_DESIGN_CATEGORY)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.numberDrives}
                      setValue={(val) =>
                        setForm({ ...form, numberDrives: val })
                      }
                      label={ENGINE_ADVERT.NUMBER_DRIVES}
                      options={numberDrivesOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["numberDrives"] &&
                            errorDisplay(ENGINE_ADVERT.NUMBER_DRIVES)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.numberEngines}
                      setValue={(val) =>
                        setForm({ ...form, numberEngines: val })
                      }
                      label={ENGINE_ADVERT.NUMBER_ENGINES}
                      options={numberEnginesOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["numberEngines"] &&
                            errorDisplay(ENGINE_ADVERT.NUMBER_ENGINES)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.rangeMiles}
                      setValue={(val) => setForm({ ...form, rangeMiles: val })}
                      label={ENGINE_ADVERT.RANGE_MILES}
                      options={engineRangeOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["rangeMiles"] &&
                            errorDisplay(ENGINE_ADVERT.RANGE_MILES)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.cruisingSpeed}
                      setValue={(val) =>
                        setForm({ ...form, cruisingSpeed: val })
                      }
                      label={ENGINE_ADVERT.CRUISING_SPEED}
                      options={cruisingSpeedOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["cruisingSpeed"] &&
                            errorDisplay(ENGINE_ADVERT.CRUISING_SPEED)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.driveType}
                      setValue={(val) => setForm({ ...form, driveType: val })}
                      label={ENGINE_ADVERT.DRIVE_TYPE}
                      options={driveTypeOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["driveType"] &&
                            errorDisplay(ENGINE_ADVERT.DRIVE_TYPE)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineHours}
                      setValue={(val) => setForm({ ...form, engineHours: val })}
                      label={ENGINE_ADVERT.ENGINE_HOURS}
                      options={engineHoursOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["engineHours"] &&
                            errorDisplay(ENGINE_ADVERT.ENGINE_HOURS)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.ignitionSystem}
                      setValue={(val) =>
                        setForm({ ...form, ignitionSystem: val })
                      }
                      label={ENGINE_ADVERT.IGNITION_SYSTEM}
                      options={ignitionSystemOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["ignitionSystem"] &&
                            errorDisplay(ENGINE_ADVERT.IGNITION_SYSTEM)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.noiseLevel}
                      setValue={(val) => setForm({ ...form, noiseLevel: val })}
                      label={ENGINE_ADVERT.NOISE_LEVEL}
                      options={noiseLevelOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["noiseLevel"] &&
                            errorDisplay(ENGINE_ADVERT.NOISE_LEVEL)}
                        </small>
                      </p>
                    </div>
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
                      label={ENGINE_ADVERT.ENGINE_SOUNDPROOFING_KITS}
                      options={engineSoundproofingKits}
                      isMandatory={false}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                  Performance
                </h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.nominalRating}
                      setValue={(val) =>
                        setForm({ ...form, nominalRating: val })
                      }
                      label="Nominal Rating (Kw) (HP)"
                      options={nominalRatingOptions}
                      isMandatory={false}
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
                      options={enginePerformanceOptions}
                      isMandatory={false}
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
                      options={maxPowerOutputOptions}
                      isMandatory={false}
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
                      options={maxPowerBHPOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["maxPowerBHP"] &&
                            errorDisplay("Max. Power (BHP)")}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.maxSpeedKnots}
                      setValue={(val) =>
                        setForm({ ...form, maxSpeedKnots: val })
                      }
                      label="Max. Speed (Knots)"
                      options={maxSpeedKnotsOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["maxSpeedKnots"] &&
                            errorDisplay("Max. Speed (Knots)")}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.supercharged}
                      setValue={(val) =>
                        setForm({ ...form, supercharged: val })
                      }
                      label={ENGINE_ADVERT.SUPERCHARGED}
                      options={superchargedOptions}
                      isMandatory={false}
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
                      options={valveTrainOptions}
                      isMandatory={false}
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
                      options={grossPowerFullLoadKwOptions}
                      isMandatory={false}
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
                      options={grossPowerFullLoadOptions}
                      isMandatory={false}
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
                      options={grossPowerPropellerCurveKwOptions}
                      isMandatory={false}
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
                      options={grossPowerPropellerCurveOptions}
                      isMandatory={false}
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
                      options={grossTorqueOptions}
                      isMandatory={false}
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
                      options={continuousPowerOptions}
                      isMandatory={false}
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
                      options={maxContinuousRatingOptions}
                      isMandatory={false}
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
                      options={engineSpeedRangeOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["engineSpeedRange"] &&
                            errorDisplay("Engine Speed Range (RPM)")}
                        </small>
                      </p>
                    </div>
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
                      options={engineEfficiencyOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["engineEfficiency"] &&
                            errorDisplay("Engine Efficiency")}
                        </small>
                      </p>
                    </div>
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
                      options={powerToWeightRatioOptions}
                      isMandatory={false}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                  Transmission
                </h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.transmissionType}
                      setValue={(val) =>
                        setForm({ ...form, transmissionType: val })
                      }
                      label={ENGINE_ADVERT.TRANSMISSION_TYPE}
                      options={transmissionTypeOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["transmissionType"] &&
                            errorDisplay(ENGINE_ADVERT.TRANSMISSION_TYPE)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.gearShift}
                      setValue={(val) => setForm({ ...form, gearShift: val })}
                      label={ENGINE_ADVERT.GEAR_SHIFT}
                      isMandatory={false}
                      options={gearShiftOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.gearRatio}
                      setValue={(val) => setForm({ ...form, gearRatio: val })}
                      label={ENGINE_ADVERT.GEAR_RATIO}
                      isMandatory={false}
                      options={gearRatioOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.gearShiftType}
                      setValue={(val) =>
                        setForm({ ...form, gearShiftType: val })
                      }
                      label={ENGINE_ADVERT.GEAR_SHIFT_TYPE}
                      isMandatory={false}
                      options={gearShiftTypeOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.flywheelSAE14}
                      setValue={(val) =>
                        setForm({ ...form, flywheelSAE14: val })
                      }
                      label={ENGINE_ADVERT.FLYWHEEL_SAE14}
                      isMandatory={false}
                      options={flywheelOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.siluminFlywheelHousing}
                      setValue={(val) =>
                        setForm({ ...form, siluminFlywheelHousing: val })
                      }
                      label={ENGINE_ADVERT.SILUMIN_FLYWHEEL_HOUSING}
                      options={siluminFlywheelHousingOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.camShaft}
                      setValue={(val) => setForm({ ...form, camShaft: val })}
                      label={ENGINE_ADVERT.CAMSHAFT}
                      options={camShaftOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.camShaftAlloy}
                      setValue={(val) =>
                        setForm({ ...form, camShaftAlloy: val })
                      }
                      label={ENGINE_ADVERT.CRANKSHAFT_ALLOY}
                      options={camShaftAlloyOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.CRANKCASE_DESIGN}
                      options={crankcaseDesignOptions}
                      isMandatory={false}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>Cylinders</h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
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
                      options={cylinderConfigurationOptions}
                      isMandatory={false}
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
                      options={numberCylindersOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["numberCylinders"] &&
                            errorDisplay("Number Cylinders")}
                        </small>
                      </p>
                    </div>
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
                      options={cylindersArrangementOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.numberValves}
                      setValue={(val) =>
                        setForm({ ...form, numberValves: val })
                      }
                      label="Number Valves"
                      options={numberValvesOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["numberValves"] &&
                            errorDisplay("Number Valves")}
                        </small>
                      </p>
                    </div>
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
                      options={valvePerCylinderOptions}
                      isMandatory={false}
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
                      options={boreStrokeOptions}
                      isMandatory={false}
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
                      options={boreOptions}
                      isMandatory={false}
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
                      options={boreStrokeOptions}
                      isMandatory={false}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>Equipment</h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineManagementSystem}
                      setValue={(val) =>
                        setForm({ ...form, engineManagementSystem: val })
                      }
                      label={ENGINE_ADVERT.ENGINE_MANAGEMENT_SYSTEM}
                      options={engineManagementSystemOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineControlSystem}
                      setValue={(val) =>
                        setForm({ ...form, engineControlSystem: val })
                      }
                      label={ENGINE_ADVERT.ENGINE_CONTROL_SYSTEM}
                      options={engineControlSystemOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.UNIT_INJECTORS}
                      options={unitInjectorsOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.turboCharger}
                      setValue={(val) =>
                        setForm({ ...form, turboCharger: val })
                      }
                      label={ENGINE_ADVERT.TURBO_CHARGER}
                      options={turboChargerOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.turboCharging}
                      setValue={(val) =>
                        setForm({ ...form, turboCharging: val })
                      }
                      label={ENGINE_ADVERT.TURBO_CHARGING}
                      options={turboChargingOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.starterMotor}
                      setValue={(val) =>
                        setForm({ ...form, starterMotor: val })
                      }
                      label={ENGINE_ADVERT.STARTER_MOTOR}
                      options={starterMotorOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.PROTECTION_COVERS}
                      options={protectionCoversOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.CLOSED_CRANKCASE_VENTILATION}
                      options={closedCrankcaseVentilationOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.heatExchanger}
                      setValue={(val) =>
                        setForm({ ...form, heatExchanger: val })
                      }
                      label={ENGINE_ADVERT.HEAT_EXCHANGER}
                      options={heatExchangerOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.heatExchangerWithExpansionTank}
                      setValue={(val) =>
                        setForm({
                          ...form,
                          heatExchangerWithExpansionTank: val,
                        })
                      }
                      label={ENGINE_ADVERT.HEAT_EXCHANGER_WITH_EXPANSION_TANK}
                      options={heatExchangerWithExpansionTankOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.seaWaterPump}
                      setValue={(val) =>
                        setForm({ ...form, seaWaterPump: val })
                      }
                      label={ENGINE_ADVERT.SEA_WATER_PUMP}
                      options={seaWaterPumpOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.SEA_WATER_COOLED_CHARGE_AIR_COOLER}
                      options={seaWaterCooledChargeAirCoolerOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.WORKING_PRINCIPLE}
                      options={workingPrincipleOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.COMPRESSION_RATIO}
                      options={compressionRatioOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.pistonSpeedAt1500Rpm}
                      setValue={(val) =>
                        setForm({ ...form, pistonSpeedAt1500Rpm: val })
                      }
                      label={ENGINE_ADVERT.PISTON_SPEED_AT_1500}
                      options={PistonSpeedAt1500RpmOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.pistonSpeedAt1800Rpm}
                      setValue={(val) =>
                        setForm({ ...form, pistonSpeedAt1800Rpm: val })
                      }
                      label={ENGINE_ADVERT.PISTON_SPEED_AT_1800}
                      options={PistonSpeedAt1800RpmOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.firingOrder}
                      setValue={(val) => setForm({ ...form, firingOrder: val })}
                      label={ENGINE_ADVERT.FIRING_ORDER}
                      options={firingOrderOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.pistons}
                      setValue={(val) => setForm({ ...form, pistons: val })}
                      label={ENGINE_ADVERT.PISTONS}
                      options={pistonsOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.CONNECTION_RODS}
                      options={connectionRodsOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.AUXILIARY_POWER_TAKEOFF}
                      options={auxiliaryPowerTakeOffOptions}
                      isMandatory={false}
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
                      options={remoteControlSystemsOptions}
                      isMandatory={false}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                  Propulsion System
                </h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.propulsion}
                      setValue={(val) => setForm({ ...form, propulsion: val })}
                      label="Propulsion"
                      options={propulsionOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["propulsion"] && errorDisplay("Propulsion")}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.bowthruster}
                      setValue={(val) => setForm({ ...form, bowthruster: val })}
                      label="Bowthruster"
                      options={bowthrusterOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["bowthruster"] && errorDisplay("Bowthruster")}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.propulsionSystem}
                      setValue={(val) =>
                        setForm({ ...form, propulsionSystem: val })
                      }
                      label="Propulsion System"
                      options={propulsionSystemOptions}
                      isMandatory={false}
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
                      options={propulsionSystemTypeOptions}
                      isMandatory={false}
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
                      options={propellerDiameterOptions}
                      isMandatory={false}
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
                      options={propellerMaterialOptions}
                      isMandatory={false}
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
                      isMandatory={false}
                      options={propellerPitchOptions}
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
                      options={propellerTypeOptions}
                      isMandatory={false}
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
                      options={propellerShaftDiameterOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.gearboxType}
                      setValue={(val) => setForm({ ...form, gearboxType: val })}
                      label="Gearbox Type"
                      options={gearboxTypeOptions}
                      isMandatory={false}
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
                      options={transmissionCoolingOptions}
                      isMandatory={false}
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
                      options={propellerBladeMaterialOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["propellerBladeMaterial"] &&
                            errorDisplay("Propeller Blade Material")}
                        </small>
                      </p>
                    </div>
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
                      options={propellerShaftMaterialOptions}
                      isMandatory={false}
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
                      isMandatory={false}
                      options={steeringSystemOptions}
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
                      isMandatory={false}
                      options={steeringControlTypeOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.trimSystem}
                      setValue={(val) => setForm({ ...form, trimSystem: val })}
                      label="Trim System"
                      isMandatory={false}
                      options={trimSystemOptions}
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
                      options={trimTabMaterialOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.trimTabType}
                      setValue={(val) => setForm({ ...form, trimTabType: val })}
                      label="Trim Tab Type"
                      isMandatory={false}
                      options={trimTabTypeOptions}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                  Fuel System
                </h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.electronicFuelinjection}
                      setValue={(val) =>
                        setForm({ ...form, electronicFuelinjection: val })
                      }
                      label="Electronic Fuel Injection (EFI)"
                      options={electronicFuelinjectionOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelPreFilter}
                      setValue={(val) =>
                        setForm({ ...form, fuelPreFilter: val })
                      }
                      label="Fuel Pre-Filter"
                      isMandatory={false}
                      options={fuelPreFilterOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelFilter}
                      setValue={(val) => setForm({ ...form, fuelFilter: val })}
                      label="Fuel Filter"
                      options={fuelFilterOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelFilterType}
                      setValue={(val) =>
                        setForm({ ...form, fuelFilterType: val })
                      }
                      label="Fuel Filter Type"
                      options={fuelFilterTypeOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelReserve}
                      setValue={(val) => setForm({ ...form, fuelReserve: val })}
                      label="Fuel Reserve (Holding Tank) (Litres)"
                      options={fuelReserveOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelSystem}
                      setValue={(val) => setForm({ ...form, fuelSystem: val })}
                      label="Fuel System"
                      isMandatory={true}
                      options={fuelSystemOptions}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["fuelSystem"] && errorDisplay("Fuel System")}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelTankCapacity}
                      setValue={(val) =>
                        setForm({ ...form, fuelTankCapacity: val })
                      }
                      label="Fuel Tank Capacity (Litres)"
                      options={fuelTankCapacityOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelType}
                      setValue={(val) => setForm({ ...form, fuelType: val })}
                      label="Fuel Type"
                      isMandatory={true}
                      options={fuelTypeOptions}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["fuelType"] && errorDisplay("Fuel Type")}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.lowestSpecificFuelConsumption}
                      setValue={(val) =>
                        setForm({ ...form, lowestSpecificFuelConsumption: val })
                      }
                      label="Lowest Specific Fuel Consumption (G/Kwh)"
                      options={lowestSpecificFuelConsumptionOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.recommendedFuel}
                      setValue={(val) =>
                        setForm({ ...form, recommendedFuel: val })
                      }
                      label="Recommended Fuel"
                      options={recommendedFuelOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelConsumptionAtCruisingSpeed}
                      setValue={(val) =>
                        setForm({
                          ...form,
                          fuelConsumptionAtCruisingSpeed: val,
                        })
                      }
                      label="Fuel Consumption At Cruising Speed (Litres)"
                      options={fuelReserveOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelConsumptionRate}
                      setValue={(val) =>
                        setForm({ ...form, fuelConsumptionRate: val })
                      }
                      label="Fuel Consumption Rate"
                      options={fuelConsumptionRateOptions}
                      isMandatory={true}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelConsumtpionAtFullLoad}
                      setValue={(val) =>
                        setForm({ ...form, fuelConsumtpionAtFullLoad: val })
                      }
                      label="Fuel Consumption At Full Load (G/Kwh)"
                      options={fuelConsumtpionAtFullLoadOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelInjectionSystemType}
                      setValue={(val) =>
                        setForm({ ...form, fuelInjectionSystemType: val })
                      }
                      label="Fuel Injection System Type"
                      options={fuelInjectionSystemTypeOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelDeliveryPressure}
                      setValue={(val) =>
                        setForm({ ...form, fuelDeliveryPressure: val })
                      }
                      label="Fuel Delivery Pressure"
                      options={fuelDeliveryPressureOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelTankMaterial}
                      setValue={(val) =>
                        setForm({ ...form, fuelTankMaterial: val })
                      }
                      label="Fuel Tank Material"
                      options={fuelTankMaterialOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["fuelTankMaterial"] &&
                            errorDisplay("Fuel Tank Material")}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelLineDiameter}
                      setValue={(val) =>
                        setForm({ ...form, fuelLineDiameter: val })
                      }
                      label="Fuel Line Diameter"
                      options={fuelLineDiameterOptions}
                      isMandatory={false}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                  Cooling System
                </h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.afterCooled}
                      setValue={(val) => setForm({ ...form, afterCooled: val })}
                      label={ENGINE_ADVERT.AFTERCOOLED}
                      options={afterCooledOptions}
                      isMandatory={false}
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
                      options={coolingSystemOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["coolingSystem"] &&
                            errorDisplay("Cooling System")}
                        </small>
                      </p>
                    </div>
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
                      options={closedCoolingSystemOptions}
                      isMandatory={false}
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
                      options={openCoolingSystemOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.intercooled}
                      setValue={(val) => setForm({ ...form, intercooled: val })}
                      label={ENGINE_ADVERT.INTERCOOLED}
                      options={intercooledOptions}
                      isMandatory={false}
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
                      options={recommendedCoolantOptions}
                      isMandatory={false}
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
                      options={typeOfCoolingOptions}
                      isMandatory={false}
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
                      options={heatExchangerMaterialOptions}
                      isMandatory={false}
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
                      options={heatDissipationRateOptions}
                      isMandatory={false}
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
                      options={engineLubricationOptions}
                      isMandatory={false}
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
                      options={lubricationSystemOptions}
                      isMandatory={false}
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
                      options={coolingCapacityOptions}
                      isMandatory={false}
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
                      options={coolingFluidTypeOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["coolingFluidType"] &&
                            errorDisplay("Cooling Fluid Type")}
                        </small>
                      </p>
                    </div>
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
                      options={coolingSystemPressureOptions}
                      isMandatory={false}
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
                      options={airFilterTypeOptions}
                      isMandatory={false}
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
                      options={circulationPumpTypeOptions}
                      isMandatory={false}
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
                      options={rawWaterpumpTypeOptions}
                      isMandatory={false}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                  Installation and Mounting
                </h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineMountingOrientation}
                      setValue={(val) =>
                        setForm({ ...form, engineMountingOrientation: val })
                      }
                      label={ENGINE_ADVERT.ENGINE_MOUNTING_ORIENTATION}
                      options={engineMountingOrientationOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.ENGINE_SUSPENSION}
                      options={engineSuspensionOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineMountingType}
                      setValue={(val) =>
                        setForm({ ...form, engineMountingType: val })
                      }
                      label={ENGINE_ADVERT.ENGINE_MOUNTING_TYPE}
                      options={engineMountingTypeOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.MOUNTING_BRACKET_MATERIAL}
                      options={mountingBracketMaterialOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.ALIGNMENT_REQUIREMENTS}
                      options={alignmentRequirementsOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineBlock}
                      setValue={(val) => setForm({ ...form, engineBlock: val })}
                      label={ENGINE_ADVERT.ENGINE_BLOCK}
                      options={engineBlockOptions}
                      isMandatory={false}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                  Service & Maintenance
                </h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.scheduledMaintenancePlan}
                      setValue={(val) =>
                        setForm({ ...form, scheduledMaintenancePlan: val })
                      }
                      label={ENGINE_ADVERT.SCHEDULED_MAINTENANCE_PLAN}
                      options={scheduledMaintenancePlanOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.SERVICE_INTERVAL}
                      options={serviceIntervalOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.MAINTENANCE_LOG_REQUIREMENTS}
                      options={maintenanceLogRequirementsOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.AVAILABILITY_SPARE_PARTS}
                      options={availabilityOfSparePartsOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["availabilityOfSpareParts"] &&
                            errorDisplay(
                              ENGINE_ADVERT.AVAILABILITY_SPARE_PARTS
                            )}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.operationMode}
                      setValue={(val) =>
                        setForm({ ...form, operationMode: val })
                      }
                      label={ENGINE_ADVERT.OPERATION_MODE}
                      options={operationModeOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.lastServiceDate}
                      setValue={(val) =>
                        setForm({ ...form, lastServiceDate: val })
                      }
                      label={ENGINE_ADVERT.LAST_SERVICE_DATE}
                      options={lastServiceDateOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["lastServiceDate"] &&
                            errorDisplay(ENGINE_ADVERT.LAST_SERVICE_DATE)}
                        </small>
                      </p>
                    </div>
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                  Fuel Consumption
                </h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelConsumption}
                      setValue={(val) =>
                        setForm({ ...form, fuelConsumption: val })
                      }
                      label="Fuel Consumption At 3/4 Load (G/Kwh)"
                      options={fuelConsumptionOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelConsumptionHalfLoad}
                      setValue={(val) =>
                        setForm({ ...form, fuelConsumptionHalfLoad: val })
                      }
                      label="Fuel Consumption At 1/2 Load (G/Kwh)"
                      options={fuelConsumptionHalfLoadOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.fuelConsumptionPropellerCurve}
                      setValue={(val) =>
                        setForm({ ...form, fuelConsumptionPropellerCurve: val })
                      }
                      label="Fuel Consumption, Propeller Curve (L/H)"
                      options={fuelConsumptionPropellerCurveOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.heatRejectionToCoolant}
                      setValue={(val) =>
                        setForm({ ...form, heatRejectionToCoolant: val })
                      }
                      label="Heat Rejection To Coolant (Kw)"
                      options={heatRejectionToCoolantOptions}
                      isMandatory={false}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                  Safety and Monitoring
                </h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineMonitoringSystems}
                      setValue={(val) =>
                        setForm({ ...form, engineMonitoringSystems: val })
                      }
                      label="Engine Monitoring Systems"
                      isMandatory={false}
                      options={engineMonitoringSystemsOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.overheatProtection}
                      setValue={(val) =>
                        setForm({ ...form, overheatProtection: val })
                      }
                      label="Overheat Protection"
                      isMandatory={false}
                      options={overheatProtectionOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.lowOilPressureAlarm}
                      setValue={(val) =>
                        setForm({ ...form, lowOilPressureAlarm: val })
                      }
                      label="Low Oil Pressure Alarm"
                      isMandatory={false}
                      options={lowOilPressureAlarmOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.emergencyStopSystem}
                      setValue={(val) =>
                        setForm({ ...form, emergencyStopSystem: val })
                      }
                      label="Emergency Stop System"
                      isMandatory={false}
                      options={emergencyStopSystemOptions}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>Torque</h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.maximumTorque}
                      setValue={(val) =>
                        setForm({ ...form, maximumTorque: val })
                      }
                      label="Maximum Torque (Nm)"
                      options={maxTorqueOptions}
                      isMandatory={false}
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
                      options={maxTorqueRPMOptions}
                      isMandatory={true}
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
                      options={torqueRatedSpeedOptions}
                      isMandatory={false}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>RPM</h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.idleRPM}
                      setValue={(val) => setForm({ ...form, idleRPM: val })}
                      label="Idle RPM"
                      options={idleRPMOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.ratedSpeedRPM}
                      setValue={(val) =>
                        setForm({ ...form, ratedSpeedRPM: val })
                      }
                      label="Rated Speed (RPM)"
                      options={ratedSpeedOptions}
                      isMandatory={true}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.rpmAtMaxPower}
                      setValue={(val) =>
                        setForm({ ...form, rpmAtMaxPower: val })
                      }
                      label="RPM at Max Power"
                      options={rpmMaxPowerOptions}
                      isMandatory={false}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>Oil</h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.oilFilter}
                      setValue={(val) => setForm({ ...form, oilFilter: val })}
                      label="Oil Filter"
                      options={oilFilterOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.oilFilterType}
                      setValue={(val) =>
                        setForm({ ...form, oilFilterType: val })
                      }
                      label="Oil Filter Type"
                      options={oilFilterTypeOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.centrifugalOilCleaner}
                      setValue={(val) =>
                        setForm({ ...form, centrifugalOilCleaner: val })
                      }
                      label="Centrifugal Oil Cleaner"
                      options={centrifugalOilCleanerOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.oilCooler}
                      setValue={(val) => setForm({ ...form, oilCooler: val })}
                      label="Oil Cooler"
                      options={oilCoolerOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.oilFiller}
                      setValue={(val) => setForm({ ...form, oilFiller: val })}
                      label="Oil Filler"
                      options={oilFillerOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.oilDipstick}
                      setValue={(val) => setForm({ ...form, oilDipstick: val })}
                      label="Oil Dipstick"
                      options={oilDipstickOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.recommendedOil}
                      setValue={(val) =>
                        setForm({ ...form, recommendedOil: val })
                      }
                      label="Recommended Oil"
                      options={recommendedOilOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.oilCapacity}
                      setValue={(val) => setForm({ ...form, oilCapacity: val })}
                      label="Oil Capacity"
                      options={oilCapacityOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.oilChangeInterval}
                      setValue={(val) =>
                        setForm({ ...form, oilChangeInterval: val })
                      }
                      label="Oil Change Interval"
                      options={oilChangeIntervalOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.oilCoolingMethod}
                      setValue={(val) =>
                        setForm({ ...form, oilCoolingMethod: val })
                      }
                      label="Oil Cooling Method"
                      options={oilCoolingMethodOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.lubricationOilPressure}
                      setValue={(val) =>
                        setForm({ ...form, lubricationOilPressure: val })
                      }
                      label="Lubrication Oil Pressure"
                      options={lubricationOilPressureOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.oilFilterBypassValve}
                      setValue={(val) =>
                        setForm({ ...form, oilFilterBypassValve: val })
                      }
                      label="Oil Filter Bypass Valve"
                      options={oilFilterBypassValveOptions}
                      isMandatory={false}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                  Emmissions & Environment
                </h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.emissionCompliance}
                      setValue={(val) =>
                        setForm({ ...form, emissionCompliance: val })
                      }
                      label="Emission Compliance"
                      options={emissionComplianceOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.exhaustSystem}
                      setValue={(val) =>
                        setForm({ ...form, exhaustSystem: val })
                      }
                      label="Exhaust System"
                      isMandatory={false}
                      options={exhaustSystemOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.exhaustSystemType}
                      setValue={(val) =>
                        setForm({ ...form, exhaustSystemType: val })
                      }
                      label="Exhaust System Type"
                      isMandatory={false}
                      options={exhaustSystemTypeOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.exhaustGasAfterTreatment}
                      setValue={(val) =>
                        setForm({ ...form, exhaustGasAfterTreatment: val })
                      }
                      label={ENGINE_ADVERT.EXHAUST_GAS_AFTER_TREATMENT}
                      options={exhaustGasAfterTreatmentOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.exhaustGasStatus}
                      setValue={(val) =>
                        setForm({ ...form, exhaustGasStatus: val })
                      }
                      label={ENGINE_ADVERT.EXHAUST_GAS_STATUS}
                      isMandatory={false}
                      options={exhaustGasStatusOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.exhaustValveTiming}
                      setValue={(val) =>
                        setForm({ ...form, exhaustValveTiming: val })
                      }
                      label={ENGINE_ADVERT.EXHAUST_VALVE_TIMING}
                      isMandatory={false}
                      options={exhaustValveTimingOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.intakeValveTiming}
                      setValue={(val) =>
                        setForm({ ...form, intakeValveTiming: val })
                      }
                      label={ENGINE_ADVERT.INTAKE_VALVE_TIMING}
                      isMandatory={false}
                      options={intakeValveTimingOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.emissionControlTechnology}
                      setValue={(val) =>
                        setForm({ ...form, emissionControlTechnology: val })
                      }
                      label={ENGINE_ADVERT.EMISSION_CONTROL_TECHNOLOGY}
                      isMandatory={false}
                      options={emissionControlTechnologyOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.noxEmissions}
                      setValue={(val) =>
                        setForm({ ...form, noxEmissions: val })
                      }
                      label={ENGINE_ADVERT.NOX_EMISSIONS}
                      isMandatory={false}
                      options={noxEmissionsOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.soxEmissions}
                      setValue={(val) =>
                        setForm({ ...form, soxEmissions: val })
                      }
                      label={ENGINE_ADVERT.SOX_EMISSIONS}
                      isMandatory={false}
                      options={soxEmissionsOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.coxEmissions}
                      setValue={(val) =>
                        setForm({ ...form, coxEmissions: val })
                      }
                      label={ENGINE_ADVERT.COX_EMISSIONS}
                      isMandatory={false}
                      options={coxEmissionsOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.complianceWithIMOStandards}
                      setValue={(val) =>
                        setForm({ ...form, complianceWithIMOStandards: val })
                      }
                      label={ENGINE_ADVERT.STANDARD_COMPLIANCE}
                      isMandatory={false}
                      options={complianceWithIMOStandardsOptions}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>Dimensions</h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.displacement}
                      setValue={(val) =>
                        setForm({ ...form, displacement: val })
                      }
                      label={ENGINE_ADVERT.DISPLACEMENT}
                      isMandatory={true}
                      options={displacementOptions}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["displacement"] &&
                            errorDisplay(ENGINE_ADVERT.DISPLACEMENT)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.length}
                      setValue={(val) => setForm({ ...form, length: val })}
                      label={ENGINE_ADVERT.LENGTH}
                      isMandatory={true}
                      options={lengthOptions}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["length"] &&
                            errorDisplay(ENGINE_ADVERT.LENGTH)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.width}
                      setValue={(val) => setForm({ ...form, width: val })}
                      label={ENGINE_ADVERT.WIDTH}
                      isMandatory={true}
                      options={widthOptions}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["width"] && errorDisplay(ENGINE_ADVERT.WIDTH)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.height}
                      setValue={(val) => setForm({ ...form, height: val })}
                      label={ENGINE_ADVERT.HEIGHT}
                      isMandatory={true}
                      options={heightOptions}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["height"] &&
                            errorDisplay(ENGINE_ADVERT.HEIGHT)}
                        </small>
                      </p>
                    </div>
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
                      label={
                        ENGINE_ADVERT.LENGTH_FROM_FRONTEND_FLYWHEEL_HOUSING
                      }
                      options={lengthFromFrontEndOfFlywheelHousingOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineWeight}
                      setValue={(val) =>
                        setForm({ ...form, engineWeight: val })
                      }
                      label={ENGINE_ADVERT.ENGINE_WEIGHT}
                      options={engineWeightOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["engineWeight"] &&
                            errorDisplay(ENGINE_ADVERT.ENGINE_WEIGHT)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.dryWeight}
                      setValue={(val) => setForm({ ...form, dryWeight: val })}
                      label={ENGINE_ADVERT.DRY_WEIGHT}
                      options={dryWeightOptions}
                      isMandatory={true}
                    />
                    <div className="ms-2">
                      <p>
                        <small>
                          {error["dryWeight"] &&
                            errorDisplay(ENGINE_ADVERT.DRY_WEIGHT)}
                        </small>
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.exclOilWeight}
                      setValue={(val) =>
                        setForm({ ...form, exclOilWeight: val })
                      }
                      label={ENGINE_ADVERT.EXCL_OIL_WEIGHT_AND_COOLANT}
                      options={exclOilWeightOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.WEIGHT_WITH_HEAT_EXCHANGER}
                      options={weightWithHeatExchangerOptions}
                      isMandatory={false}
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
                      label={ENGINE_ADVERT.WEIGHT_WITH_KEEL_COOLING}
                      options={weightWithKeelCoolingOptions}
                      isMandatory={false}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                  Electrical System
                </h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.alternator}
                      setValue={(val) => setForm({ ...form, alternator: val })}
                      label={ENGINE_ADVERT.ALTERNATOR}
                      isMandatory={false}
                      options={alternatorOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.alternatorOutput}
                      setValue={(val) =>
                        setForm({ ...form, alternatorOutput: val })
                      }
                      label={ENGINE_ADVERT.ALTERNATOR_OUTPUT}
                      isMandatory={false}
                      options={alternatorOutputOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.batteryType}
                      setValue={(val) => setForm({ ...form, batteryType: val })}
                      label="Battery Type"
                      isMandatory={false}
                      options={batteryTypeOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.batteryVoltage}
                      setValue={(val) =>
                        setForm({ ...form, batteryVoltage: val })
                      }
                      label={ENGINE_ADVERT.BATTERY_VOLTAGE}
                      options={batteryVoltageOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.generatorOutputKw}
                      setValue={(val) =>
                        setForm({ ...form, generatorOutputKw: val })
                      }
                      label={ENGINE_ADVERT.GENERATOR_OUTPUT_KW}
                      options={batteryVoltageOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.alternatorOutputAmps}
                      setValue={(val) =>
                        setForm({ ...form, alternatorOutputAmps: val })
                      }
                      label={ENGINE_ADVERT.ALTERNATOR_OUTPUT_AMPS}
                      options={alternatorOutputAmpsOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.starterMotorVoltage}
                      setValue={(val) =>
                        setForm({ ...form, starterMotorVoltage: val })
                      }
                      label={ENGINE_ADVERT.STARTER_MOTOR_VOLTAGE}
                      options={starterMotorVoltageOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineControlUnitModel}
                      setValue={(val) =>
                        setForm({ ...form, engineControlUnitModel: val })
                      }
                      label={ENGINE_ADVERT.ECU}
                      options={engineControlUnitModelOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.batteryChargingSystem}
                      setValue={(val) =>
                        setForm({ ...form, batteryChargingSystem: val })
                      }
                      label={ENGINE_ADVERT.BATTERY_CHARGING_SYSTEM}
                      options={batteryChargingSystemOptions}
                      isMandatory={false}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.integratedGenerator}
                      setValue={(val) =>
                        setForm({ ...form, integratedGenerator: val })
                      }
                      label={ENGINE_ADVERT.INTEGRATED_GENERATOR}
                      options={integratedGeneratorOptions}
                      isMandatory={false}
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={6} style={{ marginTop: 40 }}>
                <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>Location</h6>
                <Col md={12} className="mt-4 mr-3" style={{ width: 480 }}>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.location}
                      setValue={(val) => setForm({ ...form, location: val })}
                      label={ENGINE_ADVERT.LOCATION}
                      isMandatory={false}
                      options={defaultOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.distance}
                      setValue={(val) => setForm({ ...form, distance: val })}
                      label={ENGINE_ADVERT.DISTANCE}
                      isMandatory={false}
                      options={defaultOptions}
                    />
                  </Col>
                  <Col xs={3} md={12} className="mb-2">
                    <SelectComponent
                      type="advertEngine"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.globalAddressLookup}
                      setValue={(val) =>
                        setForm({ ...form, globalAddressLookup: val })
                      }
                      label={ENGINE_ADVERT.GLOBAL_ADDRESS_LOOKUP}
                      isMandatory={false}
                      options={defaultOptions}
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
          </Form>
        )}
      </Container>
    </>
  );
};

export default EngineAdvert;
