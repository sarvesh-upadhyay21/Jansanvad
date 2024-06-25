const mongoose = require('mongoose');

const inviteSchema = new mongoose.Schema({
  username: {
    type: String,
    //required: true,
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  mobile: {
    type: String,
    //required: true,
   
  },
  email: {
    type: String,
//required: true,
    
    trim: true,
  },
 invite: {
    type: String,
    //required: true,
    maxlength: 1000,
    trim: true,
  },
 
});

const inviteModel = mongoose.model('inviteModel', inviteSchema);

module.exports = inviteModel;
