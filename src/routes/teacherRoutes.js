const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");
const { teacherParamsValidator } = require("../validators/teacherValidator");

router.get("/", teacherController.getAllTeachers);
router.get("/:id", teacherController.getTeacherById);
router.post("/", teacherParamsValidator, teacherController.createNewTeacher);
router.put("/:id", teacherParamsValidator, teacherController.updateTeacher);
router.delete("/:id", teacherController.deleteTeacher);
router.get("/:teacher_id/students", teacherController.checkIfAssociatedUserAndReturnStudents);

module.exports = router;
