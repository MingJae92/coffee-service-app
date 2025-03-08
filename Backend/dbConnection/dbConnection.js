import mongoose from 'mongoose';


// MongoDB connection URI from .env file
const mongoURI ="mongodb+srv://mingchiwong:Mingchiwong1992!@cluster0.65irf.mongodb.net/";

// Function to connect to MongoDB using Mongoose
const connectDB = () => {
  mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch(err => {
      console.error('MongoDB connection error:', err);
      process.exit(1);  // Exit the process if the connection fails
    });
};

// Export the function to be used in other files
export default connectDB;
