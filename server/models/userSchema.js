const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    //required: true,
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  dob: {
    type: String,
//required: true,
  },
  mobile: {
    type: String,
    //required: true,
    unique: true,
  },
  email: {
    type: String,
//required: true,
    unique: true,
    trim: true,
  },
  address: {
    type: String,
    //required: true,
    maxlength: 200,
    trim: true,
  },
  password: {
    type: String,
    //required: true,
    maxlength: 200,
    trim: true,
  },
});

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;
