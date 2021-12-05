const express = require("express");
const app = express();

app.get("/wonseok", (req, res) => {
  res.send("hello wonseok");
});

app.get("/", (req, res) => {
  const name = process.env.NAME || "World";
  res.send(`Hello ${name}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
