const mongoose=require("mongoose");
const { mailSender } = require("../utils/mailSender");
const otpTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:60*5,
    },
});

async function sendVerificationEmail(email,otp){
    try {
        const mailResponse=await mailSender(
            email,
            "Verfication Email",
            otpTemplate(otp),
        )
        console.log("Email sent successfully: ", mailResponse.response);
    } catch (error) {
        console.log("Error occurred while sending email: ", error);
		throw error;
    }
}

OTPSchema.pre("save",async function (next){
    await sendVerificationEmail(this.email,this.otp);
    next();
})

module.exports=mongoose.model("OTP",OTPSchema);