const services = require("../services/bank.services");

const insertBankDetails = async (req, res) => {
  try {
    const banksAdded = await services.insertBankDetails();
    res.json({ banksAdded }).status(200);
  } catch (err) {
    res.json(`what There is something wrong here! ${err.message}`).status(500);
  }
};

const getBankNames = async (req, res) => {
  try {
    const bankNames = await services.getBankNames();
    res.json({ bankNames }).status(200);
  } catch (err) {
    res.json(`hi There is something wrong here! ${err.message}`).status(500);
  }
};

const getBranchNames = async (req, res) => {
  try {
    const branchNames = await services.getBranchNames(req.params.bankName);
    res.json({ branchNames }).status(200);
  } catch (err) {
    res.json(`hello There is something wrong here! ${err.message}`).status(500);
  }
};

const getIfsc = async (req, res) => {
  try {
    const ifscCode = await services.getIfsc(
      req.params.bankName,
      req.params.branchName
    );
    res.json({ ifscCode }).status(200);
  } catch (err) {
    res.json(`is it There is something wrong here! ${err.message}`).status(500);
  }
};

const getBankDetails = async (req, res) => {
  try {
    const bankDetails = await services.getBankDetails(req.params.ifsc);
    res.json({ bankDetails }).status(200);
  } catch (err) {
    res.json(`when There is something wrong here! ${err.message}`).status(500);
  }
};

module.exports = {
  insertBankDetails,
  getBankNames,
  getBranchNames,
  getIfsc,
  getBankDetails,
};
