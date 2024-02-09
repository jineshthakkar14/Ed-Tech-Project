const express = require("express");
const { auth } = require("../middlewares/auth");
const { deleteAccount, updateProfie, getAllUserDetails, getEnrolledCourses, updateDisplayPicture } = require("../controllers/profile");
const router = express.Router();


router.delete("/deleteProfile",auth,deleteAccount)

router.put("/updateProfile",auth,updateProfie)

router.get("/getUserDetails",auth,getAllUserDetails)

router.get("/getEnrolledCourses",auth,getEnrolledCourses)

router.put("/updateDisplayPicture",auth,updateDisplayPicture)

module.exports = router;