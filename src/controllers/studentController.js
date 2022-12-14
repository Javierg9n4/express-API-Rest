const studentService = require("../services/studentService");

const getAllStudents = async (req, res) => {
  try {
    const allStudents = await studentService.getAllStudents();
    res
      .status(200)
      .json({ message: "All students found", allStudents: allStudents });
  } catch (error) {
    res.status(error?.status || 500).json({ error: error?.message || error });
  }
};

const getStudentById = async (req, res) => {
  const studentId = req.params.id;

  try {
    const studentById = await studentService.getStudentById(studentId);
    res
      .status(200)
      .json({ message: "Student by id found", studentById: studentById });
  } catch (error) {
    res.status(error?.status || 500).json({ error: error?.message || error });
  }
};

const createNewStudent = async (req, res) => {
  const studentData = {
    dni: req.body.dni,
    name: req.body.name,
    last_name: req.body.last_name,
    date_of_birth: req.body.date_of_birth,
    TeacherId: req.body.TeacherId,
  };

  try {
    const newStudent = await studentService.createNewStudent(studentData);
    res
      .status(200)
      .json({ message: "New student created", newStudent: newStudent });
  } catch (error) {
    res.status(error?.status || 500).json({ error: error?.message || error });
  }
};

const updateStudent = async (req, res) => {
  const studentId = req.params.id;
  const studentData = {
    dni: req.body.dni,
    name: req.body.name,
    last_name: req.body.last_name,
    date_of_birth: req.body.date_of_birth,
    TeacherId: req.body.TeacherId,
  };

  try {
    const updatedStudent = await studentService.updateStudent(
      studentId,
      studentData
    );
    res.status(200).json({
      message: "Student updated succesfully",
      updatedStudent: updatedStudent,
    });
  } catch (error) {
    res.status(error?.status || 500).json({ error: error?.message || error });
  }
};

const deleteStudent = async (req, res) => {
  const studentId = req.params.id;

  try {
    const deletedStudent = await studentService.deleteStudent(studentId);
    res.status(200).json(deletedStudent);
  } catch (error) {
    res.status(error?.status || 500).json({ error: error?.message || error });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createNewStudent,
  updateStudent,
  deleteStudent,
};
