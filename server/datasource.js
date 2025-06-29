import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  `${process.env.POSTGRES_DATABASE}`,
  `${process.env.POSTGRES_USER}`,
  `${process.env.POSTGRES_PASSWORD}`,
  {
    host: `${process.env.HOST}`,
    port: `${process.env.POSTGRES_PORT}`,
    dialect: "postgres",
    timestamps: false,
  }
);
