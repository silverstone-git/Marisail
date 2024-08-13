import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const ENVIRONMENT = process?.env;

const connection = mysql.createPool({
  host: ENVIRONMENT.HOST || '92.205.173.128',
  user: ENVIRONMENT.MY_USER || 'Pragathy12',
  password: ENVIRONMENT.MY_PASSWORD || 'G3J5V6N4K7L9',
  database: 'Marisail',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection;
