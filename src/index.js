const express = require("express");
const env = require("dotenv");

const { healthRoutes } = require("./routes/health.routes");
const { bankRouter } = require("./routes/bank.routes");

env.config();

const port = process.env.DB_PORT || 3000;
const app = express();

app.use("/health", healthRoutes);
app.use("/bankDetails", bankRouter);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
