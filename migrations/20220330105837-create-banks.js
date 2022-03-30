"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Banks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bank: {
        type: Sequelize.STRING,
      },
      ifsc: {
        type: Sequelize.STRING,
      },
      branch: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      city1: {
        type: Sequelize.STRING,
      },
      city2: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      std_code: {
        type: Sequelize.FLOAT,
      },
      phone: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Banks");
  },
};
