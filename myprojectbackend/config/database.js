const mongoose = require('mongoose');

// MongoDB connection
const mongoURI = 'mongodb+srv://sankalpshedge33:1234@cluster0.6mvb0jn.mongodb.net/'; // Replace with your actual MongoDB connection string

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
