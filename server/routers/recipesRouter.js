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

    return res.json(recipes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to fetch recipes." });
  }
});

recipesRouter.get("/tags", async (req, res) => {
  try {
    const tags = Recipe.getAttributes().tags.type.type.values;
    
    return res.json(tags)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to fetch tags." });
  }
});