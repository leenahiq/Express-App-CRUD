const { DataTypes } = require("sequelize");

const connection = require("../connection");

const Coffee = connection.define(
  "Coffee",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strength: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    indexed: [{ unique: true, field: ["name"] }],
  }
);

module.exports = Coffee;
