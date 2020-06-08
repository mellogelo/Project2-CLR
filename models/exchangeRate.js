const { Op } = require("sequelize");
const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var ExchangeRate = sequelize.define("ExchangeRate", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
  });
  return ExchangeRate;
};
