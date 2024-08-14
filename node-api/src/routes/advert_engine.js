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
      "SELECT DISTINCT engine_make FROM engine_general ORDER BY engine_make ASC LIMIT 10"
    );
    return res.status(200).json({ ok: true, result: rows.map(row => row.engine_make) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

export default advertEngineRouter;
