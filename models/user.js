const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
{
  name: 
  { 
    type: String, 
    required: true 
  },

  email: 
  { 
    type: String, 
    required: true, 
    unique: true 
  },

  phone_number: 
  { 
    type: Number, 
    required: true 
  },

  address: 
  { 
    type: String, 
    required: true 
  },

  password: 
  { 
    type: String, 
    required: true 
  },

  role: 
  { 
    type: String, 
    enum: ['user', 'agent', 'admin'], 
    default: 'user' 
  },
},

  {
      timestamps: true,
  },
);

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', UserSchema);