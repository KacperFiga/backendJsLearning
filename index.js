const express = require("express");
const format = require("date-format");

const app = express();

const PORT = process.env.PORT || 2137;

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/api/v1/instagram", (req, res) => {
  const data = {
    username: "Figo",
    followers: 2137,
    follows: 3127,
    date: format.asString("dd[MM] - hh:mm:ss ", new Date()),
  };
  res.status(200).json(data);
});

app.get("/api/v1/facebook", (req, res) => {
  const data = {
    username: "Figo",
    followers: 2137,
    follows: 3127,
    date: format.asString("dd[MM] - hh:mm:ss ", new Date()),
  };
  res.status(200).json(data);
});

app.get("/api/v1/linkedin", (req, res) => {
  const data = {
    username: "Figo",
    followers: 2137,
    follows: 3127,
    date: format.asString("dd[MM] - hh:mm:ss ", new Date()),
  };
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
