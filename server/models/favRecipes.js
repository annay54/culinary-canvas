import { sequelize } from "../datasource.js";
import { DataTypes } from "sequelize";

export const FavRecipes = sequelize.define("FavRecipes", {
  user_email: {
    type: DataTypes.STRING,
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
