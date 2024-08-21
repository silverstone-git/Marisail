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
import "bootstrap-icons/font/bootstrap-icons.css";
import CheckComponent from "../CheckComponent";

const EngineAdvert = () => {
  const [form, setForm] = useState({
    condition: "",
    usedCondition: "",
    seller: "",
    offeredBy: "",
    lastSurveyDate: null,
    brokerValuation: "",
    marisailVesselId: "",
    engineMake: "",
    engineModelYear: "",
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
    rawWaterpumpType: "",
    circulationPumpType: "",
    airFilterType: "",
    coolingSystemPressure: "",
    coolingFluidType: "",
    coolingCapacity: "",
    lubricationSystem: "",
    engineLubrication: "",
    heatDissipationRate: "",
    heatExchangerMaterial: "",
    typeOfCooling: "",
    recommendedCoolant: "",
    intercooled: "",
    openCoolingSystem: "",
    closedCoolingSystem: "",
    coolingSystem: "",
    afterCooled: "",
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
    generatorOutputAmps: "",
    starterMotorVoltage: "",
    engineControlUnitModel: "",
    batteryChargingSystem: "",
    integratedGenerator: "",
    complianceWithIMOStandards: "",
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
    emergencyStopSystem: "",
    engineMonitoringSystems: "",
    overheatProtection: "",
    lowOilPressureAlarm: "",
    location: "",
    distance: "",
    globalAddressLookup: "",
  });
  const [openKey, setOpenKey] = useState(null);
  const [engineIdOptions, setEngineIdOptions] = useState([]);
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
  const [grossPowerFullLoadKwOptions, setGrossPowerFullLoadKwOptions] = useState([]);
  const [grossPowerFullLoadOptions, setGrossPowerFullLoadOptions] = useState([]);
  const [grossPowerPropellerCurveKwOptions, setGrossPowerPropellerCurveKwOptions] = useState([]);
  const [grossPowerPropellerCurveOptions, setGrossPowerPropellerCurveOptions] = useState([]);
  const [grossTorqueOptions, setGrossTorqueOptions] = useState([]);
  const [continuousPowerOptions, setContinuousPowerOptions] = useState([]);
  const [maxContinuousRatingOptions, setMaxContinuousRatingOptions] = useState([]);
  const [engineSpeedRangeOptions, setEngineSpeedRangeOptions] = useState([]);

  const [engineEfficiencyOptions, setEngineEfficiencyOptions] = useState([]);
  const [powerToWeightRatioOptions, setPowerToWeightRatioOptions] = useState([]);
  const [transmissionTypeOptions, setTransmissionTypeOptions] = useState([]);
  const [gearShiftOptions, setGearShiftOptions] = useState([]);
  const [gearRatioOptions, setGearRatioOptions] = useState([]);
  const [flywheelOptions, setFlywheelOptions] = useState([]);
  const [siluminFlywheelHousingOptions, setSiluminFlywheelHousingOptions] = useState([]);
  const [camShaftOptions, setCamShaftOptions] = useState([]);
  const [camShaftAlloyOptions, setCamShaftAlloyOptions] = useState([]);
  const [crankcaseDesignOptions, setCrankcaseDesignOptions] = useState([]);

  const [cylinderConfigurationOptions, setCylinderConfigurationOptions] = useState([]);
  const [numberCylindersOptions, setNumberCylindersOptions] = useState([]);
  const [cylindersArrangementOptions, setCylindersArrangementOptions] = useState([]);
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
  const [seaWaterCooledChargeAirCoolerOptions, setSeaWaterCooledChargeAirCoolerOptions] = useState([]);
  const [seaWaterPumpOptions, setSeaWaterPumpOptions] = useState([]);
  const [heatExchangerWithExpansionTankOptions, setHeatExchangerWithExpansionTankOptions] = useState([]);
  const [heatExchangerOptions, setHeatExchangerOptions] = useState([]);
  const [closedCrankcaseVentilationOptions, setClosedCrankcaseVentilationOptions] = useState([]);
  const [starterMotorOptions, setStarterMotorOptions] = useState([]);
  const [turboChargerOptions, setTurboChargerOptions] = useState([]);
  const [turboChargingOptions, setTurboChargingOptions] = useState([]);
  const [engineControlSystemOptions, setEngineControlSystemOptions] = useState([]);
  const [engineManagementSystemOptions, setEngineManagementSystemOptions] = useState([]);

  const [PistonSpeedAt1500RpmOptions, setPistonSpeedAt1500RpmOptions] = useState([]);
  const [PistonSpeedAt1800RpmOptions, setPistonSpeedAt1800RpmOptions] = useState([]);
  const [firingOrderOptions, setFiringOrderOptions] = useState([]);
  const [pistonsOptions, setPistonsOptions] = useState([]);
  const [connectionRodsOptions, setConnectionRodsOptions] = useState([]);
  const [auxiliaryPowerTakeOffOptions, setAuxiliaryPowerTakeOffOptions] = useState([]);
  const [remoteControlSystemsOptions, setRemoteControlSystemsOptions] = useState([]);
  const [protectionCoversOptions, setProtectionCoversOptions] = useState([]);

  const [propulsionOptions, setPropulsionOptions] = useState([]);
  const [bowthrusterOptions, setBowthrusterOptions] = useState([]);
  const [propulsionSystemOptions, setPropulsionSystemOptions] = useState([]);
  const [propulsionSystemTypeOptions, setPropulsionSystemTypeOptions] = useState([]);
  const [propellerDiameterOptions, setPropellerDiameterOptions] = useState([]);
  const [propellerMaterialOptions, setPropellerMaterialOptions] = useState([]);
  const [propellerPitchOptions, setPropellerPitchOptions] = useState([]);
  const [propellerTypeOptions, setPropellerTypeOptions] = useState([]);
  const [propellerShaftDiameterOptions, setPropellerShaftDiameterOptions] = useState([]);
  const [gearboxTypeOptions, setGearboxTypeOptions] = useState([]);
  const [transmissionCoolingOptions, setTransmissionCoolingOptions] = useState([]);
  const [propellerBladeMaterialOptions, setPropellerBladeMaterialOptions] = useState([]);
  const [propellerShaftMaterialOptions, setPropellerShaftMaterialOptions] = useState([]);
  const [steeringSystemOptions, setSteeringSystemOptions] = useState([]);
  const [steeringControlTypeOptions, setSteeringControlTypeOptions] = useState([]);
  const [trimSystemOptions, setTrimSystemOptions] = useState([]);
  const [trimTabMaterialOptions, setTrimTabMaterialOptions] = useState([]);
  const [trimTabTypeOptions, setTrimTabTypeOptions] = useState([]);

  const [fuelPreFilterOptions, setFuelPreFilterOptions] = useState([]);
  const [electronicFuelinjectionOptions, setElectronicFuelinjectionOptions] = useState([]);
  const [fuelFilterOptions, setFuelFilterOptions] = useState([]);
  const [fuelFilterTypeOptions, setFuelFilterTypeOptions] = useState([]);
  const [fuelReserveOptions, setFuelReserveOptions] = useState([]);
  const [fuelSystemOptions, setFuelSystemOptions] = useState([]);
  const [fuelTankCapacityOptions, setFuelTankCapacityOptions] = useState([]);
  const [fuelTypeOptions, setFuelTypeOptions] = useState([]);
  const [lowestSpecificFuelConsumptionOptions, setLowestSpecificFuelConsumptionOptions] = useState([]);
  const [recommendedFuelOptions, setRecommendedFuelOptions] = useState([]);
  const [afterCooledOptions, setAfterCooledOptions] = useState([]);
  const [fuelConsumptionRateOptions, setFuelConsumptionRateOptions] = useState([]);
  const [fuelConsumtpionAtFullLoadOptions, setFuelConsumtpionAtFullLoadOptions] = useState([]);
  const [fuelInjectionSystemTypeOptions, setFuelInjectionSystemTypeOptions] = useState([]);
  const [fuelDeliveryPressureOptions, setDuelDeliveryPressureOptions] = useState([]);
  const [fuelTankMaterialOptions, setFuelTankMaterialOptions] = useState([]);
  const [fuelLineDiameterOptions, setFuelLineDiameterOptions] = useState([]);
  const [coolingSystemOptions, setCoolingSystemOptions] = useState([]);
  const [closedCoolingSystemOptions, setClosedCoolingSystemOptions] = useState([]);
  const [openCoolingSystemOptions, setOpenCoolingSystemOptions] = useState([]);
  const [intercooledOptions, setIntercooledOptions] = useState([]);
  const [recommendedCoolantOptions, setRecommendedCoolantOptions] = useState([]);
  const [typeOfCoolingOptions, setTypeOfCoolingOptions] = useState([]);
  const [heatExchangerMaterialOptions, setHeatExchangerMaterialOptions] = useState([]);
  const [heatDissipationRateOptions, setHeatDissipationRateOptions] = useState([]);
  const [engineLubricationOptions, setEngineLubricationOptions] = useState([]);
  const [lubricationSystemOptions, setLubricationSystemOptions] = useState([]);  
  const [coolingCapacityOptions, setCoolingCapacityOptions] = useState([]);
  const [coolingFluidTypeOptions, setCoolingFluidTypeOptions] = useState([]);
  const [coolingSystemPressureOptions, setCoolingSystemPressureOptions] = useState([]);
  const [airFilterTypeOptions, setAirFilterTypeOptions] = useState([]);
  const [circulationPumpTypeOptions, setCirculationPumpTypeOptions] = useState([]);
  const [rawWaterpumpTypeOptions, setRawWaterpumpTypeOptions] = useState([]);

  const [alternatorOptions, setAlternatorOptions] = useState([]);
  const [batteryTypeOptions, setBatteryTypeOptions] = useState([]);
  const [batteryVoltageOptions, setBatteryVoltageOptions] = useState([]);
  const [generatorOutputKwOptions, setGeneratorOutputKwOptions] = useState([]);
  const [generatorOutputAmpsOptions, setGeneratorOutputAmpsOptions] = useState([]);
  const [starterMotorVoltageOptions, setStarterMotorVoltageOptions] = useState([]);
  const [engineControlUnitModelOptions, setEngineControlUnitModelOptions] = useState([]);
  const [batteryChargingSystemOptions, setBatteryChargingSystemOptions] = useState([]);
  const [integratedGeneratorOptions, setIntegratedGeneratorOptions] = useState([]);
  const [alternatorOutputAMPS, setAlternatorOutputAMPS] = useState([]);
  const [batteryVoltageNumberOptions, setBatteryVoltageNumber] = useState([]);

  const [displacementOptions, setDisplacementOptions] = useState([]);
  const [lengthOptions, setLengthOptions] = useState([]);
  const [widthOptions, setWidthOptions] = useState([]);
  const [heightOptions, setHeightOptions] = useState([]);
  const [weightWithKeelCoolingOptions, setWeightWithKeelCoolingOptions] = useState([]);
  const [exclOilWeightOptions, setExclOilWeightOptions] = useState([]);
  const [dryWeightOptions, setDryWeightOptions] = useState([]);
  const [engineWeightOptions, setEngineWeightOptions] = useState([]);
  const [lengthFromFrontEndOfFlywheelHousingOptions, setLengthFromFrontEndOfFlywheelHousingOptions] = useState([]);
  const [weightWithHeatExchangerOptions, setWeightWithHeatExchangerOptions] = useState([]);

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
  const fetchEngineModel = async (engineMake) => {
    const URL = `http://localhost:3001/api/advert_engine/engine_model?engine_make=${encodeURIComponent(
      engineMake
    )}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setEngineModelOptions(toJson.result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEngineModelYear = async (engineMake, engineModel) => {
    const URL = `http://localhost:3001/api/advert_engine/engine_modelyear?engine_make=${encodeURIComponent(
      engineMake
    )}&engine_model=${encodeURIComponent(engineModel)}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setEngineModelYearOptions(toJson.result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEngineType = async (engineMake, engineModel, engineModelYear) => {
    const URL = `http://localhost:3001/api/advert_engine/engine_type?engine_make=${encodeURIComponent(
      engineMake
    )}&engine_model=${encodeURIComponent(
      engineModel
    )}&engine_modelyear=${encodeURIComponent(engineModelYear)}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setEngineTypeOptions(toJson.result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTypeDesignation = async (
    engineMake,
    engineModel,
    engineModelYear,
    engineType
  ) => {
    const URL = `http://localhost:3001/api/advert_engine/type_designation?engine_make=${encodeURIComponent(
      engineMake
    )}&engine_model=${encodeURIComponent(
      engineModel
    )}&engine_modelyear=${encodeURIComponent(
      engineModelYear
    )}&engine_type=${encodeURIComponent(engineType)}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setTypeDesignationOptions(toJson.type_designation);
      setEngineIdOptions(toJson.engineId);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCondition = async (
    engineMake,
    engineModel,
    engineModelYear,
    engineType,
    typeDesignation
  ) => {
    const URL = `http://localhost:3001/api/advert_engine/conditions?engine_make=${encodeURIComponent(
      engineMake
    )}&engine_model=${encodeURIComponent(
      engineModel
    )}&engine_modelyear=${encodeURIComponent(
      engineModelYear
    )}&engine_type=${encodeURIComponent(
      engineType
    )}&type_designation=${encodeURIComponent(
      typeDesignation
    )}&engine_ids=${encodeURIComponent(engineIdOptions)}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setConditionOptions(toJson.condition);
      setUsedConditionOptions(toJson.usedCondition);
      setSellerOptions(toJson.seller);
      setOfferedByOptions(toJson.offeredBy);

      setCertificationOptions(toJson.engineCertification);
      setEngineSerialNumberOptions(toJson.engineSerial);
      setCEDesignCategoryOptions(toJson.ceCategory);
      setNumberDrivesOptions(toJson.numberDrive);
      setNumberEnginesOptions(toJson.numberEngine);
      setEngineRangeOptions(toJson.engineRange);
      setCruisingSpeedOptions(toJson.cruiseSpeed);
      setDriveTypeOptions(toJson.driveType);
      setEngineHoursOptions(toJson.engineHours);
      setIgnitionSystemOptions(toJson.ignitionSystem);
      setNoiseLevelOptions(toJson.cruiseSpeed);
      setEngineSoundproofingKits(toJson.engineSoundProofingKit);

      setNominalRatingOptions(toJson.nomialRating);
      setEnginePerformanceOptions(toJson.enginePerformance);
      setMaxPowerOutputOptions(toJson.maxPowerOutput);
      setMaxPowerBHPOptions(toJson.maxPower);
      setMaxSpeedKnotsOptions(toJson.maxSpeed);
      setSuperchargedOptions(toJson.superCharged);      
      setValveTrainOptions(toJson.valveTrain);
      setGrossPowerFullLoadKwOptions(toJson.GP_fullLoadKW);
      setGrossPowerFullLoadOptions(toJson.GP_fullLoadMetric);
      setGrossPowerPropellerCurveKwOptions(toJson.GP_PropellerCurveKW);
      setGrossPowerPropellerCurveOptions(toJson.GP_PropellerCurveMetric);
      setGrossTorqueOptions(toJson.grossTorque);
      setContinuousPowerOptions(toJson.continousPowerKWHP);
      setMaxContinuousRatingOptions(toJson.maxContinousRating);
      setEngineSpeedRangeOptions(toJson.engineSpeedRange);
      setEngineEfficiencyOptions(toJson.engineEfficiency);
      setPowerToWeightRatioOptions(toJson.powerToWeightRatio);

      setCylinderConfigurationOptions(toJson.cylinderConfiguration);
      setNumberCylindersOptions(toJson.numberCylinders);
      setCylindersArrangementOptions(toJson.cylindersArrangement);
      setNumberValvesOptions(toJson.numberValves);      
      setBoreStrokeOptions(toJson.boreStroke);
      setBoreOptions(toJson.bore);

      setIdleRPMOptions(toJson.idleRPM);
      setRPMMaxPowerOptions(toJson.rpmMaxPower);
      setRatedSpeedOptions(toJson.ratedSpeed);
      setMaxTorqueOptions(toJson.maxTorque);
      setMaxTorqueRPMOptions(toJson.maxTorqueRPM);
      setTorqueRatedSpeed(toJson.torqueRatedSpeed);
      setValvePerCylinderOptions(toJson.valvePerCylinder);

      //ElectricalFields
      setBatteryVoltageNumber(toJson.battery_voltagenumber);
      setIntegratedGeneratorOptions(toJson.integrated_generator);
      setBatteryChargingSystemOptions(toJson.Battery_ChargingSystem);
      setEngineControlUnitModelOptions(toJson.ECU_Model);
      setStarterMotorVoltageOptions(toJson.starter_MotorVoltage);
      setAlternatorOutputAMPS(toJson.alternator_outputAMPS);
      setBatteryVoltageOptions(toJson.battery_voltage)
      setAlternatorOptions(toJson.alternator);
      setAlternatorOutputOptions(toJson.alternator_output);
      setBatteryTypeOptions(toJson.battery_type)
      
      //CoolingFields
      setCoolingSystemOptions(toJson.cooling_system);
      setClosedCoolingSystemOptions(toJson.closed_coolingsystem);
      setOpenCoolingSystemOptions(toJson.open_coolingsystem);
      setIntercooledOptions(toJson.intercooled);
      setRecommendedCoolantOptions(toJson.recommended_coolant);
      setAfterCooledOptions(toJson.after_cooled);
      setTypeOfCoolingOptions(toJson.cooling_type);
      setHeatExchangerMaterialOptions(toJson.heat_exchangermaterial);
      setHeatDissipationRateOptions(toJson.heat_dissipationrate);
      setEngineLubricationOptions(toJson.engine_lubrication);
      setLubricationSystemOptions(toJson.lubrication_system);
      setCoolingFluidTypeOptions(toJson.cooling_fluidtype);
      setCoolingSystemPressureOptions(toJson.cooling_systempressure)
      setAirFilterTypeOptions(toJson.air_filtertype);
      setCirculationPumpTypeOptions(toJson.circulation_pumptype);
      setRawWaterpumpTypeOptions(toJson.rawwater_pumptype)

      //FuelFields
      setFuelPreFilterOptions(toJson.fuel_prefilter);
      setElectronicFuelinjectionOptions(toJson.EFI);
      setFuelFilterTypeOptions(toJson.fuel_filtertype);
      setFuelFilterOptions(toJson.fuel_filter);
      setFuelReserveOptions(toJson.fuel_reserve);
      setFuelSystemOptions(toJson.fuel_system);
      setFuelTankCapacityOptions(toJson.fuel_tankcapacity);
      setFuelTypeOptions(toJson.fuel_type);
      setLowestSpecificFuelConsumptionOptions(toJson.lowest_fuelconsumption);
      setFuelConsumptionRateOptions(toJson.fuel_consumptionrate);
      setFuelConsumtpionAtFullLoadOptions(toJson.FC_fullload);
      setFuelInjectionSystemTypeOptions(toJson.FuelInjection_systemtype);
      setDuelDeliveryPressureOptions(toJson.Fuel_deliverypressure)
      setFuelTankMaterialOptions(toJson.Fuel_tankmaterial);
      setFuelLineDiameterOptions(toJson.fuel_linediameter);
      // (toJson.FC_3Quarterload)
      // (toJson.FC_halfload)
      // (toJson.FC_propellercurve)
      // (toJson.heat_rejection)
      setRecommendedFuelOptions(toJson.recommended_fuel)

      //PropulsionFields
      setPropulsionOptions(toJson.propulsion);
      setPropellerBladeMaterialOptions(toJson.propeller_bladematerial);
      setPropellerShaftMaterialOptions(toJson.propeller_shaftmaterial);
      setSteeringSystemOptions(toJson.steering_system);
      setSteeringControlTypeOptions(toJson.steering_controltype);
      setTrimSystemOptions(toJson.trim_system);
      setTrimTabMaterialOptions(toJson.trim_tabmaterial);
      setTrimTabTypeOptions(toJson.trim_tab_type);
      setBowthrusterOptions(toJson.bowthruster);
      setPropulsionSystemOptions(toJson.propulsion_system);
      setPropulsionSystemTypeOptions(toJson.propulsion_systemtype);
      setPropellerDiameterOptions(toJson.propeller_diameter);
      setPropellerMaterialOptions(toJson.propeller_material)
      setPropellerPitchOptions(toJson.propeller_pitch);
      setPropellerTypeOptions(toJson.propeller_type);
      setPropellerShaftDiameterOptions(toJson.propeller_shaftdiameter)
      setGearboxTypeOptions(toJson.gearbox_type);
      setTransmissionCoolingOptions(toJson.transmission_cooling);

      //TransmissionFields
      setTransmissionTypeOptions(toJson.transmission_type);
      setGearShiftOptions(toJson.gear_shift);
      setGearRatioOptions(toJson.gear_ratio);
      setGearShiftTypeOptions(toJson.gearshift_type);
      setFlywheelOptions(toJson.flywheel_SAE);
      setSiluminFlywheelHousingOptions(toJson.flywheel_housing);
      setCamShaftOptions(toJson.camshaft)
      setCamShaftAlloyOptions(toJson.crankshaft_alloy);
      setCrankcaseDesignOptions(toJson.crankcase_design);

      //EquipmentFields
      setEngineManagementSystemOptions(toJson.EMS);
      setEngineControlSystemOptions(toJson.engine_controlsystem);
      setUnitInjectorsOptions(toJson.unit_injectors);
      setTurboChargerOptions(toJson.turbocharger);
      setTurboChargingOptions(toJson.turbo_charging);
      setStarterMotorOptions(toJson.starter_motor);
      setProtectionCoversOptions(toJson.protection_covers);
      setClosedCrankcaseVentilationOptions(toJson.crankcase_ventilation);
      setHeatExchangerOptions(toJson.heat_exchanger);
      setHeatExchangerWithExpansionTankOptions(toJson.heat_exchanger_WET);
      setSeaWaterPumpOptions(toJson.seawater_pump);
      setSeaWaterCooledChargeAirCoolerOptions(toJson.charge_aircooler);
      setWorkingPrincipleOptions(toJson.working_principle)
      setCompressionRatioOptions(toJson.compression_ratio);
      setPistonSpeedAt1500RpmOptions(toJson.pistonspeed_1500);
      setPistonSpeedAt1800RpmOptions(toJson.pistonspeed_1800)
      setFiringOrderOptions(toJson.firing_order);
      setPistonsOptions(toJson.pistons)
      setConnectionRodsOptions(toJson.connection_rods);
      setAuxiliaryPowerTakeOffOptions(toJson.auxiliarypower_takeoff);
      setRemoteControlSystemsOptions(toJson.remote_controlsystems)

      //DimensionFields
      setDisplacementOptions(toJson.displacement);
      setLengthOptions(toJson.length);
      setWidthOptions(toJson.width);
      setHeightOptions(toJson.height);
      setLengthFromFrontEndOfFlywheelHousingOptions(toJson.Engine_length);
      setEngineWeightOptions(toJson.engine_weight);
      setDryWeightOptions(toJson.dry_weight)
      setWeightWithKeelCoolingOptions(toJson.weight_keelcooling);
      setExclOilWeightOptions(toJson.weight_excloil);
      setWeightWithHeatExchangerOptions(toJson.weight_heatexchanger)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchEngineMake();
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
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.engineMake}
                    setValue={(val) => {
                      setForm({ ...form, engineMake: val });
                      fetchEngineModel(val);
                      fetchEngineModelYear(val);
                    }}
                    label={ENGINE_ADVERT.ENGINE_MAKE}
                    options={engineMakeOptions}
                    isMandatory={true}
                  />
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
                      fetchEngineModelYear(form.engineMake, val);
                    }}
                    label={ENGINE_ADVERT.ENGINE_MODEL}
                    options={engineModelOptions}
                    isMandatory={true}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.engineModelYear}
                    setValue={(val) => {
                      setForm({ ...form, engineModelYear: val });
                      fetchEngineType(form.engineMake, form.engineModel, val);
                    }}
                    label={ENGINE_ADVERT.ENGINE_MODEL_YEAR}
                    options={engineModelYearOptions}
                    isMandatory={true}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.engineType}
                    setValue={(val) => {
                      setForm({ ...form, engineType: val });
                      fetchTypeDesignation(
                        form.engineMake,
                        form.engineModel,
                        form.engineModelYear,
                        val
                      );
                    }}
                    label={ENGINE_ADVERT.ENGINE_TYPE}
                    options={engineTypeOptions}
                    isMandatory={true}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.typeDesignation}
                    setValue={(val) => {
                      setForm({ ...form, typeDesignation: val });
                      fetchCondition(
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
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Condition</h6>
              <Col md={12}>
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
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    value={form.usedCondition}
                    setValue={(val) => setForm({ ...form, usedCondition: val })}
                    label={ENGINE_ADVERT.USED_CONDITION}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    options={usedConditionOptions}
                    isMandatory={true}
                  />
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
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>General</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
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
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.ENGINE_CLASSIFICATION}
                    setValue={(val) => setForm({ ...form, engineClassification: val })}
                    name={ENGINE_ADVERT.ENGINE_CLASSIFICATION}
                    id={ENGINE_ADVERT.ENGINE_CLASSIFICATION_ID}
                    isMandatory={true}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.certification}
                    setValue={(val) => setForm({ ...form, certification: val })}
                    label={ENGINE_ADVERT.CERTIFICATION}
                    options={certificationOptions}
                    isMandatory={true}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label={ENGINE_ADVERT.MANUFACTURER_WARRANTY}
                    setValue={(val) => setForm({ ...form, manufacturerWarranty: val })}
                    name={ENGINE_ADVERT.MANUFACTURER_WARRANTY}
                    id={ENGINE_ADVERT.MANUFACTURER_WARRANTY_ID}
                    isMandatory={false}
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
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.numberDrives}
                    setValue={(val) => setForm({ ...form, numberDrives: val })}
                    label={ENGINE_ADVERT.NUMBER_DRIVES}
                    options={numberDrivesOptions}
                    isMandatory={true}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.numberEngines}
                    setValue={(val) => setForm({ ...form, numberEngines: val })}
                    label={ENGINE_ADVERT.NUMBER_ENGINES}
                    options={numberEnginesOptions}
                    isMandatory={true}
                  />
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
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.cruisingSpeed}
                    setValue={(val) => setForm({ ...form, cruisingSpeed: val })}
                    label={ENGINE_ADVERT.CRUISING_SPEED}
                    options={cruisingSpeedOptions}
                    isMandatory={true}
                  />
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
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.maxSpeedKnots}
                    setValue={(val) => setForm({ ...form, maxSpeedKnots: val })}
                    label="Max. Speed (Knots)"
                    options={maxSpeedKnotsOptions}
                    isMandatory={true}
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
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Transmission</h6>
              <Col md={12}>
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
                    setValue={(val) => setForm({ ...form, gearShiftType: val })}
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
                    setValue={(val) => setForm({ ...form, flywheelSAE14: val })}
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
                    setValue={(val) => setForm({ ...form, camShaftAlloy: val })}
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
                    setValue={(val) => setForm({ ...form, numberValves: val })}
                    label="Number Valves"
                    options={numberValvesOptions}
                    isMandatory={true}
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
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Equipment</h6>
              <Col md={12}>
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
                    setValue={(val) => setForm({ ...form, unitInjectors: val })}
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
                    setValue={(val) => setForm({ ...form, turboCharger: val })}
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
                    setValue={(val) => setForm({ ...form, starterMotor: val })}
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
                    setValue={(val) => setForm({ ...form, heatExchanger: val })}
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
                      setForm({ ...form, heatExchangerWithExpansionTank: val })
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
                    setValue={(val) => setForm({ ...form, seaWaterPump: val })}
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
                    value={form.PistonSpeedAt1500Rpm}
                    setValue={(val) =>
                      setForm({ ...form, PistonSpeedAt1500Rpm: val })
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
                    value={form.PistonSpeedAt1800Rpm}
                    setValue={(val) =>
                      setForm({ ...form, PistonSpeedAt1800Rpm: val })
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
                    options={propulsionOptions}
                    isMandatory={true}
                  />
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
                    setValue={(val) => setForm({ ...form, propellerType: val })}
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
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Fuel System</h6>
              <Col md={12}>
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
                    setValue={(val) => setForm({ ...form, fuelPreFilter: val })}
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
                      setForm({ ...form, fuelConsumptionAtCruisingSpeed: val })
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
                    setValue={(val) => setForm({ ...form, coolingSystem: val })}
                    label="Cooling System"
                    options={coolingSystemOptions}
                    isMandatory={true}
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
                    label="Intercooled"
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
                    setValue={(val) => setForm({ ...form, typeOfCooling: val })}
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
                    setValue={(val) => setForm({ ...form, airFilterType: val })}
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
                    label={ENGINE_ADVERT.ENGINE_MOUNTING_ORIENTATION}
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
                    isMandatory={false}
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
                    label={ENGINE_ADVERT.SCHEDULED_MAINTENANCE_PLAN}
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
                    isMandatory={true}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.operationMode}
                    setValue={(val) => setForm({ ...form, operationMode: val })}
                    label={ENGINE_ADVERT.OPERATION_MODE}
                    options={defaultOptions}
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
                    options={defaultOptions}
                    isMandatory={true}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Fuel Consumption</h6>
              <Col md={12}>
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Safety and Monitoring</h6>
              <Col md={12}>
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    setValue={(val) => setForm({ ...form, ratedSpeedRPM: val })}
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
                    setValue={(val) => setForm({ ...form, rpmAtMaxPower: val })}
                    label="RPM at Max Power"
                    options={rpmMaxPowerOptions}
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Oil</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.oilFilter}
                    setValue={(val) => setForm({ ...form, oilFilter: val })}
                    label="Oil Filter"
                    options={defaultOptions}
                    isMandatory={false}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.oilFilterType}
                    setValue={(val) => setForm({ ...form, oilFilterType: val })}
                    label="Oil Filter Type"
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    options={defaultOptions}
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Emmissions & Environment</h6>
              <Col md={12}>
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
                    options={defaultOptions}
                    isMandatory={false}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.exhaustSystem}
                    setValue={(val) => setForm({ ...form, exhaustSystem: val })}
                    label="Exhaust System"
                    isMandatory={false}
                    options={defaultOptions}
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
                    options={defaultOptions}
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
                    label="Exhaust Gas After Treatment"
                    options={defaultOptions}
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
                    label="Exhaust Gas Status"
                    isMandatory={false}
                    options={defaultOptions}
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
                    label="Exhaust Valve Timing"
                    isMandatory={false}
                    options={defaultOptions}
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
                    label="Intake Valve Timing"
                    isMandatory={false}
                    options={defaultOptions}
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
                    label="Emission Control Technology"
                    isMandatory={false}
                    options={defaultOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.noxEmissions}
                    setValue={(val) => setForm({ ...form, noxEmissions: val })}
                    label="NOx Emissions (g/kWh)"
                    isMandatory={false}
                    options={defaultOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.soxEmissions}
                    setValue={(val) => setForm({ ...form, soxEmissions: val })}
                    label="SOx Emissions (g/kWh)"
                    isMandatory={false}
                    options={defaultOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.coxEmissions}
                    setValue={(val) => setForm({ ...form, coxEmissions: val })}
                    label="COx Emissions (g/kWh)"
                    isMandatory={false}
                    options={defaultOptions}
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
                    label="Compliance With IMO Standards"
                    isMandatory={false}
                    options={defaultOptions}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Electrical System</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.alternator}
                    setValue={(val) => setForm({ ...form, alternator: val })}
                    label="Alternator"
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
                    label="Alternator Output"
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
                    label="Battery Voltage"
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
                    label="Generator Output (kW)"
                    options={generatorOutputKwOptions}
                    isMandatory={false}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.generatorOutputAmps}
                    setValue={(val) =>
                      setForm({ ...form, generatorOutputAmps: val })
                    }
                    label="Generator Output (Amps)"
                    options={generatorOutputAmpsOptions}
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
                    label="Starter Motor Voltage"
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
                    label="Engine Control Unit (ECU) Model"
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
                    label="Battery Charging System"
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
                    label="Integrated Generator"
                    options={integratedGeneratorOptions}
                    isMandatory={false}
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
                    isMandatory={true}
                    options={displacementOptions}
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
                    isMandatory={true}
                    options={lengthOptions}
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
                    isMandatory={true}
                    options={widthOptions}
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
                    isMandatory={true}
                    options={heightOptions}
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
                    setValue={(val) => setForm({ ...form, engineWeight: val })}
                    label="Engine Weight"
                    options={engineWeightOptions}
                    isMandatory={true}
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
                    options={dryWeightOptions}
                    isMandatory={true}
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
                    label="Weight With Heat Exchanger"
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
                    label="Weight With Keel Cooling"
                    options={weightWithKeelCoolingOptions}
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Location</h6>
              <Col md={12}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    type="advertEngine"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.location}
                    setValue={(val) => setForm({ ...form, location: val })}
                    label="Location"
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
                    label="Distance"
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
                    label="Global Address Lookup"
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
