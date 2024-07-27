const mongoose = require('mongoose');

const userRegisterSchema = new mongoose.Schema({
 
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  otp:{
    type:Number,
    // required: true
  }
});

const UserRegisterModel = mongoose.model('UserRegisterModel', userRegisterSchema);

module.exports = UserRegisterModel;
