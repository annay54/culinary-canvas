import { sequelize } from "../datasource.js";
import { DataTypes } from "sequelize";

const tagOptions = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Snack', 'Dessert', 'Appetizer', 'Side Dish', 
'Easy', 'Quick', 'Simple', 'One-Pot', 'No-Bake', 'Beginner-Friendly', 'Healthy', 'Low-Carb', 'Low-Calorie', 'High Protein', 
'High Fiber', 'Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free', 'Keto', 'Paleo', 'High-Fiber', 'Sugar-Free', 'Low-Fat',
'Baked', 'Grilled', 'Roasted', 'Fried', 'Slow Cooker', 'Instant Pot', 'Air Fryer', 'Steamed', 'Toasted', 'Kid-Friendly', 'BBQ', 
'Comfort Food', 'Holiday', 'Italian', 'Mexican', 'Indian', 'Chinese', 'Japanese', 'Thai', 'Mediterranean', 'Middle Eastern', 
'American', 'French', 'Korean', 'Turkish', 'Spanish', 'Arab', 'Vietnamese', 'Greek', 'Hong Kong', 'Indonesian'];

export const Recipe = sequelize.define("Recipes", {
  recid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  recipe_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  about: {
    type: DataTypes.TEXT,
    defaultValue: "",
  },
  img: {
    type: DataTypes.BLOB,
    defaultValue: null,
  },
  rating: {
    type: DataTypes.DECIMAL,
    defaultValue: 0,
  },
  prep_time: {
    type: 'recipe_time',
    fields: [
      'hr',
      'min',
    ],
  },
  cook_time: {
    type: 'recipe_time',
    fields: [
      'hr',
      'min',
    ],
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.ENUM(tagOptions)),
    defaultValue: "",
  },
  notes: {
    type: DataTypes.TEXT,
    defaultValue: "",
  },
  servings: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  steps: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    defaultValue: [],
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
  }
}, {
  timestamps: false,
  tableName: "recipes",
});
