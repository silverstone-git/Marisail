import { Router } from "express";
import dbConnection from "../config/dbConfig.js";

const searchEngineRouter = Router();

// Path     :   /api/engine/engine_condition
// Method   :   Get
// Access   :   Public

searchEngineRouter.get("/engine_condition", async (req, res) => {
  console.log("Inside search engine...");
  const { page = 1, limit = 500 } = req.query; // Default to page 1 with 10 results per page
  let connection;

  connection = await dbConnection.getConnection();
  const offset = (page - 1) * limit;

  const results = `SELECT * FROM engine_condition LIMIT ${limit} OFFSET ${offset}`;

  return res.status(200).json({
    page: parseInt(page),
    limit: parseInt(limit),
    results: results,
  });
});

export default searchEngineRouter;
