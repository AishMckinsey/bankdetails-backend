const express = require("express");
const handlers = require("../handlers/bank.handler");

const bankRoutes = express.Router();

bankRoutes.get("/insertBankDetails", handlers.insertBankDetails);
bankRoutes.get("/getBankNames", handlers.getBankNames);
bankRoutes.get("/getBranchNames", handlers.getBranchNames);
bankRoutes.get("/getIfsc", handlers.getIfsc);
bankRoutes.get("/getBankDetails", handlers.getBankDetails);

module.exports = {
  bankRoutes,
};
