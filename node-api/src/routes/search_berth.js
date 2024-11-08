import { Router } from "express";
import dbConnection from "../config/dbConfig.js";
import {
  varToColumn,
  varToTable,
  uniqueTable,
} from "../config/berthSearchConfig.js";

const searchBerthRouter = Router();

searchBerthRouter.get("/berths", async (req, res) => {
  let connection;
  try {
    var tableNames = [];
    connection = await dbConnection.getConnection();
    const columnCheck = await connection.query(
      `SELECT COLUMN_NAME
         FROM information_schema.columns
         WHERE table_name = 'Marina_Port'
         AND table_schema = 'Marisail'
         AND column_name = 'Site_Details'`
    );

    // Check if the column exists
    if (columnCheck[0].length > 0) {
      const tables = await connection.query(
        `SELECT Site_Details, COUNT(*) AS occurrence_cnt 
             FROM Marina_Port 
             GROUP BY Site_Details;`
      );
      tableNames = tables[0].map((table) => Object.values(table));
    }
    return res.status(200).json({ ok: true, tables: tableNames });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    if (connection) connection.release();
  }
});

searchBerthRouter.post("/berths", async (req, res) => {
  let connection;
  const filter = req.body.filter;
  const tableName = varToTable[req.body.tableName];
  try {
    connection = await dbConnection.getConnection();

    for (const key of Object.keys(filter)) {
      const columnCheck = await connection.query(
        `SELECT COLUMN_NAME
             FROM information_schema.columns
             WHERE table_name = '${tableName}'
             AND table_schema = 'Marisail'
             AND column_name = '${varToColumn[key]}'`
      );

      // Check if the column exists
      if (columnCheck[0].length > 0) {
        let tables;
        if (varToColumn[key] == "Beam") {
          //add dynamic coding here so that any no.of keys can be added
          tables = await connection.query(
            `SELECT 
              CONCAT(FLOOR(( ${varToColumn[key]} - 1) / 10) * 10 + 1, '-', FLOOR(( ${varToColumn[key]} - 1) / 10) * 10 + 10) AS  ${varToColumn[key]}_Range,
              COUNT(*) AS occurrence_cnt
            FROM ${tableName} WHERE  ${varToColumn[key]} >= 1
            GROUP BY  ${varToColumn[key]}_Range
            ORDER BY  ${varToColumn[key]}_Range;
            `
          );
          console.log(
            "001 key--",
            tables[0].map((table) => Object.values(table))
          );
        } else {
          tables = await connection.query(
            `SELECT ${varToColumn[key]}, COUNT(*) AS occurrence_cnt 
              FROM ${tableName} 
              GROUP BY ${varToColumn[key]};
            `
          );
        }
        // console.log("001 key--",filter[key]?.beam != undefined ? tables[0].map((table) => Object.values(table)): "" );
        filter[key] = tables[0].map((table) => Object.values(table));
        // console.log("001 key--",tables[0].map((table) => Object.values(table)));
      }
    }

    return res.status(200).json({ ok: true, res: filter });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    if (connection) connection.release();
  }
});

searchBerthRouter.post("/berthsData", async (req, res) => {
  let connection;
  var page = req.body.page;
  var filter = {};
  for (const key of Object.keys(req.body.selectedOptions)) {
    let val = key,
      key2 = req.body.selectedOptions[key];
    if (filter[key2] === undefined) {
      filter[key2] = [val];
    } else {
      filter[key2].push(val);
    }
  }

  try {
    connection = await dbConnection.getConnection();

    var required1 = "Marisail_Berth_ID, Location, Type FROM Marina_Port";
    // var required2 = "Price_PW FROM Pricing";

    var basic = `SELECT ${required1} `;

    if (Object.keys(filter).length > 0) {
      basic += `WHERE `;

      for (const key of Object.keys(filter)) {
        var temp = `${key} IN (`;
        for (const val of filter[key]) {
          temp += `'${val}',`;
        }
        temp = temp.slice(0, -1);
        temp += `) OR `;
        basic += temp;
      }

      basic = basic.slice(0, -3);
    }

    basic += `LIMIT 60 OFFSET ${page * 30};`;
    basic += `;`;
    const tables = await connection.query(basic);
    return res.status(200).json({ ok: true, res: tables });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    if (connection) connection.release();
  }
});

searchBerthRouter.get("/berth-detail/:id", async (req, res) => {
  const { id } = req.params;
  let connection;
  try {
    connection = await dbConnection.getConnection();
    var query = `SELECT`;
    uniqueTable.forEach((table) => {
      query += ` ${table}.*,`;
    });

    query = query.slice(0, -1);
    query += ` FROM ${uniqueTable[0]}`;

    for (let i = 1; i < uniqueTable.length; i++) {
      query += ` JOIN ${uniqueTable[i]} ON ${uniqueTable[0]}.Trailer_ID = ${uniqueTable[i]}.Trailer_ID`;
    }

    query += ` WHERE ${uniqueTable[0]}.Trailer_ID = ${id};`;
    const tables = await connection.query(query);
    return res.status(200).json({ ok: true, res: tables });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    if (connection) connection.release();
  }
});

export default searchBerthRouter;
