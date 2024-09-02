import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// const ENVIRONMENT = process.env;

const connection = mysql.createPool({
  host: "92.205.173.128",
  user: "Sarthak45",
  password: "V3B4N6M7L9J5",
  database: "Marisail",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection;
