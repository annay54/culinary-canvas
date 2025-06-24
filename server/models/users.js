import { sequelize } from "../datasource.js";
import { DataTypes } from "sequelize";

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
    type: DataTypes.STRING(16),
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
  social: {
    type: DataTypes.ARRAY(DataTypes.STRING, DataTypes.STRING, DataTypes.STRING, DataTypes.STRING),
    defaultValue: [null, null, null, null],
  },
  location: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  privacy: {
    type: DataTypes.ENUM("public", "private", "custom"),
    defaultValue: "public",
  },
  custom_privacy: {
    type: DataTypes.ARRAY(DataTypes.BOOLEAN, DataTypes.BOOLEAN, DataTypes.BOOLEAN),
    defaultValue: [true, true, true],
  },
  show_email: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: false,
  tableName: "users",
});
