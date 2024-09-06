import { Router } from "express";
import dbConnection from "../config/dbConfig.js";
import { TRAILERS_ADVERT } from "../config/trailers_dictionary.js";

const trailersRouter = Router();

trailersRouter.post("/trailers", async (req, res) => {
  let connection;
  const filter = req.body;

  try {
    connection = await dbConnection.getConnection();
    // Iterate over filter keys
    for (const key of Object.keys(filter)) {
      const tableInfo = TRAILERS_ADVERT.find((item) => item.key === key);
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
trailersRouter.post("/:tableName/:fetchColumn", async (req, res) => {
  let connection;
  try {
    let filterOptions = "";
    connection = await dbConnection.getConnection();
    const filters = [];
    let queryParams = {};    
    const fetchColumnName = TRAILERS_ADVERT.find((item) => item.key === req.params.fetchColumn);

    // Prepare query parameters based on the request body
    TRAILERS_ADVERT.forEach((item) => {
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

trailersRouter.post("/relevant_data", async (req, res) => {
  console.log("Req.Param---",req.body);
  let connection;
  try {
    let filterOptions = "";
    connection = await dbConnection.getConnection();
    const filters = [];   
    let queryParams = {};
    let valid_tables = [
      "Construction", 
      "Trailer_Features", 
      "Axles", 
      "Tyres_Brakes", 
      "Winches_Lighting", 
      "Accessories", 
      "Loading_Transport_Features", 
      "Security_Features", 
      "Corrosion_Resistance", 
      "Performance_Handling", 
      "Tongue", 
      "Documentation", 
      "Regulatory"
    ]
    
    // Prepare query parameters based on the request body
    TRAILERS_ADVERT.forEach((item) => {
      const key = item.key;
      const columnName = item.columnName;
      if (req.body.allSelectedOptions.identification[key]) {
        queryParams[columnName] = req.body.allSelectedOptions.identification[key];
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
      `SELECT DISTINCT Trailer_ID FROM Trailers_ID ${filterOptions} ORDER BY Trailer_ID`
    );    
    if (trailerID.length === 0) {
      return res.status(404).json({ ok: false, message: "No data found" });
    }
    for (let tableName of valid_tables) {
      const [columns] = await connection.query("SHOW COLUMNS FROM ??", [
        tableName,
      ]);
      results[tableName] = {};
      for (let column of columns) {
        const columnName = column.Field;
        if (columnName != "Trailer_ID") {
          const [rows] = await connection.query(
            `SELECT DISTINCT ?? FROM ?? where Trailer_ID IN (?) GROUP BY ?? ORDER BY count(*) DESC LIMIT 0,1`,
            [
              columnName,
              tableName,
              trailerID.map((row) => row.Trailer_ID),
              columnName,
            ]
          );
          results[columnName] = rows.map((row) => row[columnName]);
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

trailersRouter.get("/:tableName/:columnName", async (req, res) => {
  console.log(
    "***************************TRAILERS QUERY************************"
  );
  const { tableName, columnName } = req.params;
  const { manufacturer, make, model, year } = req.query;

  let connection;
  try {
    connection = await dbConnection.getConnection();
    const filters = [];
    let queryParams = {};

    // if (req.query?.marisail_trailer_id !== 'undefined' && req.query?.marisail_trailer_id !== null && req.query?.marisail_trailer_id !== '') {
    //   queryParams.marisail_trailer_id = req.query.marisail_trailer_id;
    // }

    if (
      manufacturer !== "undefined" &&
      manufacturer !== null &&
      manufacturer !== ""
    ) {
      queryParams.manufacturer = manufacturer;
    }

    if (make !== "undefined" && make !== null && make !== "") {
      queryParams.make = make;
    }

    if (model !== "undefined" && model !== null && model !== "") {
      queryParams.model = model;
    }

    if (year !== "undefined" && year !== null && year !== "") {
      queryParams.year = year;
    }
    console.log("Query Params--", queryParams);

    // Dynamically construct filter options
    for (const [key, value] of Object.entries(queryParams)) {
      if (value) {
        filters.push(`${key} = '${value}'`);
      }
    }
    let query;
    if (columnName == "marisail_trailer_id") {
      query = `SELECT DISTINCT ${columnName} as value FROM ${tableName} ORDER BY ${columnName}`;
    } else {
      const filterOptions =
        filters.length > 0 ? `WHERE ${filters.join(" AND ")}` : "";
      query = `SELECT DISTINCT ${columnName} as value FROM ${tableName} ${filterOptions} ORDER BY ${columnName}`;
    }
    console.log("---------------------QUERY------------------", query);
    console.log("---------------------------------------");

    const [results] = await connection.query(query);
    return res.status(200).json({
      ok: true,
      result: results.map((row) => ({
        value: row.value,
      })),
    });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    if (connection) connection.release();
  }
});
export default trailersRouter;
