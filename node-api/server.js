const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { log, ExpressAPILogMiddleware } = require("@rama41222/node-logger");

const config = {
  name: "sample-express-app",
  port: 3000,
  host: "0.0.0.0"
};

const app = express();
const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors());
app.use(ExpressAPILogMiddleware(logger, { request: true }));

app.get("/", (req, res) => {
  const response = { value: 0, action: "modify server.js and save!" };

  res.setHeader("Content-Type", "application/json");

  res.status(200).json(response);
});

// Sample coin data (replace with actual coin data from your source)
const coins = [
  { id: 1, name: "Bitcoin", symbol: "BTC" },
  { id: 2, name: "Ethereum", symbol: "ETH" },
  { id: 3, name: "Ripple", symbol: "XRP" },
  // Add more coins as needed
];

// Define route to get list of coins
app.get("/coins", (req, res) => {
  // Set Content-Type header to application/json
  res.setHeader("Content-Type", "application/json");

  // Send JSON response with array of coins
  res.status(200).json(coins);
});

app.listen(config.port, config.host, e => {
  if (e) {
    throw new Error("Internal Server Error");
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});
