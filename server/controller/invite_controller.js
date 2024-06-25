const UserModel = require(`../models/userSchema`);
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const inviteModel = require("../models/inviteSchema");
// Suggest
//@POST api/suggest
//@access public

const inviteUser = asyncHandler(async (req, res) => {
  try {

    // Access properties directly from req.body
    const username = req.body.username;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const invite = req.body.suggest;



    console.log(`${username},  ${mobile}, ${email},  ${invite},`);
    // EMPTY VALIDATION PART
    if (!username || !mobile || !email || !invite) {
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
      const invite_details = await inviteModel.create({
        username,
        mobile,
        email,
        invite,
      });

      console.log(`suggestion registered ${invite_details}`.cyan.underline.bold);

      if (invite_details) {
        res.status(200).json({
          _id: invite_details.name,
          email: invite_details.email,
          mobile: invite_details.mobile,
          status_code: 200,
          message: "Invitation Sent Successfully",
          timestamp: Date.now(),
        });
      } else {
        res.status(400).json({
          status_code: "400",
          message: "Invitation Not Sent",
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

module.exports = { inviteUser };
