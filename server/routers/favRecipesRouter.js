import { Router } from "express";
import { FavRecipes } from "../models/favRecipes.js";
import { Recipe } from "../models/recipes.js";

export const favRecipesRouter = Router();

/**
 * Return all favourite recipes of the user with the specified identifier.
 */
favRecipesRouter.get("/user-fav", async (req, res) => {
  const limit = parseInt(req.query.numRecipes);
  const offset = (limit * req.query.page) - limit;

  try {
    // separately call findAll and count, instead of using findAndCountAll,
    // due to usage of the include option (ex., SQL JOIN);
    // otherwise not accurate count
    const rows = await FavRecipes.findAll({
      include: [{
        model: Recipe,
      }],
      where: { uid: req.query.value },
      limit: limit,
      offset: offset,
      distinct: true,
    });

    const count = await FavRecipes.count({
      where: { uid: req.query.value },
    });

    // Get and return only the recipes
    let recipes = []
    rows.forEach((elem) => {
      recipes.push(elem.Recipe)
    })

    return res.json({ 
      recipes: recipes,
      count: count,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to fetch recipes." });
  }
});

/**
 * Return true if user with specified uid has recipe with specified id as 
 * favourite,otherwise, return false.
 */
favRecipesRouter.get("/isFav", async (req, res) => {
  const fav = await FavRecipes.findOne({ where: { recid: req.query.id, uid: req.query.user } });
  if (fav) {
    return res.json(true);
  }
  return res.json(false);
})

/**
 * Add a new row in FavRecipes table when user added recipe to their favourites.
 */
favRecipesRouter.post("/add", async (req, res) => {
  // Check if row already exist in database
  const favExist = await FavRecipes.findOne({
    where: { recid: req.query.id, uid: req.query.user },
  });
  if (favExist) {
    return res.status(422).json({ error: "User already added recipe to their favourites." });
  }
  
  const fav = await FavRecipes.create({
    recid: req.query.id, 
    uid: req.query.user
  })

  return res.json("Successfully added recipe to user's favourites.");
})

/**
 * Delete a row in FavRecipes table when user remove recipe from their favourites.
 */
favRecipesRouter.delete("/delete", async (req, res) => {
  // Check if row already exist in database
  const favExist = await FavRecipes.findOne({
    where: { recid: req.query.id, uid: req.query.user },
  });
  if (favExist) {
    await favExist.destroy();
  }

  return res.json("Successfully deleted recipe from user's favourites.");
})
