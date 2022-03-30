"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Banks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Banks.init(
    {
      BANK: DataTypes.STRING,
      IFSC: DataTypes.STRING,
      BRANCH: DataTypes.STRING,
      ADDRESS: DataTypes.STRING,
      CITY1: DataTypes.STRING,
      CITY2: DataTypes.STRING,
      STATE: DataTypes.STRING,
      STD_CODE: DataTypes.STRING,
      PHONE: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Banks",
    }
  );
  return Banks;
};
