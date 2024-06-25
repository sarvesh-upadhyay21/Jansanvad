const suggestModel = require(`../models/suggestSchema`);
const UserModel = require(`../models/userSchema`);
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
// Suggest
//@POST api/suggest
//@access public

const suggestUser = asyncHandler(async (req, res) => {
  try {
    // Access properties directly from req.body
    const username = req.body.username;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const suggest = req.body.suggest;

    console.log(`${username},  ${mobile}, ${email},  ${suggest},`);
    // EMPTY VALIDATION PART
    if (!username || !mobile || !email || !suggest) {
      res.status(400).json({ error: "All Fields Are Mandatory" });
    }

    //CHECK USER IS AVAILABLE OR NOT
    const userAvailable = await UserModel.findOne({ mobile: mobile });
    console.log("chale ga kya?", userAvailable);

    if (!userAvailable) {
      res.status(400).json({
        error: "User Not Exists",
        status_code: 400,
        timestamp: Date.now(),
      });
    } // if ends
    else {
      const suggest_details = await suggestModel.create({
        username,
        mobile,
        email,
        suggest,
      });

      console.log(`suggestion registered ${suggest_details}`.cyan.underline.bold);

      if (suggest_details) {
        res.status(200).json({
          _id: suggest_details.name,
          email: suggest_details.email,
          mobile: suggest_details.mobile,
          status_code: 200,
          message: "Suggestion Register Successfully",
          timestamp: Date.now(),
        });
      } else {
        res.status(400).json({
          status_code: "400",
          message: "SuggestionNot Registered",
          timestamp: Date.now(),
        });
      }


    }
    console.log("API working");
    res.status(200).json({ message: "API working" });


  } catch (error) {
    console.log(`${error}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { suggestUser };
