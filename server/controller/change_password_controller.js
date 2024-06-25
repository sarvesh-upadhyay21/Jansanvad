const User1 = require("../models/userSchema");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");

// CHANGE PASSWORD
//@POST api/changePassword
//@access public

const changePass = asyncHandler(async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    console.log(`email is ${email}`);
    console.log(`old password is ${oldPassword}`);
    console.log(`new password is ${newPassword}`);
    // CHECK USER IS AVAILABLE OR NOT
    const user = await User1.findOne({ email });
    console.log(`email is ${user.email}`);
    console.log(`password is ${user.password}`);

    if (!user) {
      return res.status(400).json({
        message: "User Does Not Exists",
        status_code: 400,
        timestamp: Date.now(),
      });
    }
    //HASH NEW PASSWORD
    const hashedNewPass = await bcrypt.hash(newPassword, 10);
    console.log("Hashed New Password: ", hashedNewPass);
    // Compare the plain text password with the hashed password from the database
    const matchMypass = await bcrypt.hash(oldPassword, 10);
    console.log("Match pass: ", matchMypass);
    const passwordMatch = await bcrypt.compare(matchMypass, user.password);


    if (!passwordMatch) {
      return res.status(400).json({
        message: "Invalid Credentials",
        status_code: 400,
        timestamp: Date.now(),
      });
    }

    //HASH NEW PASSWORD
    //const hashedNewPass = await bcrypt.hash(newPassword, 10);
    //  console.log("Hashed New Password: ", hashedNewPass);
    // password change 
    user.password = newPassword;
    await user.save();

    res.status(200).json({
      message: "Password Changed Successfully",
      status_code: 200,
      timestamp: Date.now(),
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      status_code: 400,
      timestamp: Date.now(),
    });
  }
});

module.exports = { changePass };
