const { default: mongoose } = require("mongoose");
const Course = require("../models/Courses")
const User = require("../models/User")
const mailSender = require("../utils/mailSender");
const { instance } = require("../config/razorpay");

exports.capturePayment = async (req,res) => {
    const {course_id}=req.body;
    const userId = req.User.id;

    if(!course_id){
        return res.json({
            success:false,
            message:'Please provide valid course ID',
        })
    }

    let course

    try {
        course = await Course.findById(course_id);
        if(!course){
            return res.json({
                success:false,
                message:'Could not find the course',
            });
        }

        const uid = new mongoose.Types.ObjectId(userId);

        if(course.studentsEnrolled.includes(uid)){
            return res.status(200).json({
                success:false,
                message:'Student is already enrolled',
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }

    const amount = course.price;
    const currency = "INR";

    const options= {
        amount : amount *100,
        currency,
        receipt: Math.random(Date.now()).toString(),
        notes:{
            courseId:course_id,
            userId,
        }
    }

    try {
        const paymentResponse = await instance.orders.create(options);

        return res.status(200).json({
            success:true,
            courseName:course.courseName,
            courseDescription:course.courseDescription,
            thumbnail: course.thumbnail,
            orderId: paymentResponse.id,
            currency:paymentResponse.currency,
            amount:paymentResponse.amount,
        });

    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Could not initiate order",
        });

    }


}

exports.verifySignature = async (req,res)  => {
    const webHookSecret = "12345678";

    const signature = req.headers["x-razorpay-signature"]

    const shasum  = crypto.createHmac("sha256",webHookSecret)
    shasum.update(JSON.stringify(req.body));

    const digest = shasum.digest("hex");

    if(signature === digest ){
        const {courseId,userId} = req.body.payload.payment.entity.notes;

        try {
            const enrolledCourse = await Course.findOneAndUpdate({_id:courseId},{
                $push:{
                    studentsEnrolled:userId,
                }
            },{new:true})

            console.log(enrolledCourse)

            const enrolledStudent = await User.findOneAndUpdate({_id:userId},{
                $push:{
                    courses:courseId,
                }
            },{new:true})

            console.log(enrolledStudent);

            const mailResponse = await mailSender(
                enrolledStudent.email,
                "Congratulations from StudyNotaion",
                "Congratulations, you are onboarded into new StudyNotion Course",
            )

            console.log(mailResponse);

            return res.status(200).json({
                success:true,
                message:"Signature Verified and Course Added",
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success:false,
                message:error.message,
            });
        }
    }
    else{
        return res.status(400).json({
            success:false,
            message:'Invalid request',
        });
    }
}