const UserModel = require(`../models/userSchema`);
const asyncHandler = require("express-async-handler");
const express = require("express");

// Get user details by ID
const userDetails = asyncHandler(async (req, res) => {
  const userId = req.params.userId; 

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error finding user:', error);
    return res.status(500).json({ message: 'Error finding user', error: error.message });
  }
});



module.exports = { userDetails};