import { Router } from "express";
import dbConnection from "../config/dbConfig.js";

const advertEngineRouter = Router();

//API call from frontend - http://localhost:3001/api/advert_engine/
advertEngineRouter.get("/", (req, res) => {
  console.log("Inside advert engine...");
  res.json({ message: "advert engine route" });
});

//API call from frontend - http://localhost:3001/api/advert_engine/main
advertEngineRouter.get("/main/", (req, res) => {
  console.log("Inside advert_engine main page...");
  res.json({ message: "advert engine main page route" });
});

advertEngineRouter.get("/engine_make/", async (req, res) => {
  let connection;
  try {
    connection = await dbConnection.getConnection();
    const [rows] = await connection.query(
      "SELECT DISTINCT engine_make FROM engine_general ORDER BY engine_make"
    );
    return res
      .status(200)
      .json({ ok: true, result: rows.map((row) => row.engine_make) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

advertEngineRouter.get("/engine_model/", async (req, res) => {
  let connection;
  try {
    // console.log("001 Model--", req.query.engine_make);
    let filterEngineMake = "";
    connection = await dbConnection.getConnection();
    if (req.query.engine_make) {
      filterEngineMake = ` WHERE engine_make = '${req.query.engine_make}' ORDER BY engine_model`;
    } else {
      filterEngineMake = ` ORDER BY engine_model`;
    }
    const [rows] = await connection.query(
      `SELECT DISTINCT engine_model FROM engine_general ${filterEngineMake}`
    );
    // console.log("Final Query------------------->",`SELECT DISTINCT engine_model FROM engine_general ${filterEngineMake}`);
    // console.log("Final Rows------------------->",rows);

    return res
      .status(200)
      .json({ ok: true, result: rows.map((row) => row.engine_model) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

advertEngineRouter.get("/engine_modelyear/", async (req, res) => {
  let connection;
  let filterEngineMakeAndModel = "";
  try {
    connection = await dbConnection.getConnection();
    if (req.query.engine_make && req.query.engine_model) {
      filterEngineMakeAndModel = ` WHERE engine_make = '${req.query.engine_make}' AND engine_model = '${req.query.engine_model}'`;
    } else if (req.query.engine_make && !req.query.engine_model) {
      filterEngineMakeAndModel = ` WHERE engine_make = '${req.query.engine_make}'`;
    } else if (!req.query.engine_make && req.query.engine_model) {
      filterEngineMakeAndModel = ` WHERE engine_model = '${req.query.engine_model}'`;
    } else {
      filterEngineMakeAndModel = ``;
    }
    const [rows] = await connection.query(
      `SELECT DISTINCT engine_modelyear FROM engine_general ${filterEngineMakeAndModel} ORDER BY engine_modelyear`
    );
    // console.log("Year---------------->",`SELECT DISTINCT engine_modelyear FROM engine_general ${filterEngineMakeAndModel} ORDER BY engine_modelyear`);
    // console.log("Final Rows------------------->",rows);
    return res
      .status(200)
      .json({ ok: true, result: rows.map((row) => row.engine_modelyear) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

advertEngineRouter.get("/engine_type/", async (req, res) => {
  let connection;
  let filterOptions = "";
  try {
    connection = await dbConnection.getConnection();
    if (
      req.query.engine_make &&
      req.query.engine_model &&
      req.query.engine_modelyear
    ) {
      filterOptions = ` WHERE engine_make = '${req.query.engine_make}' AND engine_model = '${req.query.engine_model}' AND engine_modelyear = '${req.query.engine_modelyear}'`;
    } else if (
      req.query.engine_make &&
      !req.query.engine_model &&
      !req.query.engine_modelyear
    ) {
      filterOptions = ` WHERE engine_make = '${req.query.engine_make}'`;
    } else if (
      !req.query.engine_make &&
      req.query.engine_model &&
      !req.query.engine_modelyear
    ) {
      filterOptions = ` WHERE engine_model = '${req.query.engine_model}'`;
    } else if (
      !req.query.engine_make &&
      !req.query.engine_model &&
      req.query.engine_modelyear
    ) {
      filterOptions = ` WHERE engine_modelyear = '${req.query.engine_modelyear}'`;
    } else {
      filterOptions = ``;
    }
    const [rows] = await connection.query(
      `SELECT DISTINCT engine_type FROM engine_general ${filterOptions} ORDER BY engine_type`
    );
    return res
      .status(200)
      .json({ ok: true, result: rows.map((row) => row.engine_type) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

advertEngineRouter.get("/type_designation/", async (req, res) => {
  let connection;
  let filterOptions = "";
  try {
    connection = await dbConnection.getConnection();
    if (
      req.query.engine_make &&
      req.query.engine_model &&
      req.query.engine_modelyear &&
      req.query.engine_type
    ) {
      filterOptions = ` WHERE engine_make = '${req.query.engine_make}' AND engine_model = '${req.query.engine_model}' AND engine_modelyear = '${req.query.engine_modelyear}' AND engine_type = '${req.query.engine_type}'`;
    } else if (
      req.query.engine_make &&
      !req.query.engine_model &&
      !req.query.engine_modelyear
    ) {
      filterOptions = ` WHERE engine_make = '${req.query.engine_make}'`;
    } else if (
      !req.query.engine_make &&
      req.query.engine_model &&
      !req.query.engine_modelyear
    ) {
      filterOptions = ` WHERE engine_model = '${req.query.engine_model}'`;
    } else if (
      !req.query.engine_make &&
      !req.query.engine_model &&
      req.query.engine_modelyear
    ) {
      filterOptions = ` WHERE engine_modelyear = '${req.query.engine_modelyear}'`;
    } else if (
      !req.query.engine_make &&
      !req.query.engine_model &&
      !req.query.engine_modelyear &&
      req.query.engine_type
    ) {
      filterOptions = ` WHERE engine_type = '${req.query.type_designation}'`;
    } else {
      filterOptions = ``;
    }
    const [rows] = await connection.query(
      `SELECT DISTINCT type_designation FROM engine_general ${filterOptions} ORDER BY type_designation`
    );
    const [engineId] = await connection.query(
      `SELECT DISTINCT engine_id FROM engine_general ${filterOptions} ORDER BY engine_id`
    );
    // console.log("Final Rows Filter Options------------------->",filterOptions);
    // console.log("Final Rows Engine Id------------------->",engineId);
    return res
      .status(200)
      .json({
        ok: true,
        type_designation: rows.map((row) => row.type_designation),
        engineId: engineId.map((row) => row.engine_id),
      });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

advertEngineRouter.get("/conditions/", async (req, res) => {
  let connection;
  try {
    console.log("001 Engine Ids--", req.query.engine_ids);

    connection = await dbConnection.getConnection();
    // console.log("Engine general query--", `SELECT marisail_vesselid,	engine_make,	engine_classifiable,	engine_certification,	engine_model,	manufacture_warranty,
    //   engine_modelyear,	engine_serial,	engine_type,	type_designation,	engine_year,	ce_category,	number_drives,
    //   number_engines,	engine_range,	cruise_speed,	drive_type,	engine_hours,	ignition_system,	noiselevel_db,	enginesound_proofingkits
    //   FROM engine_general WHERE engine_id IN (${req.query.engine_ids})`);
    const [engineGeneralFields] = await connection.query(
      `SELECT marisail_vesselid,	offered_by, seller, used_condition, condition_1, engine_make,	engine_classifiable,	engine_certification,	engine_model,	manufacture_warranty,
      engine_modelyear,	engine_serial,	engine_type,	type_designation,	engine_year,	ce_category,	number_drives,
      number_engines,	engine_range,	cruise_speed,	drive_type,	engine_hours,	ignition_system,	noiselevel_db,	enginesound_proofingkits
      FROM engine_general WHERE engine_id IN (${req.query.engine_ids})`
    );
    const [enginePerformanceFields] = await connection.query(
      `SELECT nominal_rating,	engine_performance,	max_poweroutput,	max_power,	max_speed,	supercharged,	valve_train,
      GP_fullloadKW,	GP_fullloadmetric,	GP_propellercurveKW,	GP_propellercurvemetric,	gross_torque,	continuouspower_KWHP,
      Max_Continuousrating,	Engine_speedrange,	engine_efficiency,	powertoweight_ratio,	cylinder_configuration,
      number_cylinders,	cylinders_arrangement,	number_valves,	valve_percylinder,	bore_stroke,	bore,	idle_rpm,
      rated_speed,	rpm_maxpower,	max_torque,	max_torquerpm,	torque_ratedspeed, cylinder_arrangement, torque_ratespeed
      FROM engine_performance WHERE engine_id IN (${req.query.engine_ids})`
    );
    const [engineTransmissionFields] = await connection.query(
      `SELECT transmission_type,	gear_shift,	gear_ratio,	gearshift_type,	flywheel_SAE,	flywheel_housing,	camshaft,
      crankshaft_alloy,	crankcase_design
      FROM engine_transmission WHERE engine_id IN (${req.query.engine_ids})`
    );
    const [engineCoolingFields] = await connection.query(
      `SELECT after_cooled,	cooling_system,	closed_coolingsystem,	open_coolingsystem,	intercooled,	recommended_coolant,
      cooling_type,	heat_exchangermaterial,	heat_dissipationrate,	engine_lubrication,	lubrication_system,
      cooling_fluidtype,	cooling_systempressure,	air_filtertype,	circulation_pumptype,	rawwater_pumptype
      FROM engine_cooling WHERE engine_id IN (${req.query.engine_ids})`
    );
    const [engineElectricalFields] = await connection.query(
      `SELECT alternator,	alternator_output,	battery_type,	battery_voltage,	alternator_outputAMPS,
      starter_MotorVoltage,	ECU_Model,	Battery_ChargingSystem,	integrated_generator,	battery_voltagenumber
      FROM engine_electrical WHERE engine_id IN (${req.query.engine_ids})`
    );
    const [engineSafetyFields] = await connection.query(
      `SELECT engine_monitoringsystem,	overheat_protection,	lowoil_pressurealarm,	emergency_stopsystem
      FROM engine_safety WHERE engine_id IN (${req.query.engine_ids})`
    );
    const [enginePropulsionFields] = await connection.query(
      `SELECT propulsion,	bowthruster,	propulsion_system,	propulsion_systemtype,	propeller_diameter,
      propeller_material,	propeller_pitch,	propeller_type,	propeller_shaftdiameter,	gearbox_type,
      transmission_cooling,	propeller_bladematerial,	propeller_shaftmaterial,	steering_system,	steering_controltype,
      trim_system,	trim_tabmaterial,	trim_tab_type
      FROM engine_propulsion WHERE engine_id IN (${req.query.engine_ids})`
    );
    const [engineMountingFields] = await connection.query(
      `SELECT enginemounting_orientation,	engine_suspension,	engine_mountingtype,	mountingbracket_material,
      alignment_requirements,	engine_block
      FROM engine_mounting WHERE engine_id IN (${req.query.engine_ids})`
    );
    const [engineFuelFields] = await connection.query(
      `SELECT EFI,	fuel_prefilter,	fuel_filter,	fuel_filtertype,	fuel_reserve,	fuel_system,	fuel_tankcapacity,
      fuel_type,	lowest_fuelconsumption,	fuel_consumptionrate,	FC_fullload,	FuelInjection_systemtype,	Fuel_deliverypressure,
      Fuel_tankmaterial,	fuel_linediameter,	FC_3Quarterload,	FC_halfload,	FC_propellercurve,	heat_rejection,
      recommended_fuel
      FROM engine_fuel WHERE engine_id IN (${req.query.engine_ids})`
    );
    const [engineOilFields] = await connection.query(
      `SELECT oil_filter,	oil_filtertype,	centrifugal_oilcleaner,	oil_cooler,	oil_filler,	oil_dipstick,
      recommended_oil,	oil_capacity,	oil_changeinterval,	oil_coolingmethod,	lubrication_oilpressure,	oilfilter_bypassvalve
      FROM engine_oil WHERE engine_id IN (${req.query.engine_ids})`
    );
    const [engineEquipmentFields] = await connection.query(
      `SELECT EMS, engine_controlsystem,	unit_injectors,	turbocharger,	turbo_charging,	starter_motor,	protection_covers,
      crankcase_ventilation,	heat_exchanger,	heat_exchanger_WET,	seawater_pump,	charge_aircooler,	working_principle,
      compression_ratio,	pistonspeed_1500,	pistonspeed_1800,	firing_order,	pistons,	connection_rods,	auxiliarypower_takeoff,
      remote_controlsystems
      FROM engine_equipment WHERE engine_id IN (${req.query.engine_ids})`
    );
    const [engineLocationFields] = await connection.query(
      `SELECT aut_updates,	automatic_updates
      FROM engine_equipment WHERE engine_id IN (${req.query.engine_ids})`
    );
    const [engineDimensionFields] = await connection.query(
      `SELECT displacement,	length,	width,	height,	Engine_length,	engine_weight,	dry_weight,	weight_excloil,
      weight_heatexchanger,	weight_keelcooling
      FROM engine_dimensions WHERE engine_id IN (${req.query.engine_ids})`
    );
    return res.status(200).json({
      ok: true,

      displacement: engineDimensionFields.map((row) => row.displacement),
      length: engineDimensionFields.map((row) => row.length),
      width: engineDimensionFields.map((row) => row.width),
      height: engineDimensionFields.map((row) => row.height),
      Engine_length: engineDimensionFields.map((row) => row.Engine_length),
      engine_weight: engineDimensionFields.map((row) => row.engine_weight),
      dry_weight: engineDimensionFields.map((row) => row.dry_weight),
      weight_keelcooling: engineDimensionFields.map(
        (row) => row.weight_keelcooling
      ),
      weight_excloil: engineDimensionFields.map((row) => row.weight_excloil),
      weight_heatexchanger: engineDimensionFields.map(
        (row) => row.weight_heatexchanger
      ),

      aut_updates: engineLocationFields.map((row) => row.aut_updates),
      automatic_updates: engineLocationFields.map(
        (row) => row.automatic_updates
      ),

      EMS: engineEquipmentFields.map((row) => row.EMS),
      engine_controlsystem: engineEquipmentFields.map(
        (row) => row.engine_controlsystem
      ),
      unit_injectors: engineEquipmentFields.map((row) => row.unit_injectors),
      turbocharger: engineEquipmentFields.map((row) => row.turbocharger),
      turbo_charging: engineEquipmentFields.map((row) => row.turbo_charging),
      starter_motor: engineEquipmentFields.map((row) => row.starter_motor),
      protection_covers: engineEquipmentFields.map(
        (row) => row.protection_covers
      ),
      crankcase_ventilation: engineEquipmentFields.map(
        (row) => row.crankcase_ventilation
      ),
      heat_exchanger: engineEquipmentFields.map((row) => row.heat_exchanger),
      heat_exchanger_WET: engineEquipmentFields.map(
        (row) => row.heat_exchanger_WET
      ),
      seawater_pump: engineEquipmentFields.map((row) => row.seawater_pump),
      charge_aircooler: engineEquipmentFields.map(
        (row) => row.charge_aircooler
      ),
      working_principle: engineEquipmentFields.map(
        (row) => row.working_principle
      ),
      compression_ratio: engineEquipmentFields.map(
        (row) => row.compression_ratio
      ),
      pistonspeed_1500: engineEquipmentFields.map(
        (row) => row.pistonspeed_1500
      ),
      pistonspeed_1800: engineEquipmentFields.map(
        (row) => row.pistonspeed_1800
      ),
      firing_order: engineEquipmentFields.map((row) => row.firing_order),
      pistons: engineEquipmentFields.map((row) => row.pistons),
      connection_rods: engineEquipmentFields.map((row) => row.connection_rods),
      auxiliarypower_takeoff: engineEquipmentFields.map(
        (row) => row.auxiliarypower_takeoff
      ),
      remote_controlsystems: engineEquipmentFields.map(
        (row) => row.remote_controlsystems
      ),

      oil_filter: engineOilFields.map((row) => row.oil_filter),
      oil_filtertype: engineOilFields.map((row) => row.oil_filtertype),
      centrifugal_oilcleaner: engineOilFields.map(
        (row) => row.centrifugal_oilcleaner
      ),
      oil_cooler: engineOilFields.map((row) => row.oil_cooler),
      oil_filler: engineOilFields.map((row) => row.oil_filler),
      oil_dipstick: engineOilFields.map((row) => row.oil_dipstick),
      recommended_oil: engineOilFields.map((row) => row.recommended_oil),
      oil_capacity: engineOilFields.map((row) => row.oil_capacity),
      oil_changeinterval: engineOilFields.map((row) => row.oil_changeinterval),
      oil_coolingmethod: engineOilFields.map((row) => row.oil_coolingmethod),
      lubrication_oilpressure: engineOilFields.map(
        (row) => row.lubrication_oilpressure
      ),
      oilfilter_bypassvalve: engineOilFields.map(
        (row) => row.oilfilter_bypassvalve
      ),

      fuel_prefilter: engineFuelFields.map((row) => row.fuel_prefilter),
      EFI: engineFuelFields.map((row) => row.EFI),
      fuel_filter: engineFuelFields.map((row) => row.fuel_filter),
      fuel_filtertype: engineFuelFields.map((row) => row.fuel_filtertype),
      fuel_reserve: engineFuelFields.map((row) => row.fuel_reserve),
      fuel_system: engineFuelFields.map((row) => row.fuel_system),
      fuel_tankcapacity: engineFuelFields.map((row) => row.fuel_tankcapacity),
      fuel_type: engineFuelFields.map((row) => row.fuel_type),
      lowest_fuelconsumption: engineFuelFields.map(
        (row) => row.lowest_fuelconsumption
      ),
      fuel_consumptionrate: engineFuelFields.map(
        (row) => row.fuel_consumptionrate
      ),
      FC_fullload: engineFuelFields.map((row) => row.FC_fullload),
      FuelInjection_systemtype: engineFuelFields.map(
        (row) => row.FuelInjection_systemtype
      ),
      Fuel_deliverypressure: engineFuelFields.map(
        (row) => row.Fuel_deliverypressure
      ),
      Fuel_tankmaterial: engineFuelFields.map((row) => row.Fuel_tankmaterial),
      fuel_linediameter: engineFuelFields.map((row) => row.fuel_linediameter),
      FC_3Quarterload: engineFuelFields.map((row) => row.FC_3Quarterload),
      FC_halfload: engineFuelFields.map((row) => row.FC_halfload),
      FC_propellercurve: engineFuelFields.map((row) => row.FC_propellercurve),
      heat_rejection: engineFuelFields.map((row) => row.heat_rejection),
      recommended_fuel: engineFuelFields.map((row) => row.recommended_fuel),

      enginemounting_orientation: engineMountingFields.map(
        (row) => row.enginemounting_orientation
      ),
      engine_suspension: engineMountingFields.map(
        (row) => row.engine_suspension
      ),
      engine_mountingtype: engineMountingFields.map(
        (row) => row.engine_mountingtype
      ),
      mountingbracket_material: engineMountingFields.map(
        (row) => row.mountingbracket_material
      ),
      alignment_requirements: engineMountingFields.map(
        (row) => row.alignment_requirements
      ),
      engine_block: engineMountingFields.map((row) => row.engine_block),

      engine_monitoringsystem: engineSafetyFields.map(
        (row) => row.engine_monitoringsystem
      ),
      overheat_protection: engineSafetyFields.map(
        (row) => row.overheat_protection
      ),
      lowoil_pressurealarm: engineSafetyFields.map(
        (row) => row.lowoil_pressurealarm
      ),
      emergency_stopsystem: engineSafetyFields.map(
        (row) => row.emergency_stopsystem
      ),

      propulsion: enginePropulsionFields.map((row) => row.propulsion),
      propeller_bladematerial: enginePropulsionFields.map(
        (row) => row.propeller_bladematerial
      ),
      propeller_shaftmaterial: enginePropulsionFields.map(
        (row) => row.propeller_shaftmaterial
      ),
      steering_system: enginePropulsionFields.map((row) => row.steering_system),
      steering_controltype: enginePropulsionFields.map(
        (row) => row.steering_controltype
      ),
      trim_system: enginePropulsionFields.map((row) => row.trim_system),
      trim_tabmaterial: enginePropulsionFields.map(
        (row) => row.trim_tabmaterial
      ),
      trim_tab_type: enginePropulsionFields.map((row) => row.trim_tab_type),
      bowthruster: enginePropulsionFields.map((row) => row.bowthruster),
      propulsion_system: enginePropulsionFields.map(
        (row) => row.propulsion_system
      ),
      propulsion_systemtype: enginePropulsionFields.map(
        (row) => row.propulsion_systemtype
      ),
      propeller_diameter: enginePropulsionFields.map(
        (row) => row.propeller_diameter
      ),
      propeller_material: enginePropulsionFields.map(
        (row) => row.propeller_material
      ),
      propeller_pitch: enginePropulsionFields.map((row) => row.propeller_pitch),
      propeller_type: enginePropulsionFields.map((row) => row.propeller_type),
      propeller_shaftdiameter: enginePropulsionFields.map(
        (row) => row.propeller_shaftdiameter
      ),
      gearbox_type: enginePropulsionFields.map((row) => row.gearbox_type),
      transmission_cooling: enginePropulsionFields.map(
        (row) => row.transmission_cooling
      ),

      transmission_type: engineTransmissionFields.map(
        (row) => row.transmission_type
      ),
      gear_shift: engineTransmissionFields.map((row) => row.gear_shift),
      gear_ratio: engineTransmissionFields.map((row) => row.gear_ratio),
      gearshift_type: engineTransmissionFields.map((row) => row.gearshift_type),
      flywheel_SAE: engineTransmissionFields.map((row) => row.flywheel_SAE),
      flywheel_housing: engineTransmissionFields.map(
        (row) => row.flywheel_housing
      ),
      camshaft: engineTransmissionFields.map((row) => row.camshaft),
      crankshaft_alloy: engineTransmissionFields.map(
        (row) => row.crankshaft_alloy
      ),
      crankcase_design: engineTransmissionFields.map(
        (row) => row.crankcase_design
      ),

      after_cooled: engineCoolingFields.map((row) => row.after_cooled),
      cooling_system: engineCoolingFields.map((row) => row.cooling_system),
      closed_coolingsystem: engineCoolingFields.map(
        (row) => row.closed_coolingsystem
      ),
      open_coolingsystem: engineCoolingFields.map(
        (row) => row.open_coolingsystem
      ),
      intercooled: engineCoolingFields.map((row) => row.intercooled),
      recommended_coolant: engineCoolingFields.map(
        (row) => row.recommended_coolant
      ),
      cooling_type: engineCoolingFields.map((row) => row.cooling_type),
      heat_exchangermaterial: engineCoolingFields.map(
        (row) => row.heat_exchangermaterial
      ),
      heat_dissipationrate: engineCoolingFields.map(
        (row) => row.heat_dissipationrate
      ),
      engine_lubrication: engineCoolingFields.map(
        (row) => row.engine_lubrication
      ),
      lubrication_system: engineCoolingFields.map(
        (row) => row.lubrication_system
      ),
      cooling_fluidtype: engineCoolingFields.map(
        (row) => row.cooling_fluidtype
      ),
      cooling_systempressure: engineCoolingFields.map(
        (row) => row.cooling_systempressure
      ),
      air_filtertype: engineCoolingFields.map((row) => row.air_filtertype),
      circulation_pumptype: engineCoolingFields.map(
        (row) => row.circulation_pumptype
      ),
      rawwater_pumptype: engineCoolingFields.map(
        (row) => row.rawwater_pumptype
      ),

      alternator: engineElectricalFields.map((row) => row.alternator),
      alternator_output: engineElectricalFields.map(
        (row) => row.alternator_output
      ),
      battery_type: engineElectricalFields.map((row) => row.battery_type),
      battery_voltage: engineElectricalFields.map((row) => row.battery_voltage),
      alternator_outputAMPS: engineElectricalFields.map(
        (row) => row.alternator_outputAMPS
      ),
      starter_MotorVoltage: engineElectricalFields.map(
        (row) => row.starter_MotorVoltage
      ),
      ECU_Model: engineElectricalFields.map((row) => row.ECU_Model),
      Battery_ChargingSystem: engineElectricalFields.map(
        (row) => row.Battery_ChargingSystem
      ),
      integrated_generator: engineElectricalFields.map(
        (row) => row.integrated_generator
      ),
      battery_voltagenumber: engineElectricalFields.map(
        (row) => row.battery_voltagenumber
      ),

      condition: engineGeneralFields.map((row) => row.condition_1),
      usedCondition: engineGeneralFields.map((row) => row.used_condition),
      seller: engineGeneralFields.map((row) => row.seller),
      offeredBy: engineGeneralFields.map((row) => row.offered_by),
      engineCertification: engineGeneralFields.map(
        (row) => row.engine_certification
      ),
      engineClassifiable: engineGeneralFields.map(
        (row) => row.engine_classifiable
      ),
      engineSerial: engineGeneralFields.map((row) => row.engine_serial),
      ceCategory: engineGeneralFields.map((row) => row.ce_category),
      numberDrive: engineGeneralFields.map((row) => row.number_drives),
      numberEngine: engineGeneralFields.map((row) => row.number_engines),
      engineRange: engineGeneralFields.map((row) => row.engine_range),
      cruiseSpeed: engineGeneralFields.map((row) => row.cruise_speed),
      driveType: engineGeneralFields.map((row) => row.drive_type),
      engineHours: engineGeneralFields.map((row) => row.engine_hours),
      ignitionSystem: engineGeneralFields.map((row) => row.ignition_system),
      noiseLevel: engineGeneralFields.map((row) => row.noiselevel_db),
      engineSoundProofingKit: engineGeneralFields.map(
        (row) => row.enginesound_proofingkits
      ),

      nomialRating: enginePerformanceFields.map((row) => row.nominal_rating),
      enginePerformance: enginePerformanceFields.map(
        (row) => row.engine_performance
      ),
      maxPowerOutput: enginePerformanceFields.map((row) => row.max_poweroutput),
      maxPower: enginePerformanceFields.map((row) => row.max_power),
      maxSpeed: enginePerformanceFields.map((row) => row.max_speed),
      superCharged: enginePerformanceFields.map((row) => row.supercharged),
      valveTrain: enginePerformanceFields.map((row) => row.valve_train),
      grossTorque: enginePerformanceFields.map((row) => row.gross_torque),
      GP_fullLoadKW: enginePerformanceFields.map((row) => row.GP_fullloadKW),
      GP_fullLoadMetric: enginePerformanceFields.map(
        (row) => row.GP_fullloadmetric
      ),
      GP_PropellerCurveKW: enginePerformanceFields.map(
        (row) => row.GP_propellercurveKW
      ),
      maxContinousRating: enginePerformanceFields.map(
        (row) => row.Max_Continuousrating
      ),
      engineSpeedRange: enginePerformanceFields.map(
        (row) => row.Engine_speedrange
      ),
      GP_PropellerCurveMetric: enginePerformanceFields.map(
        (row) => row.GP_propellercurvemetric
      ),
      continousPowerKWHP: enginePerformanceFields.map(
        (row) => row.continouspower_KWHP
      ),
      engineEfficiency: enginePerformanceFields.map(
        (row) => row.engine_efficiency
      ),
      powerToWeightRatio: enginePerformanceFields.map(
        (row) => row.powertoweight_ratio
      ),
      cylinderConfiguration: enginePerformanceFields.map(
        (row) => row.cylinder_configuration
      ),
      numberCylinders: enginePerformanceFields.map(
        (row) => row.number_cylinders
      ),
      cylindersArrangement: enginePerformanceFields.map(
        (row) => row.cylinder_arrangement
      ),
      numberValves: enginePerformanceFields.map((row) => row.number_valves),
      boreStroke: enginePerformanceFields.map((row) => row.bore_stroke),
      bore: enginePerformanceFields.map((row) => row.bore),
      idleRPM: enginePerformanceFields.map((row) => row.idle_rpm),
      rpmMaxPower: enginePerformanceFields.map((row) => row.rpm_maxpower),
      ratedSpeed: enginePerformanceFields.map((row) => row.rated_speed),
      maxTorque: enginePerformanceFields.map((row) => row.max_torque),
      maxTorqueRPM: enginePerformanceFields.map((row) => row.max_torquerpm),
      torqueRatedSpeed: enginePerformanceFields.map(
        (row) => row.torque_ratespeed
      ),
      valvePerCylinder: enginePerformanceFields.map(
        (row) => row.valve_percylinder
      ),
    });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

export default advertEngineRouter;
