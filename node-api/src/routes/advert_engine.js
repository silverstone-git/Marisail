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

advertEngineRouter.get("/:table/:column/distinct/", async (req, res) => {
  let connection;
  try {
    connection = await dbConnection.getConnection();
    const { table, column } = req.params;
    const orderBy = column;
    const filters = [];
    let queryParams;
    if (req.query?.engine_make) {
      queryParams = {
        engine_make: req.query.engine_make
      };
    } else if (req.query?.engine_model) {
      queryParams = {
        engine_model: req.query.engine_model
      };      
    } else if (req.query?.engine_modelyear) {
      queryParams = {
        engine_modelyear: req.query.engine_modelyear
      };
    } else if (req.query?.type_designation) {
      queryParams = {
        type_designation: req.query.type_designation,
      };
    }

    // Dynamically construct filter options
    for (const [key, value] of Object.entries(queryParams)) {
      if (value) {
        filters.push(`${key} = '${value}'`);
      }
    }
    let query;
    if(column == 'engine_make'){
      query = `SELECT DISTINCT ${column} FROM ${table} ORDER BY ${orderBy}`;
    } else {
      const filterOptions = filters.length > 0 ? `WHERE ${filters.join(" AND ")}` : "";
      query = `SELECT DISTINCT ${column} FROM ${table} ${filterOptions} ORDER BY ${orderBy}`;
    }
    console.log("QUERY--",query);
    const [results] = await connection.query(query);
    // results[table] = results.map((row) => row[column]);
    return res.status(200).json({ ok: true, result: results.map((row) => row[column]) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    if (connection) connection.release();
  }
});


advertEngineRouter.get("/relevant_data/", async (req, res) => {
  let connection;
  let valid_tables = ["engine_general"];
  // ,"engine_dimensions","engine_cooling","engine_electrical","engine_emissions","engine_fuel","engine_propulsion","engine_transmission","engine_oil", "engine_safety","engine_equipment","engine_performance","engine_maintenance","engine_mounting"];
  try {
    let filterOptions = "";
    connection = await dbConnection.getConnection();
    const filters = [];
    const queryParams = {
      engine_make: req.query.engine_make,
      engine_model: req.query.engine_model,
      engine_modelyear: req.query.engine_modelyear,
      engine_type: req.query.engine_type,
      type_designation: req.query.type_designation,
    };

    // Dynamically construct filter options
    for (const [key, value] of Object.entries(queryParams)) {
      if (value) {
        filters.push(`${key} = '${value}'`);
      }
    }

    filterOptions = filters.length > 0 ? `WHERE ${filters.join(" AND ")}` : "";

    let results = {};
    const [engineId] = await connection.query(
      `SELECT DISTINCT engine_id FROM engine_general ${filterOptions} ORDER BY engine_id`
    );
    if (engineId.length === 0) {
      return res.status(404).json({ ok: false, message: "No data found" });
    }
    for (let tableName of valid_tables) {
      const [columns] = await connection.query("SHOW COLUMNS FROM ??", [
        tableName,
      ]);
      results[tableName] = {};
      for (let column of columns) {
        const columnName = column.Field;
        if (columnName != "engine_id") {
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
    }
    return res.status(200).json({ ok: true, result: results });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

advertEngineRouter.get("/columns/:tableName", async (req, res) => {
  let connection;
  let tableName = req.params.tableName;
  try {
    connection = await dbConnection.getConnection();
    let results = {};
    const [columns] = await connection.query("SHOW COLUMNS FROM ??", [
      tableName,
    ]);
    results[tableName] = {};
    for (let column of columns) {
      const columnName = column.Field;
      if (columnName != "engine_id") {
        const [rows] = await connection.query(
          `SELECT DISTINCT ?? FROM ??  ORDER BY ??`,
          [columnName, tableName, columnName]
        );
        results[tableName][columnName] = rows.map((row) => row[columnName]);
      }
    }
    return res.status(200).json({ ok: true, result: results });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    if (connection) connection.release();
  }
});

export default advertEngineRouter;