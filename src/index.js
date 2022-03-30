const express = require("express");
const env = require("dotenv");
const { healthRoutes } = require("./routes/health.routes");

env.config();

const port = process.env.PORT || 3000;
const app = express();

app.use("/health", healthRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
