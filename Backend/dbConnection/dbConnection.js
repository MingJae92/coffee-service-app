import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from the config/.env file
dotenv.config({ path: '../../config/.env' });  // Adjusted path


// MongoDB connection URI from .env file
const mongoURI = process.env.DB_CONNECTION

// Function to connect to MongoDB using Mongoose
const connectDB = () => {
  mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('MongoDB connected!!!');
    })
    .catch(err => {
      console.error('MongoDB connection error:', err);
      process.exit(1);  // Exit the process if the connection fails
    });
};

// Export the function to be used in other files
export default connectDB;
