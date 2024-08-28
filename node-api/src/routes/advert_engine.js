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

function isValidString(str) {
  if (str !== undefined && str.trim() !== "") {
    return true;
  } else {
    return false;
  }
}

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
    return res
      .status(200)
      .json({ ok: true, result: rows.map((row) => row.engine_model) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

advertEngineRouter.get("/columnsList/:tableName", async (req, res) => {
  let valid_tables = [];
  valid_tables.push(req.params.tableName);
  let connection;
  let filterOptions = "";
  try {
    connection = await dbConnection.getConnection();
    if (
      isValidString(req.query.engine_make) &&
      isValidString(req.query.engine_model)
    ) {
      filterOptions = ` WHERE engine_make = '${req.query.engine_make}' AND engine_model = '${req.query.engine_model}'`;
    } else {
      filterOptions = ``;
    }
    const [engineId] = await connection.query(
      `SELECT DISTINCT engine_id FROM engine_general ${filterOptions} ORDER BY engine_id`
    );
    console.log("Final Rows Filter Options------------------->", filterOptions);
    // console.log("Final Rows Engine Id------------------->",engineId);
    if (filterOptions == "") {
      console.log("------on page reload / display default options----");
      let results = {};

      for (let tableName of valid_tables) {
        // Step1: Show column names of the valid_tables table
        const [columns] = await connection.query("SHOW COLUMNS FROM ??", [
          tableName,
        ]);

        results[tableName] = {};
        // Step2: Loop all the column names for each valid_tables
        for (let column of columns) {
          const columnName = column.Field;
          const [rows] = await connection.query(
            `SELECT DISTINCT ?? FROM ??  ORDER BY ??`,
            [columnName, tableName, columnName]
          );
          results[tableName][columnName] = rows.map((row) => row[columnName]);
        }
      }
      return res.status(200).json({ ok: true, result: results });
    } else {
      console.log("------engine make and model selected----");
      let results = {};

      for (let tableName of valid_tables) {
        // Step1: Show column names of the valid_tables table
        const [columns] = await connection.query("SHOW COLUMNS FROM ??", [
          tableName,
        ]);

        results[tableName] = {};
        // Step2: Loop all the column names for each valid_tables
        for (let column of columns) {
          const columnName = column.Field;

          const [rows] = await connection.query(
            `SELECT DISTINCT ?? FROM ?? WHERE engine_id IN (?) GROUP BY ?? ORDER BY count(*) DESC LIMIT 0,1`,
            [
              columnName,
              tableName,
              engineId.map((row) => row.engine_id),
              columnName,
            ]
          );

          results[tableName][columnName] = rows.map((row) => row[columnName]);
        }
      }

      return res.status(200).json({ ok: true, result: results });
    }
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    if (connection) connection.release();
  }
});

export default advertEngineRouter;
