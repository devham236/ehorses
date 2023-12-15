const express = require("express");
const cors = require("cors");
const horsesData = require("./Horses/horsesData");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/horses", (req, res) => {
  try {
    res.status(200).json(horsesData);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port ${process.env.PORT}`);
});
