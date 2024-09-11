import { Router } from "express";
import dbConnection from "../config/dbConfig.js";
import { ENGINES_ADVERT } from "../config/engines_dictionary.js";

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

    queryParams = {
      engine_make: req.query?.engine_make,
      engine_model: req.query?.engine_model,
      engine_modelyear: req.query?.engine_modelyear,
      engine_type: req.query?.engine_type,
      type_designation: req.query?.type_designation,
    };

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
    console.log("---------------------QUERY------------------",query);
    console.log("---------------------------------------");

    const [results] = await connection.query(query);
    // results[table] = results.map((row) => row[column]);
    return res.status(200).json({ ok: true, result: results.map((row) => row[column]) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    if (connection) connection.release();
  }
});

advertEngineRouter.get("/relevant_data/:table", async (req, res) => {
  let connection;
  let valid_tables = [];
  valid_tables.push(req.params.table)
  // ["engine_general","engine_dimensions","engine_cooling","engine_electrical","engine_emissions","engine_fuel","engine_propulsion","engine_transmission","engine_oil", "engine_safety","engine_equipment","engine_performance","engine_maintenance","engine_mounting"];
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
      `SELECT DISTINCT Engine_ID FROM General ${filterOptions} ORDER BY Engine_ID`
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
        if (columnName != "Engine_ID") {
          const [rows] = await connection.query(
            `SELECT DISTINCT ?? FROM ?? WHERE Engine_ID IN (?) GROUP BY ?? ORDER BY count(*) DESC LIMIT 0,1`,
            [
              columnName,
              tableName,
              engineId.map((row) => row.Engine_ID),
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
      if (columnName != "Engine_ID") {
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

//NEW APIs
advertEngineRouter.post("/engines", async (req, res) => {
  let connection;
  const filter = req.body;

  try {
    connection = await dbConnection.getConnection();
    // Iterate over filter keys
    for (const key of Object.keys(filter)) {
      const tableInfo = ENGINES_ADVERT.find((item) => item.key === key);
      if (!tableInfo) continue;

      const columnCheck = await connection.query(
        `SELECT COLUMN_NAME
        FROM information_schema.columns
        WHERE table_name = '${tableInfo.tableName}'
        AND table_schema = 'Marisail'
        AND column_name = '${tableInfo.columnName}'`
      );
      if (columnCheck[0].length > 0) {
        const tables = await connection.query(
          `SELECT distinct ${tableInfo.columnName}
          FROM ${tableInfo.tableName}
          GROUP BY ${tableInfo.columnName};`
        );
        filter[key] = tables[0].map((table) => Object.values(table));
      }
    }

    return res.status(200).json({ ok: true, res: filter });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    if (connection) connection.release();
  }
});
advertEngineRouter.post("/:tableName/:fetchColumn", async (req, res) => {
  let connection;
  try {
    let filterOptions = "";
    connection = await dbConnection.getConnection();
    const filters = [];
    let queryParams = {};    
    const fetchColumnName = ENGINES_ADVERT.find((item) => item.key === req.params.fetchColumn);

    // Prepare query parameters based on the request body
    ENGINES_ADVERT.forEach((item) => {
      const key = item.key;
      const columnName = item.columnName;
      if (req.body.requestBody[key]) {
        queryParams[columnName] = req.body.requestBody[key];
      }
    });
    // Dynamically construct filter options
    for (const [key, value] of Object.entries(queryParams)) {
      if (value) {
        filters.push(`${key} = '${value}'`);
      }
    }

    filterOptions = filters.length > 0 ? `WHERE ${filters.join(" AND ")}` : "";
    // Fetch distinct values for the given column and table
    const [rows] = await connection.query(
      `SELECT DISTINCT ?? FROM ?? ${filterOptions} GROUP BY ?? ORDER BY ??`,
      [
        fetchColumnName.columnName,
        req.params.tableName,
        fetchColumnName.columnName,
        fetchColumnName.columnName,
      ]
    );

    // Format the response like API 1
    const formattedResult = rows.map(row => [Object.values(row)[0]]);

    // Return the result in the desired format
    return res.status(200).json({ ok: true, result: formattedResult});
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

advertEngineRouter.post("/relevant_data", async (req, res) => {
  console.log("Req.Param---",req.body);
  let connection;
  try {
    let filterOptions = "";
    connection = await dbConnection.getConnection();
    const filters = [];   
    let queryParams = {};
    let valid_tables = [
      "Transmission",
      "Mounting",
      "Maintenance",
      "Equipment",
      "Dimensions",
      "Performance",
      "Cooling",
      "Propulsion",
      "Fuel",
      "Oil",
      "Electrical",
      "Emmissions",
    ];
    
    // Prepare query parameters based on the request body
    ENGINES_ADVERT.forEach((item) => {
      const key = item.key;
      const columnName = item.columnName;
      if (req.body.allSelectedOptions.engineDetails[key]) {
        queryParams[columnName] = req.body.allSelectedOptions.engineDetails[key];
      }
    });

    // Dynamically construct filter options
    for (const [key, value] of Object.entries(queryParams)) {
      if (value) {
        filters.push(`${key} = '${value}'`);
      }
    }
    filterOptions = filters.length > 0 ? `WHERE ${filters.join(" AND ")}` : "";    
    let results = {};
    const [trailerID] = await connection.query(
      `SELECT DISTINCT Engine_ID FROM General ${filterOptions} ORDER BY Engine_ID`
    );    
    if (trailerID.length === 0) {
      return res.status(404).json({ ok: false, message: "No data found" });
    }
    for (let tableName of valid_tables) {
      const [columns] = await connection.query("SHOW COLUMNS FROM ??", [
        tableName,
      ]);
      for (let column of columns) {
        const columnName = column.Field;
        if (columnName != "Engine_ID") {
          const [rows] = await connection.query(
            `SELECT DISTINCT ?? FROM ?? where Engine_ID IN (?) GROUP BY ?? ORDER BY count(*) DESC LIMIT 0,1`,
            [
              columnName,
              tableName,
              trailerID.map((row) => row.Engine_ID),
              columnName,
            ]
          );
          results[ENGINES_ADVERT.find((item) => item.columnName === columnName)?.key] = rows.map((row) => row[columnName]);
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
export default advertEngineRouter;