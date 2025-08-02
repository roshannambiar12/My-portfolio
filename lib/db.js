// lib/db.js
import mysql from 'mysql2/promise';

export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    // It's better to log the actual error for debugging
    console.error('Database query error:', error);
    throw new Error('Database query failed.');
  }
}