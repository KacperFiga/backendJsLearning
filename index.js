const express = require("express");
const format = require("date-format");
const YAML = require("yamljs");
//swagger docs related
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const PORT = process.env.PORT || 2137;

const courses = [
  {
    id: 11,
    name: "learn reactjs",
    price: 99,
  },
  {
    id: 12,
    name: "learn nodejs",
    price: 132,
  },
  {
    id: 13,
    name: "learn Vue",
    price: 2137,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/api/v1/lco", (req, res) => {
  res.send("<h1>Hello from lco docs</h1>");
});

app.get("/api/v1/lcoobject", (req, res) => {
  res.send({ name: "learn backend", id: 14, price: 2137 });
});

app.get("/api/v1/courses", (req, res) => {
  res.send(courses);
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

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
