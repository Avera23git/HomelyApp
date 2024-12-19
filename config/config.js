const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: 'homelyapp'
    }
    );
    console.log("MongoDB connected...");
  } catch (err) {
    console.error('error connecting to MongoDb', err.message );
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;