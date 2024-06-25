const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email is unique
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Sets the default value to the current date
  },
});

// Create the User model
const User1 = mongoose.model('User1', userSchema);

module.exports = User1;

