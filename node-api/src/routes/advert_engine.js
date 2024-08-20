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
        driveType: driveType.map((row) => row.drive_type)
        
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
