const express = require("express");
const { login, signup, sendOtp, changePassword } = require("../controllers/auth");
const { auth } = require("../middlewares/auth");
const { resetPasswordToken, resetPassword } = require("../controllers/resetPassword");

const router = express.Router();


router.post("/login",login)

router.post("/signup",signup)

router.post("/sendotp",sendOtp)

router.post("/changepassword",auth,changePassword)

router.post("/reset-password-token",resetPasswordToken)

router.post("/reset-password",resetPassword)

module.exports = router;