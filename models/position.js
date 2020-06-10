const { Op } = require("sequelize");
const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Position = sequelize.define("Position", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    accountUUID: { // hasMany
      type: DataTypes.UUID,
      allowNull: false,
    },
    currencyUUID: { // hasMany
      type: DataTypes.UUID,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
    },
  });
  return Position;
};
