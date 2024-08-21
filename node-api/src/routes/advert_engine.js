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
    if (req.query.engine_make && req.query.engine_model && req.query.engine_modelyear && req.query.type_designation) {
      filterOptions = ` WHERE engine_make = '${req.query.engine_make}' AND engine_model = '${req.query.engine_model}' AND engine_modelyear = '${req.query.engine_modelyear}' AND type_designation = '${req.query.type_designation}'`;
    } else if (req.query.engine_make && !req.query.engine_model && !req.query.engine_modelyear) {
      filterOptions = ` WHERE engine_make = '${req.query.engine_make}'`;
    }else if (!req.query.engine_make && req.query.engine_model && !req.query.engine_modelyear) {
      filterOptions = ` WHERE engine_model = '${req.query.engine_model}'`;
    }else if (!req.query.engine_make && !req.query.engine_model && req.query.engine_modelyear) {
      filterOptions = ` WHERE engine_modelyear = '${req.query.engine_modelyear}'`;
    }else if (!req.query.engine_make && !req.query.engine_model && !req.query.engine_modelyear && req.query.type_designation) {
      filterOptions = ` WHERE type_designation = '${req.query.type_designation}'`;
    }else{
      filterOptions = ``;
    }
    const [rows] = await connection.query(
      `SELECT DISTINCT type_designation FROM engine_general ${filterOptions} ORDER BY type_designation`
    );
    return res
      .status(200)
      .json({ ok: true, result: rows.map((row) => row.type_designation) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

advertEngineRouter.get("/conditions/", async (req, res) => {
  let connection;
  let filterOptions = "";
  try {
    connection = await dbConnection.getConnection();
    if (req.query.engine_make && req.query.engine_model && req.query.engine_modelyear && req.query.type_designation) {
      filterOptions = ` WHERE engine_make = '${req.query.engine_make}' AND engine_model = '${req.query.engine_model}' AND engine_modelyear = '${req.query.engine_modelyear}' AND type_designation = '${req.query.type_designation}'`;
    } else if (req.query.engine_make && !req.query.engine_model && !req.query.engine_modelyear) {
      filterOptions = ` WHERE engine_make = '${req.query.engine_make}'`;
    }else if (!req.query.engine_make && req.query.engine_model && !req.query.engine_modelyear) {
      filterOptions = ` WHERE engine_model = '${req.query.engine_model}'`;
    }else if (!req.query.engine_make && !req.query.engine_model && req.query.engine_modelyear) {
      filterOptions = ` WHERE engine_modelyear = '${req.query.engine_modelyear}'`;
    }else if (!req.query.engine_make && !req.query.engine_model && !req.query.engine_modelyear && req.query.type_designation) {
      filterOptions = ` WHERE type_designation = '${req.query.type_designation}'`;
    }else{
      filterOptions = ``;
    }
    const [conditions] = await connection.query(
      `SELECT DISTINCT condition_1 FROM engine_general ${filterOptions} ORDER BY condition_1`
    );
    const [usedConditions] = await connection.query(
      `SELECT DISTINCT used_condition FROM engine_general ${filterOptions} ORDER BY used_condition`
    );
    const [sellers] = await connection.query(
      `SELECT DISTINCT seller FROM engine_general ${filterOptions} ORDER BY seller`
    );
    const [offeredBy] = await connection.query(
      `SELECT DISTINCT offered_by FROM engine_general ${filterOptions} ORDER BY offered_by`
    );
    const [engineCertifications] = await connection.query(
      `SELECT DISTINCT engine_certification FROM engine_general ${filterOptions} ORDER BY engine_certification`
    );
    const [engineSerial] = await connection.query(
      `SELECT DISTINCT engine_serial FROM engine_general ${filterOptions} ORDER BY engine_serial`
    );
    const [ceCategory] = await connection.query(
      `SELECT DISTINCT ce_category FROM engine_general ${filterOptions} ORDER BY ce_category`
    );
    const [numberDrives] = await connection.query(
      `SELECT DISTINCT number_drives FROM engine_general ${filterOptions} ORDER BY number_drives`
    );
    const [numberEngines] = await connection.query(
      `SELECT DISTINCT number_engines FROM engine_general ${filterOptions} ORDER BY number_engines`
    );
    const [engineRange] = await connection.query(
      `SELECT DISTINCT engine_range FROM engine_general ${filterOptions} ORDER BY engine_range`
    );
    const [cruiseSpeed] = await connection.query(
      `SELECT DISTINCT cruise_speed FROM engine_general ${filterOptions} ORDER BY cruise_speed`
    );
    const [driveType] = await connection.query(
      `SELECT DISTINCT drive_type FROM engine_general ${filterOptions} ORDER BY drive_type`
    );
    const [engineHours] = await connection.query(
      `SELECT DISTINCT engine_hours FROM engine_general ${filterOptions} ORDER BY engine_hours`
    );
    const [ignitionSystems] = await connection.query(
      `SELECT DISTINCT ignition_system FROM engine_general ${filterOptions} ORDER BY ignition_system`
    );
    const [noiseLevel] = await connection.query(
      `SELECT DISTINCT noiselevel_db FROM engine_general ${filterOptions} ORDER BY noiselevel_db`
    );
    const [engineSoundProofingKits] = await connection.query(
      `SELECT DISTINCT enginesound_proofingkits FROM engine_general ${filterOptions} ORDER BY enginesound_proofingkits`
    );
    const [nomialRating] = await connection.query(
      `SELECT DISTINCT nominal_rating FROM engine_performance ${filterOptions} ORDER BY nominal_rating`
    );
    const [enginePerformance] = await connection.query(
      `SELECT DISTINCT engine_performance FROM engine_performance ${filterOptions} ORDER BY engine_performance`
    );
    const [maxPowerOutput] = await connection.query(
      `SELECT DISTINCT max_poweroutput FROM engine_performance ${filterOptions} ORDER BY max_poweroutput`
    );
    const [maxPower] = await connection.query(
      `SELECT DISTINCT max_power FROM engine_performance ${filterOptions} ORDER BY max_power`
    );
    const [maxSpeed] = await connection.query(
      `SELECT DISTINCT max_speed FROM engine_performance ${filterOptions} ORDER BY max_speed`
    );
    const [superCharged] = await connection.query(
      `SELECT DISTINCT supercharged FROM engine_performance ${filterOptions} ORDER BY supercharged`
    );
    const [valveTrain] = await connection.query(
      `SELECT DISTINCT valve_train FROM engine_performance ${filterOptions} ORDER BY valve_train`
    );
    const [grossTorque] = await connection.query(
      `SELECT DISTINCT gross_torque FROM engine_performance ${filterOptions} ORDER BY gross_torque`
    );
    const [GP_fullLoadKW] = await connection.query(
      `SELECT DISTINCT GP_fullloadKW FROM engine_performance ${filterOptions} ORDER BY GP_fullloadKW`
    );
    const [GP_fullLoadMetric] = await connection.query(
      `SELECT DISTINCT GP_fullloadmetric FROM engine_performance ${filterOptions} ORDER BY GP_fullloadmetric`
    );
    const [GP_PropellerCurveKW] = await connection.query(
      `SELECT DISTINCT GP_propellercurveKW FROM engine_performance ${filterOptions} ORDER BY GP_propellercurveKW`
    );
    const [GP_PropellerCurveMetric] = await connection.query(
      `SELECT DISTINCT GP_propellercurvemetric FROM engine_performance ${filterOptions} ORDER BY GP_propellercurvemetric`
    );
    const [continousPowerKWHP] = await connection.query(
      `SELECT DISTINCT continouspower_KWHP FROM engine_performance ${filterOptions} ORDER BY continouspower_KWHP`
    );
    const [maxContinousRating] = await connection.query(
      `SELECT DISTINCT Max_Continuousrating FROM engine_performance ${filterOptions} ORDER BY Max_Continuousrating`
    );
    const [engineSpeedRange] = await connection.query(
      `SELECT DISTINCT Engine_speedrange FROM engine_performance ${filterOptions} ORDER BY Engine_speedrange`
    );
    const [engineEfficiency] = await connection.query(
      `SELECT DISTINCT engine_efficiency FROM engine_performance ${filterOptions} ORDER BY engine_efficiency`
    );
    const [powerToWeightRatio] = await connection.query(
      `SELECT DISTINCT powertoweight_ratio FROM engine_performance ${filterOptions} ORDER BY powertoweight_ratio`
    );
    const [cylinderConfiguration] = await connection.query(
      `SELECT DISTINCT cylinder_configuration FROM engine_performance ${filterOptions} ORDER BY cylinder_configuration`
    );
    const [numberCylinders] = await connection.query(
      `SELECT DISTINCT number_cylinders FROM engine_performance ${filterOptions} ORDER BY number_cylinders`
    );
    const [cylindersArrangement] = await connection.query(
      `SELECT DISTINCT cylinder_arrangement FROM engine_performance ${filterOptions} ORDER BY cylinder_arrangement`
    );
    const [numberValves] = await connection.query(
      `SELECT DISTINCT number_valves FROM engine_performance ${filterOptions} ORDER BY number_valves`
    );
    const [boreStroke] = await connection.query(
      `SELECT DISTINCT bore_stroke FROM engine_performance ${filterOptions} ORDER BY bore_stroke`
    );
    const [bore] = await connection.query(
      `SELECT DISTINCT bore FROM engine_performance ${filterOptions} ORDER BY bore`
    );
    const [idleRPM] = await connection.query(
      `SELECT DISTINCT idle_rpm FROM engine_performance ${filterOptions} ORDER BY idle_rpm`
    );
    const [rpmMaxPower] = await connection.query(
      `SELECT DISTINCT rpm_maxpower FROM engine_performance ${filterOptions} ORDER BY rpm_maxpower`
    );
    const [ratedSpeed] = await connection.query(
      `SELECT DISTINCT rated_speed FROM engine_performance ${filterOptions} ORDER BY rated_speed`
    );
    const [maxTorque] = await connection.query(
      `SELECT DISTINCT max_torque FROM engine_performance ${filterOptions} ORDER BY max_torque`
    );
    const [maxTorqueRPM] = await connection.query(
      `SELECT DISTINCT max_torquerpm FROM engine_performance ${filterOptions} ORDER BY max_torquerpm`
    );
    const [torqueRatedSpeed] = await connection.query(
      `SELECT DISTINCT torque_ratespeed FROM engine_performance ${filterOptions} ORDER BY torque_ratespeed`
    );
    const [valvePerCylinder] = await connection.query(
      `SELECT DISTINCT valve_percylinder FROM engine_performance ${filterOptions} ORDER BY valve_percylinder`
    );
    return res
      .status(200)
      .json({ ok: true,
        condition: conditions.map((row) => row.condition_1),
        usedCondition: usedConditions.map((row) => row.used_condition),
        seller: sellers.map((row) => row.seller),
        offeredBy: offeredBy.map((row) => row.offered_by),
        engineCertification: engineCertifications.map((row) => row.engine_certification),
        engineSerial: engineSerial.map((row) => row.engine_serial),
        ceCategory: ceCategory.map((row) => row.ce_category),
        numberDrive: numberDrives.map((row) => row.number_drives),
        numberEngine: numberEngines.map((row) => row.number_engines),
        engineRange: engineRange.map((row) => row.engine_range),
        cruiseSpeed: cruiseSpeed.map((row) => row.cruise_speed),
        driveType: driveType.map((row) => row.drive_type),
        engineHours: engineHours.map((row) => row.engine_hours),
        ignitionSystem: ignitionSystems.map((row) => row.ignition_system),
        noiseLevel: noiseLevel.map((row) => row.noiselevel_db),
        engineSoundProofingKit: engineSoundProofingKits.map((row) => row.enginesound_proofingkits),
        nomialRating: nomialRating.map((row) => row.nominal_rating),
        enginePerformance: enginePerformance.map((row) => row.engine_performance),
        maxPowerOutput: maxPowerOutput.map((row) => row.max_poweroutput),
        maxPower: maxPower.map((row) => row.max_power),
        maxSpeed: maxSpeed.map((row) => row.max_speed),
        superCharged: superCharged.map((row) => row.supercharged),
        valveTrain: valveTrain.map((row) => row.valve_train),
        grossTorque: grossTorque.map((row) => row.gross_torque),
        GP_fullLoadKW: GP_fullLoadKW.map((row) => row.GP_fullloadKW),
        GP_fullLoadMetric: GP_fullLoadMetric.map((row) => row.GP_fullloadmetric),
        GP_PropellerCurveKW: GP_PropellerCurveKW.map((row) => row.GP_propellercurveKW),
        maxContinousRating: maxContinousRating.map((row) => row.Max_Continuousrating),
        engineSpeedRange: engineSpeedRange.map((row) => row.Engine_speedrange),
        GP_PropellerCurveMetric: GP_PropellerCurveMetric.map((row) => row.GP_propellercurvemetric),
        continousPowerKWHP: continousPowerKWHP.map((row) => row.continouspower_KWHP),
        engineEfficiency: engineEfficiency.map((row) => row.engine_efficiency),
        powerToWeightRatio: powerToWeightRatio.map((row) => row.powertoweight_ratio),
        cylinderConfiguration: cylinderConfiguration.map((row) => row.cylinder_configuration),
        numberCylinders: numberCylinders.map((row) => row.number_cylinders),
        cylindersArrangement: cylindersArrangement.map((row) => row.cylinder_arrangement),
        numberValves: numberValves.map((row) => row.number_valves),
        boreStroke: boreStroke.map((row) => row.bore_stroke),
        bore: bore.map((row) => row.bore),
        idleRPM: idleRPM.map((row) => row.idle_rpm),
        rpmMaxPower: rpmMaxPower.map((row) => row.rpm_maxpower),
        ratedSpeed: ratedSpeed.map((row) => row.rated_speed),
        maxTorque: maxTorque.map((row) => row.max_torque),
        maxTorqueRPM: maxTorqueRPM.map((row) => row.max_torquerpm),
        torqueRatedSpeed: torqueRatedSpeed.map((row) => row.torque_ratespeed),
        valvePerCylinder: valvePerCylinder.map((row) => row.valve_percylinder),
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
