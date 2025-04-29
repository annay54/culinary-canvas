const express = require("express");
const app = express();
const cors = require("cors");

const path = require("path");
// Load environment variables into process.env
require("dotenv").config({
  override: true,
  path: path.join(__dirname, "development.env")
});

const {Pool, Client} = require("pg");

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.POSTGRES_PORT
});

(async () => {
  try {
    const {rows} = await pool.query("SELECT current_user");
    const currentUser = rows[0]["current_user"];
    console.log(currentUser);
  } catch (err) {
    console.error(err);
  }
})();

// Make app accept requests from the frontend
app.use(cors());

// API route to fetch data
app.get("/api/home", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Run application
app.listen(process.env.APP_PORT, () => {
  console.log(`Server started on port ${process.env.APP_PORT}`);
})
