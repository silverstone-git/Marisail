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
    }else if (!req.query.engine_make && req.query.engine_model) {
      filterEngineMakeAndModel = ` WHERE engine_model = '${req.query.engine_model}'`;
    }else{
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
    if (req.query.engine_make && req.query.engine_model && req.query.engine_modelyear) {
      filterOptions = ` WHERE engine_make = '${req.query.engine_make}' AND engine_model = '${req.query.engine_model}' AND engine_modelyear = '${req.query.engine_modelyear}'`;
    } else if (req.query.engine_make && !req.query.engine_model && !req.query.engine_modelyear) {
      filterOptions = ` WHERE engine_make = '${req.query.engine_make}'`;
    }else if (!req.query.engine_make && req.query.engine_model && !req.query.engine_modelyear) {
      filterOptions = ` WHERE engine_model = '${req.query.engine_model}'`;
    }else if (!req.query.engine_make && !req.query.engine_model && req.query.engine_modelyear) {
      filterOptions = ` WHERE engine_modelyear = '${req.query.engine_modelyear}'`;
    }else{
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
    if (req.query.engine_make && req.query.engine_model && req.query.engine_modelyear && req.query.engine_type) {
      filterOptions = ` WHERE engine_make = '${req.query.engine_make}' AND engine_model = '${req.query.engine_model}' AND engine_modelyear = '${req.query.engine_modelyear}' AND engine_type = '${req.query.engine_type}'`;
    } else if (req.query.engine_make && !req.query.engine_model && !req.query.engine_modelyear) {
      filterOptions = ` WHERE engine_make = '${req.query.engine_make}'`;
    }else if (!req.query.engine_make && req.query.engine_model && !req.query.engine_modelyear) {
      filterOptions = ` WHERE engine_model = '${req.query.engine_model}'`;
    }else if (!req.query.engine_make && !req.query.engine_model && req.query.engine_modelyear) {
      filterOptions = ` WHERE engine_modelyear = '${req.query.engine_modelyear}'`;
    }else if (!req.query.engine_make && !req.query.engine_model && !req.query.engine_modelyear && req.query.engine_type) {
      filterOptions = ` WHERE engine_type = '${req.query.type_designation}'`;
    }else{
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
      .json({ ok: true, type_designation: rows.map((row) => row.type_designation), engineId: engineId.map((row) => row.engine_id) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

advertEngineRouter.get("/conditions/", async (req, res) => {
  let connection;
  try {
    console.log("001 Engine Ids--",req.query.engine_ids);
    
    connection = await dbConnection.getConnection();
    console.log("Engine general query--", `SELECT marisail_vesselid,	engine_make,	engine_classifiable,	engine_certification,	engine_model,	manufacture_warranty,
      engine_modelyear,	engine_serial,	engine_type,	type_designation,	engine_year,	ce_category,	number_drives,
      number_engines,	engine_range,	cruise_speed,	drive_type,	engine_hours,	ignition_system,	noiselevel_db,	enginesound_proofingkits
      FROM engine_general WHERE engine_id IN (${req.query.engine_ids})`);
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
    console.log("001 Engine General----",engineGeneralFields);
    console.log("001 Engine Performance----",enginePerformanceFields);

    return res
      .status(200)
      .json({ ok: true,
        condition: engineGeneralFields.map((row) => row.condition_1),
        usedCondition: engineGeneralFields.map((row) => row.used_condition),
        seller: engineGeneralFields.map((row) => row.seller),
        offeredBy: engineGeneralFields.map((row) => row.offered_by),
        engineCertification: engineGeneralFields.map((row) => row.engine_certification),
        engineClassifiable: engineGeneralFields.map((row) => row.engine_classifiable),
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
        engineSoundProofingKit: engineGeneralFields.map((row) => row.enginesound_proofingkits),
        nomialRating: enginePerformanceFields.map((row) => row.nominal_rating),
        enginePerformance: enginePerformanceFields.map((row) => row.engine_performance),
        maxPowerOutput: enginePerformanceFields.map((row) => row.max_poweroutput),
        maxPower: enginePerformanceFields.map((row) => row.max_power),
        maxSpeed: enginePerformanceFields.map((row) => row.max_speed),
        superCharged: enginePerformanceFields.map((row) => row.supercharged),
        valveTrain: enginePerformanceFields.map((row) => row.valve_train),
        grossTorque: enginePerformanceFields.map((row) => row.gross_torque),
        GP_fullLoadKW: enginePerformanceFields.map((row) => row.GP_fullloadKW),
        GP_fullLoadMetric: enginePerformanceFields.map((row) => row.GP_fullloadmetric),
        GP_PropellerCurveKW: enginePerformanceFields.map((row) => row.GP_propellercurveKW),
        maxContinousRating: enginePerformanceFields.map((row) => row.Max_Continuousrating),
        engineSpeedRange: enginePerformanceFields.map((row) => row.Engine_speedrange),
        GP_PropellerCurveMetric: enginePerformanceFields.map((row) => row.GP_propellercurvemetric),
        continousPowerKWHP: enginePerformanceFields.map((row) => row.continouspower_KWHP),
        engineEfficiency: enginePerformanceFields.map((row) => row.engine_efficiency),
        powerToWeightRatio: enginePerformanceFields.map((row) => row.powertoweight_ratio),
        cylinderConfiguration: enginePerformanceFields.map((row) => row.cylinder_configuration),
        numberCylinders: enginePerformanceFields.map((row) => row.number_cylinders),
        cylindersArrangement: enginePerformanceFields.map((row) => row.cylinder_arrangement),
        numberValves: enginePerformanceFields.map((row) => row.number_valves),
        boreStroke: enginePerformanceFields.map((row) => row.bore_stroke),
        bore: enginePerformanceFields.map((row) => row.bore),
        idleRPM: enginePerformanceFields.map((row) => row.idle_rpm),
        rpmMaxPower: enginePerformanceFields.map((row) => row.rpm_maxpower),
        ratedSpeed: enginePerformanceFields.map((row) => row.rated_speed),
        maxTorque: enginePerformanceFields.map((row) => row.max_torque),
        maxTorqueRPM: enginePerformanceFields.map((row) => row.max_torquerpm),
        torqueRatedSpeed: enginePerformanceFields.map((row) => row.torque_ratespeed),
        valvePerCylinder: enginePerformanceFields.map((row) => row.valve_percylinder),
      });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

advertEngineRouter.get("/unit_injectors/", async (req, res) => {
  let connection;
  try {
    connection = await dbConnection.getConnection();
    const [rows] = await connection.query(
      "SELECT DISTINCT unit_injectors FROM engine_equipment ORDER BY unit_injectors ASC LIMIT 10"
    );
    return res
      .status(200)
      .json({ ok: true, result: rows.map((row) => row.unit_injectors) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

export default advertEngineRouter;
