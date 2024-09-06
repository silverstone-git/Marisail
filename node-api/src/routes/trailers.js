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

trailersRouter.get("/:tableName/:columnName", async (req, res) => {
  console.log(
    "***************************TRAILES QUERY************************"
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
