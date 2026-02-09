import { Router } from "express";
import { Recipe } from "../models/recipes.js";
import { RecipeIngrs } from "../models/recipeIngrs.js";
import { Review } from "../models/reviews.js";
import { User } from "../models/users.js";
import { sequelize } from "../datasource.js";
import { Op } from "sequelize";

const sortByDict = {"rating": "rating", "create": "created_at", "author": "author", "recipe": "recipe_name"}
const sortOrderDict = {"descending": "DESC", "ascending": "ASC"}

export const recipesRouter = Router();

/**
 * Return "limit"-number of recipes matching the specified min and max rating, 
 * tags, and custom recipe/author name searches starting at offset. The fetched 
 * recipes are sorted by the specified option in the selected order.
 */
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

/**
 * Return the recipe information with the specified identifier.
 */
recipesRouter.get("/info", async (req, res) => {
  const recipe = await Recipe.findOne({ where: { recid: req.query.id } });
  if (!recipe) {
    return res.status(404).json({ error: "Recipe not found." });
  }
  try {
    const ingrs = await RecipeIngrs.findAll({ 
      where: { recid: req.query.id },
      attributes: ["item", "quantity", "unit"],
    });
    return res.json({
      recipe: recipe,
      ingrs: ingrs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to fetch recipe ingredients." });
  }
})

/**
 * Return all reviews of the recipe with the specified identifier.
 */
recipesRouter.get("/reviews", async (req, res) => {
  const limit = parseInt(req.query.numReviews);
  const offset = (limit * req.query.page) - limit;

  try {
    // separately call findAll and count, instead of using findAndCountAll,
    // due to usage of the include option (ex., SQL JOIN); 
    // otherwise, not accurate count
    const reviews = await Review.findAll({ 
      include: [{
        model: User,
        attributes: ["profile_img", "uid"],
      }],
      where: { recipe: req.query.id },
      limit: limit,
      offset: offset,
      distinct: true,
    });

    const count = await Review.count({
      where: { recipe: req.query.id },
    });

    return res.json({ 
      reviews: reviews,
      count: count,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to fetch reviews." });
  }
})

/**
 * Return all the recipe tags in the database.
 */
recipesRouter.get("/tags", async (req, res) => {
  try {
    const tags = Recipe.getAttributes().tags.type.type.values;
    
    return res.json(tags)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to fetch tags." });
  }
});

/**
 * Return all recipes created by the user with the specified identifier.
 */
recipesRouter.get("/user-created", async (req, res) => {
  const limit = parseInt(req.query.numRecipes);
  const offset = (limit * req.query.page) - limit;

  try {
    const { rows, count } = await Recipe.findAndCountAll({
      where: { author: req.query.value },
      limit: limit,
      offset: offset,
      distinct: true,
    });

    console.log("rows is", rows, " count is", count)

    return res.json({ 
      recipes: rows,
      count: count,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to fetch recipes." });
  }
});