const UserModel = require(`../models/userSchema`);
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
// Register a  user
//@POST api/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  try {
    // Access properties directly from req.body
    const username = req.body.username;
    const dob = req.body.dob;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const address = req.body.address;
    const password = req.body.password;


    console.log(`${username},  ${dob},  ${mobile}, ${email}, ${address}, ${password},`);
    // EMPTY VALIDATION PART
    if (!username || !dob || !mobile || !email || !address || !password) {
      res.status(400).json({ error: "All Fields Are Mandatory" });
    }

    //CHECK USER IS AVAILABLE OR NOT
    const userAvailable = await UserModel.findOne({ mobile: mobile });

    if (userAvailable) {
      res.status(400).json({
        error: "User Exists",
        status_code: 400,
        timestamp: Date.now(),
      });



    } // if ends
    else {

      //HASH PASSWORD
      const hashedPass = await bcrypt.hash(password, 10);
      console.log("Hashed Password: ", hashedPass);
      const user = await UserModel.create({
        username,
        dob,
        mobile,
        email,
        address,
        password: hashedPass,

      });

      console.log(`user created success ${user}`.cyan.underline.bold);

      if (user) {
        res.status(200).json({
          _id: user.name,
          email: user.email,
          status_code: 200,
          message: "Register Successfully",
          timestamp: Date.now(),
        });
      } else {
        res.status(400).json({
          status_code: "400",
          message: "Not Registered",
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
module.exports = { registerUser };
