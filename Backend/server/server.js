import express from 'express';
import connectDB from "../dbConnection/dbConnection.js"
// import dotenv from 'dotenv';

// // Load environment variables from the config/.env file
// dotenv.config({ path: '../../config/.env' });  // Adjusted path

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Fallback to default port 5000 if SERVER_PORT is not set
const PORT = 8000;

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');  // Send response to the client
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

connectDB()
