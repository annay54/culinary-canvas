import { sequelize } from "../datasource.js";
import { DataTypes, INTEGER } from "sequelize";
import { Recipe } from "./recipes.js";

export const Review = sequelize.define("Review", {
  revid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  recipe: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  created_at: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  comment: {
    type: DataTypes.TEXT,
    defaultValue: "",
  },
  rating: {
    type: DataTypes.DECIMAL,
    defaultValue: 0,
  },
  helpful: {
    type: INTEGER,
    defaultValue: 0,
  },
}, {
  timestamps: false,
  tableName: "reviews",
});

// "recipe" is the foreign key field in the Review model
// "recid" is the primary key field in the Recipe model 
Recipe.hasMany(Review, { foreignKey: "recipe", sourceKey: "recid" });
Review.belongsTo(Recipe, { foreignKey: "recipe", targetKey: "recid" });