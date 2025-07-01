import { Router } from "express";
import { Recipe } from "../models/recipes.js";
import { sequelize } from "../datasource.js";

export const recipesRouter = Router();

recipesRouter.post("/all", async (req, res) => {

});