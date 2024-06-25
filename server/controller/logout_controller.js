const UserModel = require(`../models/userSchema`);
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
var redis = require('redis');
var JWTR =  require('jwt-redis').default;

// logout  user
//@POST api/logout
//@access public

const logoutUser = asyncHandler(async (req, res,next) => {
    const { email, token } = req.body;
  
    console.log(`email is ${email}`);
    console.log(`token is ${token}`);
  
     
    if (!email || !token) {
      res.status(400).json({
        status_code: 400,
        timestamp: Date.now(),
        message: "All Fields Are Mandatory",
      });
    } //if ends
  
    const user = await UserModel.findOne({ email });
    console.log(`email is ${user.email}`);
    console.log(`db password is ${user.password}`);
    //COMPARE HASH PASSWORD WITH PASSWORD
    if (!user) {
      
     
      res.status(400).json({
        status_code: 400,
        timestamp: Date.now(),
        message: "User Not found",
      });
    } //if ends
    else {
        // Clear the JWT cookie
  res.clearCookie('token_key');

      res.status(200).json({
        status_code: 200,
        timestamp: Date.now(),
        message: "Logout Success ",
      });
    } //else ends
  next();
    // if ends
  }); //function ends login
  module.exports = { logoutUser};