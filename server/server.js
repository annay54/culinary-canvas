import express from "express"
import cors from "cors"
// import { Pool, Client } from "pg"
import * as dotenv from "dotenv";
import { usersRouter } from "./routers/usersRouter.js";
import { sequelize } from "./datasource.js";

const app = express();

dotenv.config();

// const pool = new Pool({
//   host: process.env.HOST,
//   user: process.env.USER,
//   database: process.env.DATABASE,
//   password: process.env.PASSWORD,
//   port: process.env.POSTGRES_PORT
// });

// (async () => {
//   try {
//     const {rows} = await pool.query("SELECT current_user");
//     const currentUser = rows[0]["current_user"];
//     console.log(currentUser);
//   } catch (err) {
//     console.error(err);
//   }
// })();

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

// Run application
app.listen(process.env.APP_PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server started on port http://localhost:${process.env.APP_PORT}`);
})
