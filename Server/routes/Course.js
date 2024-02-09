const express = require("express");
const { auth, isInstructor, isAdmin, isStudent } = require("../middlewares/auth");
const { createCourse, getAllCourses, getCourseDetails } = require("../controllers/course");
const { createSection, updateSection, deleteSection } = require("../controllers/section");
const { updateSubSection, deleteSubSection, createSubsection } = require("../controllers/subSection");
const { createCategory, showAllCategories, categoryPageDetails } = require("../controllers/category");
const { createRating, getAverageRating, getAllRating } = require("../controllers/ratingAndReviews");
const router = express.Router();



router.post("/createCourse",auth,isInstructor,createCourse)

router.post("/addSection",auth,isInstructor,createSection)

router.post("/updateSection",auth,isInstructor,updateSection)

router.post("/deleteSection",auth,isInstructor,deleteSection)

router.post("/updateSubSection",auth,isInstructor,updateSubSection)

router.post("/deleteSubSection",auth,isInstructor,deleteSubSection)

router.post("/addSubSection",auth,isInstructor,createSubsection)

router.get("/getAllCourses",getAllCourses)

router.post("/getCourseDetails",getCourseDetails)

router.post("/createCategory",auth,isAdmin,createCategory)

router.get("/showAllCategories",showAllCategories)

router.post("/getcategoryPageDetails",categoryPageDetails)

router.post("/createRating",auth,isStudent,createRating)

router.get("/getAverageRating",getAverageRating)

router.get("/getReviews",getAllRating)

module.exports = router;

