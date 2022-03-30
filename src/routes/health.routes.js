const express = require("express");

const { healthHandler } = require("../handlers/health.handler");

const healthRoutes = express.Router();
healthRoutes.get("/", healthHandler);

module.exports = {
  healthRoutes,
};
