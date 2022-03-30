// const fs = require("fs");
// const path = require("path");
const Sequelize = require("sequelize");

const models = require("../../models");
const { CustomException } = require("../constants/error");
// const { PATH } = require("../constants/fixtures");

const bankDetails = require("../fixtures/ifsc.json");
const insertBankDetails = async () => {
  try {
    const updatedBankDetails = bankDetails.map((detail) => {
      detail.STD_CODE = detail["STD CODE"];
      return detail;
    });
    models.Banks.destroy({
      where: {},
      truncate: true,
    });

    await models.Banks.bulkCreate(updatedBankDetails);
  } catch (err) {
    throw CustomException(`${err.message}`, 404);
  }
};

const getBankNames = async () => {
  const bankNames = await models.Banks.findAll({
    attributes: [[Sequelize.fn("DISTINCT", Sequelize.col("BANK")), "BANK"]],
  });

  const updatedBankNames = bankNames.reduce((acc, bank) => {
    acc.push(bank.BANK);
    return acc;
  }, []);

  return updatedBankNames;
};

const getBranchNames = async (bank) => {
  const branchNames = await models.Banks.findAll({
    attributes: ["BRANCH"],
    where: {
      BANK: bank,
    },
  });
  console.log(bank);
  const updatedBranches = branchNames.reduce((acc, branch) => {
    acc.push(branch.BRANCH);
    return acc;
  }, []);
  return updatedBranches;
};

const getIfsc = async (bank, branch) => {
  const ifsc = await models.Banks.findAll({
    attributes: [
      "BANK",
      "BRANCH",
      "IFSC",
      "ADDRESS",
      "CITY1",
      "CITY2",
      "STATE",
      "STD_CODE",
      "PHONE",
    ],
    where: {
      BANK: bank,
      BRANCH: branch,
    },
  });

  if (ifsc.length === 0) {
    throw CustomException(
      "BAD REQUEST - bank details for the given bank and branch are not found",
      404
    );
  }
  return ifsc;
};

const getBankDetails = async (ifsc) => {
  const bankDetails = await models.Banks.findAll({
    attributes: [
      "BANK",
      "BRANCH",
      "IFSC",
      "ADDRESS",
      "CITY1",
      "CITY2",
      "STATE",
      "STD_CODE",
      "PHONE",
    ],
    where: {
      IFSC: ifsc,
    },
  });

  if (bankDetails.length === 0) {
    throw CustomException(
      "BAD REQUEST - bank details for the given ifsc code is not found",
      404
    );
  }

  return bankDetails;
};

module.exports = {
  insertBankDetails,
  getBankNames,
  getBranchNames,
  getIfsc,
  getBankDetails,
};
