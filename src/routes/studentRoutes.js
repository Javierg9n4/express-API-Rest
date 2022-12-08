const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const { studentParamsValidator } = require("../validators/studentValidator");

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.post("/", studentParamsValidator, studentController.createNewStudent);
router.put("/:id", studentParamsValidator, studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
