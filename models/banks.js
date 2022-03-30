"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Banks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Banks.init(
    {
      bank: DataTypes.STRING,
      ifsc: DataTypes.STRING,
      branch: DataTypes.STRING,
      address: DataTypes.STRING,
      city1: DataTypes.STRING,
      city2: DataTypes.STRING,
      state: DataTypes.STRING,
      std_code: DataTypes.FLOAT,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Banks",
    }
  );
  return Banks;
};
