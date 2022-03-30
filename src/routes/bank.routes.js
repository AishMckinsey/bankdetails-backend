const express = require("express");
const handlers = require("../handlers/bank.handler");

const bankRoutes = express.Router();

bankRoutes.get("/insertBankDetails", handlers.insertBankDetails);
bankRoutes.get("/getBankNames", handlers.getBankNames);
bankRoutes.get("/getBranchNames/:bankName", handlers.getBranchNames);
bankRoutes.get("/getIfsc/:bankName/:branchName", handlers.getIfsc);
bankRoutes.get("/getBankDetails/:ifsc", handlers.getBankDetails);

module.exports = {
  bankRoutes,
};
