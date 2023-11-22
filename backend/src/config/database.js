const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
  max: 10,
});

pool
  .connect()
  .then((client) => {
    console.log("Connected to PostgreSQL");

    client.release();
  })
  .catch((error) => {
    console.error("Error connecting to PostgreSQL:", error);
  });

module.exports = pool;
