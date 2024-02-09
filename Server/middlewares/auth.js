const User= require("../models/User")
const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.auth = async (req,res,next) =>{
    try {
        const token = req.cookies.token || req.body.token || req.header("Authorisation").replace("Bearer ","");

        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token is missing',
            });
        }

        try {
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            req.User=decode;

        } catch (error) {
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }

        next()

    } catch (error) {
         return res.status(401).json({
            success:false,
            message:'Something went wrong while validating the token',
        });
    }
}

exports.isStudent = async (req,res,next) =>{
    try {
        if(req.User.accountType !== "Student"){
            return res.status(401).json({
                success:false,
                message:'This is a protected route for Students only',
            });
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'User cannot be verifed',
        });
    }
}

exports.isInstructor = async (req,res,next) =>{
    try {
        if(req.User.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:'This is a protected route for Instructors only',
            });
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'User cannot be verifed',
        });
    }
}

exports.isAdmin = async (req,res,next) =>{
    try {
        if(req.User.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:'This is a protected route for Admins only',
            });
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'User cannot be verifed',
        });
    }
}

