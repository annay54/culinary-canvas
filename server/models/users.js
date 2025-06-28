import { sequelize } from "../datasource.js";
import { DataTypes } from "sequelize";

const socials = {
  type: 'socials',
  fields: [
    'facebook',
    'youtube',
    'tiktok',
    'instagram',
  ],
};

const custom_options = {
  type: 'custom_options',
  fields: [
    'prof',
    'review',
    'fav',
  ],
};

export const User = sequelize.define("User", {
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  salt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile_img: {
    type: DataTypes.BLOB,
    defaultValue: null,
  },
  social: socials,
  location: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  privacy: {
    type: DataTypes.ENUM("public", "private", "custom"),
    defaultValue: "public",
  },
  custom_privacy: custom_options,
  show_email: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: false,
  tableName: "users",
});
