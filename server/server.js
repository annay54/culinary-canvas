const express = require("express");
const app = express();
const PORT = 8080;

// API route to fetch data
app.get("/api/home", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Run application
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
