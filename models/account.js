const { Op } = require("sequelize");
const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Account = sequelize.define(
    "Account",
    {
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
        type: DataTypes.STRING,
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
      password: {
        type: DataTypes.STRING(1023),
        allowNull: false,
        len: [4],
      },
      // baseCurrencyUUID: {
      //   type: DataTypes.UUID,
      //   references: "Currencies",
      //   referencesKey: "uuid",
      // },
      initialAmount: {
        type: DataTypes.DECIMAL(20, 10),
        allowNull: false,
      },
    },
    {
      // Options https://sequelize.org/v3/docs/models-definition/#configuration
      timestamps: false,
    }
  );
  Account.associate = function (models) {
    Account.hasMany(models.Position, { foreignKey: "accountUUID" });
    Account.hasMany(models.Transaction, { foreignKey: "accountUUID" });
  };

  // add hook (trigger) to update initial amount based on exchange rate
  // Account.beforeCreate(async (account,options) => {
    
  // });
  return Account;
};
