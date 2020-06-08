const { Op } = require("sequelize");
const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var CurrentHolding = sequelize.define("CurrentHolding", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    traderUUID: {},
    currencyCode: {},
    amount: {},
  });
  return CurrentHolding;
};
