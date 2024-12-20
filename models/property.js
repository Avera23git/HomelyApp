const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema(
  {
    title: 
    { 
      type: String, 
      required: true 
    },

    location:
    { 
      type: String, 
      required: true 
    },

    price: 
    { 
      type: Number, 
      required: true 
    },

    description: 
    { 
      type: String 
    },

    images: 
    [
      String
    ],

    amenities: 
    {
      String
    },

    agent: 
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    },

  },
  {
    timestamps: true
  },
);

module.exports = mongoose.model('Property', PropertySchema);