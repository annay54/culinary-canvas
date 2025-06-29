import { sequelize } from "../datasource.js";
import { DataTypes, INTEGER } from "sequelize";

export const User = sequelize.define("User", {
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
