import { sequelize } from "../datasource.js";
import { DataTypes } from "sequelize";
import { Recipe } from "../models/recipes.js"

export const FavRecipes = sequelize.define("FavRecipes", {
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  recid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
}, {
  timestamps: false,
  tableName: "fav_recipes",
});

Recipe.hasMany(FavRecipes, { foreignKey: "recid" });
FavRecipes.belongsTo(Recipe, { foreignKey: "recid" });