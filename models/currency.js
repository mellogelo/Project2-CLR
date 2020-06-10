const { Op } = require("sequelize");
const Sequelize = require("sequelize");

// https://www.xe.com/symbols.php
module.exports = function (sequelize, DataTypes) {
  var CurrentHolding = sequelize.define("Currency", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    code: {
      type: DataTypes.STRING(3),
      allowNull: false,
      unique: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    symbolUnicodeHex: {
      type: DataTypes.STRING(255),
    },
    isBaseCurrency: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
  return Currency;
};
