import { sequelize } from "../datasource.js";
import { DataTypes } from "sequelize";
import { Recipe } from "./recipes.js";

const units = ['none', 'tsp', 'tbsp', 'cup', 'pinch', 'oz', 'ml', 'l', 'lbs', 'g', 'kg', 'slice'];

export const RecipeIngrs = sequelize.define("RecipeIngrs", {
  ingrid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  recid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  item: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unit: {
    type: DataTypes.ENUM(units),
    defaultValue: 'none',
  },
}, {
  timestamps: false,
  tableName: "recipe_ingrs",
});

Recipe.hasMany(RecipeIngrs, { foreignKey: "recid", sourceKey: "recid" });
RecipeIngrs.belongsTo(Recipe, { foreignKey: "recid", targetKey: "recid" });