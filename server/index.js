require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
let cors = require("cors");

const app = express();
const port = process.env.PORT || 3005;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dataOksigen = require("./app/routes/bantucarioksigen");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/dataoksigen", dataOksigen);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
