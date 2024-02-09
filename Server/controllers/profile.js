const Profile = require("../models/Profile")
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.updateProfie = async (req,res)=>{

    try {
        const {dateOfBirth="",about="",contactNumber,gender}=req.body;
        const id = req.User.id

        console.log(id)

        const userDetails = await User.findById(id);
        const profile = await Profile.findById(userDetails.additionalDetails)

        profile.dateOfBirth = dateOfBirth;
        profile.about=about;
        profile.gender=gender;
        profile.contactNumber=contactNumber;

        await profile.save();

        return res.json({
			success: true,
			message: "Profile updated successfully",
			profile,
		});

    } catch (error) {
        console.log(error);
		return res.status(500).json({
			success: false,
			error: error.message,
		});
    }
}

exports.deleteAccount = async (req,res)=>{
    try {
        const id = req.User.id

        const user = await User.findById(id);

        if(!user){
            return res.status(404).json({
				success: false,
				message: "User not found",
			});
        }

        await Profile.findByIdAndDelete({_id:user.additionalDetails._id})
        
        await User.findByIdAndDelete({_id:id});

        res.status(200).json({
			success: true,
			message: "User deleted successfully",
		});

    } catch (error) {
        console.log(error);
		res
			.status(500)
			.json({ success: false, message: "User Cannot be deleted successfully" });
    }
}

exports.getAllUserDetails = async (req, res) => {
	try {

		const id = req.User.id;

		const userDetails = await User.findById(id)
			.populate("additionalDetails")
			.exec();
		console.log(userDetails);
		res.status(200).json({
			success: true,
			message: "User Data fetched successfully",
			data: userDetails,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

exports.getEnrolledCourses = async (req, res) => {
    try {
      const userId = req.User.id
      const userDetails = await User.findOne({
        _id: userId,
      })
        .populate("courses")
        .exec()
      if (!userDetails) {
        return res.status(400).json({
          success: false,
          message: `Could not find user with id: ${userDetails}`,
        })
      }
      return res.status(200).json({
        success: true,
        data: userDetails.courses,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};

exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      const userId = req.User.id
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log(image)
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};