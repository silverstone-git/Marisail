import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const ENVIRONMENT = process?.env;

const connection = mysql.createPool({
  host: ENVIRONMENT.HOST,
  user: ENVIRONMENT.MY_USER,
  password: ENVIRONMENT.MY_PASSWORD,
  database: 'Marisail',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection;