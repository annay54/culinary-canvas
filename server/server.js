const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

// Make app accept requests from the frontend
app.use(cors());

// API route to fetch data
app.get("/api/home", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Run application
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
