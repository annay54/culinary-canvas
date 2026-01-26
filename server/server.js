import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
// import { Pool, Client } from "pg"
import * as dotenv from "dotenv";
import { usersRouter } from "./routers/usersRouter.js";
import { recipesRouter } from "./routers/recipesRouter.js";
import { sequelize } from "./datasource.js";

const app = express();

dotenv.config();
app.use(bodyParser.json());

// Make app accept requests from the frontend
app.use(cors({
  origin: process.env.API_ENDPOINT,
  methods: ["GET", "POST", "DELETE", "PATCH"],
  credentials: true,
}));

try {
  await sequelize.authenticate();
  // await sequelize.sync({ alter: { drop: false } });
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database: ", error);
}

// API route to fetch data
app.use("/api/users", usersRouter)
app.use("/api/recipes", recipesRouter)

// Run application
app.listen(process.env.APP_PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server started on port http://localhost:${process.env.APP_PORT}`);
})
