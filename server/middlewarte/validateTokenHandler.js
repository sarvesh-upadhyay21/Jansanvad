const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const validatetoken = asyncHandler(async (req, res, next) => {

  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: "Token is missing" })
  }
  const token = authHeader.split(" ")[1];
  console.log('authHeader :', authHeader);
  console.log('token :', token);
  try {
    // Verify the JWT token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {

      if (err) {
        res.status(401).json({ message: "User is not authrorized" });

      }
      console.log("decoded", decoded)
      req.user = decoded;
      next();

    });



    // // If the token is valid, decodedToken will contain the token payload
    // console.log('Token verified successfully:', decodedToken);
    // res.status(200).json({
    //     status_code: 200,
    //     timestamp: Date.now(),

    //     message: "Token verifed",
    //   });

  } catch (error) {
    // If the token is invalid or has expired, an error will be thrown
    console.error('Token verification failed:', error.message);
  }
}) // function ends

// const validatetoken = asyncHandler(async (req, res, next) => {
// console.log("asd aaya")
//     let token;
//     let authHeader = req.header.Authorization || req.header.authorization;
//     console.log(`ath header ${req.header}`);
//     console.log(`ath header ${authHeader}`);
//     if (authHeader && authHeader.startsWith("Bearer")) {
//         token = authHeader.split(" ")[1];
//         console.log(`token kya hai ${token}`)
//         //VERIFY TOKEN
//         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//             if (err) {
//                 res.status(401).json({

//                     error: "User Is Not Authorized",
//                     status_code: 400,
//                     token: null,
//                     securityKey: null,
//                     timestamp: Date.now(),
//                 });
//                 console.log(`Decoded is ${decoded}`);
//                 req.user=decoded.user;
//                 next();
//             }

//             if(!token)
//             {
//                 res.status(401).json({

//                     error: "Token is missing",
//                     status_code: 400,
//                     token: null,
//                     securityKey: null,
//                     timestamp: Date.now(),
//                 });
//             } //token is null

//         }) //VERIFY FUNCTION
//     } //IF ENDS

// }) // function ends

module.exports = validatetoken;