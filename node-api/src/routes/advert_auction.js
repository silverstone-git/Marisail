import { Router } from "express";
import dbConnection from "../config/dbConfig.js";
import {
  AUCTION_ADVERT,
} from "../config/auctionAdvertConfig.js";

const advertAuctionRouter = Router();

advertAuctionRouter.post("/auction", async (req, res) => {
  let connection;
  const filter = req.body;

  try {
    connection = await dbConnection.getConnection();
    for (const key of Object.keys(filter)) {
      const tableInfo = AUCTION_ADVERT.find((item) => item.key === key);
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
          FROM ${tableInfo.tableName} WHERE ${tableInfo.columnName} IS NOT NULL
          GROUP BY ${tableInfo.columnName}`
        );
        filter[key] = tables?.[0].map((table) => Object.values(table));
      }
    }

    return res.status(200).json({ ok: true, res: filter });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    if (connection) connection.release();
  }
});
export default advertAuctionRouter;
