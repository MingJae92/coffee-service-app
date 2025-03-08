import express from "express";
import connectDB from "../dbConnection/dbConnection.js";

const app = express();

app.use(express.json());

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

connectDB();
