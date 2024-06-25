const User1 = require("../models/userSchema");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");

const viewData = asyncHandler(async (req, res) => {

    try
    {
        const users = await User1.find({}, 'email name date id');
        const emailIds = users.map(user => user.email);
        const mobiles = users.map(user => user.mobile);
        const addresses = users.map(user => user.address);
        const names = users.map(user => user.name);
        res.json({    
            emailIds,
            mobiles,
            addresses,
            names        
        });

    } //try ends
    catch (error) {
        res.status(400).json({
          message: error.message,
          status_code: 400,
          timestamp: Date.now(),
        });
      }


}); //


module.exports = { viewData };
