const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Running" });
});

app.get("/version", (req, res) => {
  return res.json({ Version: "1.0" });
});

app.listen(3333, console.log("Server is runnning"));
