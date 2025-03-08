import express from "express";
import connectDB from "../dbConnection/dbConnection.js";
import dotenv from 'dotenv';

// Load environment variables from the config/.env file
dotenv.config({ path: '../../config/.env' });  // Adjusted path

const app = express();

app.use(express.json());

const PORT = process.env.SERVER_PORT

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

connectDB();
