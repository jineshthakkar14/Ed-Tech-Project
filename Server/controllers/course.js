const User  = require("../models/User")
const Course  = require("../models/Courses")
const Tag = require("../models/tags")
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const Category = require("../models/Category");


exports.createCourse = async (req,res) =>{
    try {
        const userID  = req.User.id;
        
        let {courseName,courseDescription,whatYouWillLearn,price,tag,category}=req.body;

        const thumbnail = req.files.thumbnailImage;

        if(!courseName || !courseDescription || !whatYouWillLearn || !price || !tag || !thumbnail){
            return res.status(400).json({
				success: false,
				message: "All Fields are Mandatory",
			});
        }

        const instructorDetails = await User.findById(userID,{
            accountType:"Instructor"
        })

        if(!instructorDetails){
            return res.status(404).json({
				success: false,
				message: "Instructor Details Not Found",
			});
        }

        const tagDetails = await Category.findById(category);

        if(!tagDetails){
            return res.status(404).json({
				success: false,
				message: "Category Details Not Found",
			});
        }

        const thumbnailImage = await uploadImageToCloudinary(
			thumbnail,
			process.env.FOLDER_NAME
		);

        const newCourse = await Course.create({
			courseName,
			courseDescription,
			instructor: instructorDetails._id,
			whatYouWillLearn: whatYouWillLearn,
			price,
			category: tagDetails._id,
            tag,
			thumbnail: thumbnailImage.secure_url,
		});

        await User.findByIdAndUpdate(
            {
                _id:instructorDetails._id,
            },
            {
                $push:{
                    courses:newCourse._id,
                }
            }
        )

        await Category.findByIdAndUpdate(
            {
                _id:tagDetails._id,
            },
            {
                $push:{
                    courses:newCourse._id,
                }
            }
        )

        res.status(200).json({
			success: true,
			data: newCourse,
			message: "Course Created Successfully",
		});

    } catch (error) {
        console.error(error);
		res.status(500).json({
			success: false,
			message: "Failed to create course",
			error: error.message,
		});
    }
}


exports.getAllCourses = async (req,res) => {
    try {
        const allCourses=await Course.find({},{
            courseName: true,
            price: true,
            thumbnail: true,
            instructor: true,
            ratingAndReviews: true,
            studentsEnroled: true,
        });

        return res.status(200).json({
			success: true,
			data: allCourses,
		});

    } catch (error) {
        console.log(error);
		return res.status(404).json({
			success: false,
			message: `Can't Fetch Course Data`,
			error: error.message,
		});
    }
}

exports.getCourseDetails = async (req, res) => {
    try {

            const {courseId} = req.body;

            const courseDetails = await Course.find(
                                        {_id:courseId})
                                        .populate(
                                            {
                                                path:"instructor",
                                                populate:{
                                                    path:"additionalDetails",
                                                },
                                            }
                                        )
                                        .populate("category")
                                        .populate({
                                            path:"courseContent",
                                            populate:{
                                                path:"subSection",
                                            },
                                        })
                                        .exec();

                if(!courseDetails) {
                    return res.status(400).json({
                        success:false,
                        message:`Could not find the course with ${courseId}`,
                    });
                }

                return res.status(200).json({
                    success:true,
                    message:"Course Details fetched successfully",
                    data:courseDetails,
                })

    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}
