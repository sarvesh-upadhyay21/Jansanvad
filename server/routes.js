const express = require("express");
const {logoutUser} = require("./controller/logout_controller.js");
const {changePass} = require("./controller/change_password_controller.js");
const {suggestUser} = require("./controller/suggest_controller.js");
const {inviteUser} = require("./controller/invite_controller.js");
const {loginUser} = require("./controller/login_controller.js");
const {registerUser} = require("./controller/registerUser.js");
const { userDetails } = require("./controller/userDetails_controller.js"); 
const { mobileNoRegister, otpVerify } = require("./controller/userRegister_controller.js");

const router = express.Router();


//ROUTES 
router.post("/api/register", registerUser);
router.post("/api/changePass", changePass);
router.post("/api/invite", inviteUser);
router.post("/api/suggest", suggestUser);
router.post("/api/login", loginUser);
router.post("/api/userregister",mobileNoRegister);
router.post("/api/otpVerification",otpVerify)
router.post("/api/logout", logoutUser);
router.get('/api/user/:userId', userDetails);


module.exports = router;
