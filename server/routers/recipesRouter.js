import { Router } from "express";
import { Recipe } from "../models/recipes.js";
import { sequelize } from "../datasource.js";
import { Op } from "sequelize";

const sortOrderDict = {"descending": "DESC", "ascending": "ASC"}

export const recipesRouter = Router();

recipesRouter.get("/all", async (req, res) => {
  const limit = parseInt(req.query.numRecipes);
  const offset = (limit * req.query.page) - limit;
  const min = req.query.min;
  const max = req.query.max;
  // first item in array is a placeholder, thus remove it
  const tags = [...req.query.tags].splice(1);
  const sortBy = req.query.sortBy;
  const sortOrder = req.query.sortOrder;
  try {
    const recipes = await Recipe.findAll({
      where: {
        [Op.and]: [{
          rating: {
              [Op.gte]: min,
              [Op.lte]: max,
          }
        } , {
          // find recipes with at least one tag from list tags
          tags: { [Op.overlap]: sequelize.cast(tags, 'tag[]') },
          // find recipes with only tags in list tags
          // tags: { [Op.contains]: sequelize.cast(tags, 'tag[]') },
        }]
      },
      // order: [
      //   []
      // ],
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