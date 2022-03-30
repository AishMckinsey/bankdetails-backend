const express = require("express");
const env = require("dotenv");

const { healthRoutes } = require("./routes/health.routes");
const { bankRoutes } = require("./routes/bank.routes");

env.config();

const port = process.env.PORT || 3000;
const app = express();

app.use("/health", healthRoutes);
app.use("/bankDetails", bankRoutes);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
