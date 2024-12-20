const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // to ensure the URI is correctly referenced from the environment variables
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'homelyapp'
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error('error connecting to MongoDb', err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
