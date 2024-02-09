const { default: mongoose } = require("mongoose");
const Courses = require("../models/Courses");
const RatingsAndReviews = require("../models/RatingsAndReviews");

exports.createRating = async (req,res) => {

    try {
        
        const userID = req.body.userID;

        const {rating,review,courseID} = req.body;

        const courseDetails = await Courses.findOne(
            {_id:courseID,
            studentsEnrolled:{$elemMatch:{$eq:userID}},
            },
        );

        if(!courseDetails){
            return res.status(404).json({
                success:false,
                message:'Student is not enrolled in the course',
            });
        }

        const alreadyReviewed = await RatingsAndReviews.findOne(
            {user:userID,
            course:courseID,}
        )

        if(alreadyReviewed){
            return res.status(403).json({
                success:false,
                message:'Course is already reviewed by the user',
            });
        }

        const ratingReview = await RatingsAndReviews.create({
            user:userID,
            rating,
            review,
            course:courseID
        })

        const updatedCourseDetails = await Courses.findByIdAndUpdate(courseID,
            {
                $push:{
                    ratingAndReviews:ratingReview,
                }
            },
            {new:true}
        );

        console.log(updatedCourseDetails);

        return res.status(200).json({
            success:true,
            message:"Rating and Review created Successfully",
            ratingReview,
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }

}


exports.getAverageRating = async (req,res) => {
    try {
        const courseID = req.body.courseID;

        const result = await RatingsAndReviews.aggregate([
            {
                $match:{
                    course: new mongoose.Types.ObjectId(courseID),
                }
            },
            {
                $group:{
                    _id:null,
                    averageRating: {$avg:"$rating"}
                }
            }
        ]  
        )

        if(result.length>0){
            return res.status(200).json({
                success:true,
                averageRating: result[0].averageRating,
            })
        }

        return res.status(200).json({
            success:true,
            message:'Average Rating is 0, no ratings given till now',
            averageRating:0,
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.getAllRating = async (req, res) => {
    try{
            const allReviews = await RatingsAndReviews.find({})
                                    .sort({rating: "desc"})
                                    .populate({
                                        path:"user",
                                        select:"firstName lastName email image",
                                    })
                                    .populate({
                                        path:"course",
                                        select: "courseName",
                                    })
                                    .exec();
            return res.status(200).json({
                success:true,
                message:"All reviews fetched successfully",
                data:allReviews,
            });
    }   
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    } 
}