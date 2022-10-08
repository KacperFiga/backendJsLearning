const express = require("express");

const app = express();

const PORT = process.env.PORT || 2137;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
