import { Router } from "express";
import { Recipe } from "../models/recipes.js";
import { sequelize } from "../datasource.js";
import { Op } from "sequelize";

const sortByDict = {"rating": "rating", "create": "created_at", "author": "author", "recipe": "recipe_name"}
const sortOrderDict = {"descending": "DESC", "ascending": "ASC"}

export const recipesRouter = Router();

recipesRouter.get("/all", async (req, res) => {
  const limit = parseInt(req.query.numRecipes);
  const offset = (limit * req.query.page) - limit;
  const search = req.query.search;
  const min = req.query.min;
  const max = req.query.max;
  // first item in array is a placeholder, thus remove it
  const tags = [...req.query.tags].splice(1);
  const sortBy = req.query.sortBy;
  const sortOrder = req.query.sortOrder;
  let orderBy = sortByDict[sortBy]
  if (sortBy == "time") {
    orderBy = sequelize.literal("((prep_time).hr + (cook_time).hr) * 60 + ((prep_time).min + (cook_time).min)")
  }

  try {
    const { rows, count } = await Recipe.findAndCountAll({
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
        } , {
            [Op.or]: [{
            recipe_name: {
              [Op.iLike]: `%${search}%`
            }
          }, {
            author: {
              [Op.iLike]: `%${search}%@%`
            }
          }]
        }]
      },
      order: [
        [orderBy, sortOrderDict[sortOrder]]
      ],
      limit: limit,
      offset: offset,
      distinct: true,
    });

    return res.json({ 
      recipes: rows,
      count: count,
    });
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