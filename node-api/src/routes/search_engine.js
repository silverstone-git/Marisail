import { Router } from "express";
import dbConnection from "../config/dbConfig.js";

const searchEngineRouter = Router();

// Path     :   /api/search_engine/tables
// Method   :   Get
// Access   :   Public
// Desc     :   Endpoint to get list of tables
searchEngineRouter.get("/tables", async (req, res) => {
  let connection;
  try {
    connection = await dbConnection.getConnection();
    const [tables] = await connection.query("SHOW TABLES");
    const tableNames = tables.map((table) => Object.values(table)[0]);
    return res.status(200).json({ ok: true, tables: tableNames });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    if (connection) connection.release();
  }
});
// Path     :   /api/search_engine/columns/:tableName
// Method   :   Get
// Access   :   Public
// Desc     :   Endpoint to get columns for a specific table
searchEngineRouter.get("/columns/:tableName", async (req, res) => {
  const { tableName } = req.params;
  let connection;
  try {
    connection = await dbConnection.getConnection();
    const [columns] = await connection.query("SHOW COLUMNS FROM ??", [
      tableName,
    ]);
    const columnNames = columns.map((column) => column.Field);
    return res.status(200).json({ ok: true, columns: columnNames });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    if (connection) connection.release();
  }
});
// Path     :   /api/search_engine/engine-detail/:id
// Method   :   Get
// Access   :   Public
// Desc     :   Endpoint to get columns for a specific table
searchEngineRouter.get("/engine-detail/:id", async (req, res) => {
  try {
    console.log("Engine ID:", req.params.id);
    const { id } = req.params; // Get the engine ID from the URL parameter
    let connection;
    connection = await dbConnection.getConnection();

    // SQL query to fetch data from all related tables
    const query = `
      SELECT
        e.*,
        ec.*,
        ecool.*,
        ed.*,
        ee.*,
        eem.*,
        ef.*,
        el.*,
        em.*,
        emount.*,
        eo.*,
        ep.*,
        eps.*,
        es.*,
        et.*
      FROM engine_general e
      LEFT JOIN engine_condition ec ON e.engine_id = ec.engine_id
      LEFT JOIN engine_cooling ecool ON e.engine_id = ecool.engine_id
      LEFT JOIN engine_dimensions ed ON e.engine_id = ed.engine_id
      LEFT JOIN engine_electrical ee ON e.engine_id = ee.engine_id
      LEFT JOIN engine_emissions eem ON e.engine_id = eem.engine_id
      LEFT JOIN engine_fuel ef ON e.engine_id = ef.engine_id
      LEFT JOIN engine_location el ON e.engine_id = el.engine_id
      LEFT JOIN engine_maintenance em ON e.engine_id = em.engine_id
      LEFT JOIN engine_mounting emount ON e.engine_id = emount.engine_id
      LEFT JOIN engine_oil eo ON e.engine_id = eo.engine_id
      LEFT JOIN engine_performance ep ON e.engine_id = ep.engine_id
      LEFT JOIN engine_propulsion eps ON e.engine_id = eps.engine_id
      LEFT JOIN engine_safety es ON e.engine_id = es.engine_id
      LEFT JOIN engine_transmission et ON e.engine_id = et.engine_id
      WHERE e.engine_id = ?
    `;

    const [results] = await connection.query(query, [id]);

    if (results.length === 0) {
      return res.status(404).send("Engine not found");
    }

    res.json(results);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send(`Server error: ${err.message}`);
  }
});
// Path     :   /api/search_engine/:tableName/:columnName
// Method   :   Get
// Access   :   Public
// Desc     :   Endpoint to get columns against a table
searchEngineRouter.get("/:tableName/:columnName", async (req, res) => {
  const { tableName, columnName } = req.params;
  let connection;

  try {
    connection = await dbConnection.getConnection();

    // Validate table name to prevent SQL injection
    const [tables] = await connection.query("SHOW TABLES");
    const validTable = tables.some(
      (table) => Object.values(table)[0] === tableName
    );

    if (!validTable) {
      return res
        .status(400)
        .json({ ok: false, message: `Invalid table name: ${tableName}` });
    }

    // Validate column name to prevent SQL injection
    const [columns] = await connection.query("SHOW COLUMNS FROM ??", [
      tableName,
    ]);
    const validColumn = columns.some((column) => column.Field === columnName);

    if (!validColumn) {
      return res
        .status(400)
        .json({ ok: false, message: `Invalid column name: ${columnName}` });
    }

    // Use placeholders for dynamic table and column names
    const [rows] = await connection.query(
      `SELECT DISTINCT ?? FROM ?? ORDER BY ??`,
      [columnName, tableName, columnName]
    );

    return res
      .status(200)
      .json({ ok: true, result: rows.map((row) => row[columnName]) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    if (connection) connection.release();
  }
});
// Path     :   /api/search_engine/engines
// Method   :   Get
// Access   :   Public
// Desc     :   Endpoint to get engines
searchEngineRouter.get("/engines", async (req, res) => {
  try {
    let connection;
    connection = await dbConnection.getConnection();

    // Retrieve pagination parameters from query
    const page = parseInt(req.query.page, 10) || 1; // Default to page 1
    const limit = parseInt(req.query.limit, 10) || 27; // Default to 20 records per page
    const offset = (page - 1) * limit;

    // Base query for total count
    let countQuery = "SELECT COUNT(*) AS total FROM engine_general e";
    const countQueryParams = [];

    // Add search condition if provided
    if (req.query.search) {
      countQuery += " WHERE e.name LIKE ?";
      countQueryParams.push(`%${req.query.search}%`);
    }

    // Execute the count query
    const [[countResult]] = await connection.query(
      countQuery,
      countQueryParams
    );
    const totalRecords = countResult.total;
    const totalPages = Math.ceil(totalRecords / limit);

    // Base query for data
    let dataQuery = `
      SELECT e.*, t2.*, t3.*, t4.*, t5.*, t6.*, t7.*, t8.*, t9.*, t10.*, t11.*, t12.*, t13.*, t14.*, t15.*, t16.*
      FROM engine_general e
      LEFT JOIN engine_condition t2 ON e.engine_id = t2.engine_id
      LEFT JOIN engine_cooling t3 ON e.engine_id = t3.engine_id
      LEFT JOIN engine_dimensions t4 ON e.engine_id = t4.engine_id
      LEFT JOIN engine_electrical t5 ON e.engine_id = t5.engine_id
      LEFT JOIN engine_emissions t6 ON e.engine_id = t6.engine_id
      LEFT JOIN engine_equipment t7 ON e.engine_id = t7.engine_id
      LEFT JOIN engine_fuel t8 ON e.engine_id = t8.engine_id
      LEFT JOIN engine_location t9 ON e.engine_id = t9.engine_id
      LEFT JOIN engine_maintenance t10 ON e.engine_id = t10.engine_id
      LEFT JOIN engine_mounting t11 ON e.engine_id = t11.engine_id
      LEFT JOIN engine_oil t12 ON e.engine_id = t12.engine_id
      LEFT JOIN engine_performance t13 ON e.engine_id = t13.engine_id
      LEFT JOIN engine_propulsion t14 ON e.engine_id = t14.engine_id
      LEFT JOIN engine_safety t15 ON e.engine_id = t15.engine_id
      LEFT JOIN engine_transmission t16 ON e.engine_id = t16.engine_id
    `;

    // Add search condition if provided
    if (req.query.search) {
      dataQuery += " WHERE e.name LIKE ?";
      countQueryParams.push(`%${req.query.search}%`);
    }

    // Add pagination
    dataQuery += " LIMIT ? OFFSET ?";
    countQueryParams.push(limit, offset);

    // Execute the data query
    const [results] = await connection.query(dataQuery, countQueryParams);

    // Send the results as JSON
    res.json({
      data: results,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalRecords: totalRecords,
        limit: limit,
      },
    });
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send("Server error");
  }
});

export default searchEngineRouter;
