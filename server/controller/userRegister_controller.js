const crypto = require('crypto');
const asyncHandler = require('express-async-handler');
const twilio = require('twilio');
const UserRegisterModel = require('../models/userRegisterSchema');

const twilio_phone = process.env.TWILIO_PHOME;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = new twilio(accountSid, authToken);

module.exports.mobileNoRegister = asyncHandler(async (req, res) => {
    try {
        const { mobile } = req.body;
        if (!mobile) {
            return res.status(400).json({ error: "Mobile number is mandatory" });
        }
        const formattedMobile = `+${mobile.replace(/[^0-9]/g, '')}`;

        const otp = crypto.randomInt(100000, 999999);
        const otpCreationTime = new Date();

        const userRegister = await UserRegisterModel.create({
            mobile: formattedMobile,
            otp,
            otpCreationTime
        });

        if (!userRegister) {
            return res.status(400).json({
                status: false,
                message: "Mobile number not registered!",
                Response: {}
            });
        }

        await twilioClient.messages.create({
            body: `Your OTP is: ${otp}`,
            to: formattedMobile,
            from: '+12085563829' 
        });

        return res.status(201).json({
            status: true,
            message: "Mobile number registered, OTP sent successfully!",
            Response: userRegister
        });
    } catch (error) {
        console.error('Error:', error); 
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
});


module.exports.otpVerify = asyncHandler(async (req, res) => {
    try {
        const { mobile, otp } = req.body;
        if (!mobile || !otp) {
            return res.status(400).json({
                status: false,
                message: "All fields are required",
                Response: {}
            });
        }

        const user = await UserRegisterModel.findOne({ mobile, otp });
        if (!user) {
            return res.status(400).json({
                status: false,
                message: "Invalid OTP or mobile number",
                Response: {}
            });
        }


        const otpCreationTime = user.otpCreationTime;
        const currentTime = new Date();
        const timeDifference = (currentTime - otpCreationTime) / 1000 / 60;

        if (timeDifference > 5) {
            await UserRegisterModel.updateOne({ mobile }, { $unset: { otp: "", otpCreationTime: "" } });
            return res.status(400).json({
                status: false,
                message: "OTP expired",
                Response: {}
            });
        }
        await UserRegisterModel.updateOne({ mobile }, { $unset: { otp: "", otpCreationTime: "" } });
        return res.status(200).json({
            status: true,
            message: "OTP verified successfully!",
            Response: {}
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


