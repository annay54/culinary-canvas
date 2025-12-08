import { Router } from "express";
import { Recipe } from "../models/recipes.js";
import { sequelize } from "../datasource.js";

export const recipesRouter = Router();

recipesRouter.get("/all", async (req, res) => {
  const limit = parseInt(req.query.numRecipes);
  const offset = (limit * req.query.page) - limit;
  try {
    const recipes = await Recipe.findAll({
      limit: limit,
      offset: offset,
      distinct: true,
    });

    return res.json({
      recipes: recipes,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to fetch recipes." });
  }
});