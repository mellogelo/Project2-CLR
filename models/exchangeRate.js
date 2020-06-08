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
    // Base currency. One of USD, GBP, EUR, JPY
    base: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    // target currency. This is the currency that the rate applies to
    target: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    rate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  });
  return ExchangeRate;
};
