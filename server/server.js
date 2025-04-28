const express = require("express");
const app = express();
const cors = require("cors");

const path = require("path");
// Load environment variables into process.env
require("dotenv").config({
  override: true,
  path: path.join(__dirname, "development.env")
});

const {Client} = require("pg");

const client = new Client({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.POSTGRES_PORT
});

client.connect().then(() => {
  console.log("Connected to database");
}).catch(() => {
  console.log("Cannot connect to database");
});

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
