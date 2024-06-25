const UserModel = require(`../models/userSchema`);
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
var redis = require('redis');
var JWTR = require('jwt-redis').default;
// Login  user
//@POST api/login
//@access public
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  console.log(`email is ${email}`);
  console.log(`old password is ${password}`);


  if (!email || !password) {
    res.status(400).json({
      status_code: 400,
      timestamp: Date.now(),
      token: null,
      securityKey: null,
      message: "All Fields Are Mandatory",
    });
  } //if ends

  const user = await UserModel.findOne({ email });
  console.log(`email is ${user.email}`);
  console.log(`db password is ${user.password}`);
  //COMPARE HASH PASSWORD WITH PASSWORD
  if (user && (await bcrypt.compare(password, user.password))) {
    const payload = {
      email: user.email,
      id: user.id,
    }
    console.log(payload)

    const accessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );
    console.log(`acces token ${accessToken}`);

    // Set the JWT token in a cookie
    res.cookie('token_key', accessToken, { httpOnly: true });
    res.status(200).json({
      status_code: 200,
      userId: user.id,
      timestamp: Date.now(),
      token: accessToken,
      message: "Login Successful",
    });
  } //if ends
  else {
    res.status(400).json({
      status_code: 400,
      timestamp: Date.now(),
      message: "Wrong Email & Password ",
    });
  } //else ends
  next();
  // if ends
}); //function ends login
module.exports = { loginUser };