const { Op } = require("sequelize");
const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Account = sequelize.define("Account", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    email: {
      type: DataTypes.STRING(1023),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        throw new Error("Do not try to set the `fullName` value!");
      },
    },
    lastLoginTime: {
      type: DataTypes.BIGINT,
    },
    sessionUUID: {
      type: DataTypes.UUID,
    },
    transactionTime: {
      type: DataTypes.BIGINT,
    },
    baseCurrency :{
      type: DataTypes.STRING(3),
      allowNull:false,
      defaultValue:"USD"
    }
  });
  return Account;
};
