const User  = require("../models/User")
const OTP  = require("../models/OTP")
const Profile  = require("../models/Profile")
const otpGenerator = require("otp-generator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { mailSender } = require("../utils/mailSender")
require("dotenv").config()

exports.sendOtp = async(req,res)=>{
    try {
        const {email}=req.body;

        const checkUser = await User.findOne({email});

        if(checkUser){
            return res.status(401).json({
				success: false,
				message: `User is Already Registered`,
			});
        }

        var otp = otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        })

        const result = await OTP.findOne({otp:otp});


        while(result){
            otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            })

            result = await OTP.findOne({otp:otp});
        }

        const otpPayload={email,otp};

        const otpBody = await OTP.create(otpPayload);

        console.log("Otp body : ",otpBody)

        res.status(200).json({
			success: true,
			message: `OTP Sent Successfully`,
			otp,
		});

    } catch (error) {
        console.log(error.message);
		return res.status(500).json({ success: false, error: error.message });
    }
}

exports.signup = async (req,res)=>{
    try {
        const {firstName,lastName,email,password,confirmPassword,accountType,contactNumber,otp} = req.body;
                firstName,lastName,email,password,confirmPassword,accountType,otp
        if(!firstName || !lastName || !email || !password || !confirmPassword || !otp){
            return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
        }

        if(password !== confirmPassword){
            return res.status(400).json({
				success: false,
				message:
					"Password and Confirm Password do not match. Please try again.",
			});
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
				success: false,
				message: "User already exists. Please sign in to continue.",
			});
        }

        const response  = await OTP.findOne({email}).sort({createdAt:-1}).limit(1);

        if(response.length === 0){
            return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
        }

        else if(otp !== response.otp){
            return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const profileDetails = await Profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            contactNumber:null,
        })

        const user =await User.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password:hashedPassword,
            accountType,
            additionalDetails:profileDetails._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        })

        return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully",
		});

    } catch (error) {
        console.error(error);
		return res.status(500).json({
			success: false,
			message: "User cannot be registered. Please try again.",
		});
    }
}

exports.login = async (req,res) =>{
    try {
        const {email,password}=req.body;

        if(!email,!password){
            return res.status(400).json({
				success: false,
				message: `Please Fill up All the Required Fields`,
			});
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
				success: false,
				message: `User is not Registered with Us Please SignUp to Continue`,
			});
        }

        if(await bcrypt.compare(password,user.password)){
            const token = jwt.sign({
                email:user.email,
                id:user._id,
                accountType:user.accountType
            },process.env.JWT_SECRET,{expiresIn:"2d"})

            
            user.token=token;

            user.password=undefined;

            const options = {
                expires:new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }

            res.cookie("token",token,options).status(200).json({
				success: true,
				token,
				user,
				message: `User Login Success`,
			});
        }

        else{
            return res.status(401).json({
				success: false,
				message: `Password is incorrect`,
			});
        }

    } catch (error) {
        console.error(error);
		return res.status(500).json({
			success: false,
			message: `Login Failure Please Try Again`,
		});
    }
}

exports.changePassword = async (req,res) => {
    try {
        
        const userDetails = await User.findById(req.user.id);

        const {oldPassword,newPassword,confirmNewPassword} = req.body;

        const isPasswordMatch = await bcrypt.compare(oldPassword,userDetails.password);

        if (!isPasswordMatch){
            return res
				.status(401)
				.json({ success: false, message: "The password is incorrect" });
        }

        if (newPassword !== confirmNewPassword){
            return res.status(400).json({
				success: false,
				message: "The password and confirm password does not match",
			});
        }

        const encryptedPassword = await bcrypt.hash(newPassword,10);

        const updatedUserDetails = await User.findByIdAndUpdate(
            req.user.id,
            {password:encryptedPassword},
            {new:true},
        )

        try {
            
            const emailResponse = await mailSender(
                updatedUserDetails.email,
				passwordUpdated(
					updatedUserDetails.email,
					`Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
				)
            )

            console.log("Email sent successfully:", emailResponse.response);

        } catch (error) {
            
            console.error("Error occurred while sending email:", error);
			return res.status(500).json({
				success: false,
				message: "Error occurred while sending email",
				error: error.message,
			});

        }

        return res
			.status(200)
			.json({ success: true, message: "Password updated successfully" });


    } catch (error) {
        
        console.error("Error occurred while updating password:", error);
		return res.status(500).json({
			success: false,
			message: "Error occurred while updating password",
			error: error.message,
		});

    }
}
