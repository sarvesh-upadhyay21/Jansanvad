const mongoose = require('mongoose');

const suggestSchema = new mongoose.Schema({
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
  suggest: {
    type: String,
    //required: true,
    maxlength: 1000,
    trim: true,
  },
 
});

const suggestModel = mongoose.model('suggestModel', suggestSchema);

module.exports = suggestModel;
