const teacherService = require("../services/teacherService");

const getAllTeachers = async (req, res) => {
  try {
    const allTeachers = await teacherService.getAllTeachers();

    res.status(200).json(allTeachers);

  } catch (error) {
    res.status(error?.status || 500).json({status: "FAILED", data: {error: error?.message || error}})
  }
};

const getTeacherById = async (req, res) => {
  const teacherId = req.params.id;
  console.log(teacherId);

  try {
    const teacherById = await teacherService.getTeacherById(teacherId);

    res.status(200).json(teacherById);

  } catch (error) {
    res.status(error?.status || 500).json({status: "FAILED", data: {error: error?.message || error}})
  }
};

const createNewTeacher = async (req, res) => {
  const teacherData = {
    dni: req.body.dni,
    name: req.body.name,
    last_name: req.body.last_name,
    date_of_birth: req.body.date_of_birth,
    UserId: req.body.UserId,
  };

  try {
    const newTeacher = await teacherService.createNewTeacher(teacherData);

    res.status(200).json(newTeacher);

  } catch (error) {
    res.status(error?.status || 500).json({status: "FAILED", data: {error: error?.message || error}})
  }
};

const updateTeacher = async (req, res) => {
  const teacherId = req.params.id;
  const teacherData = {
    dni: req.body.dni,
    name: req.body.name,
    last_name: req.body.last_name,
    date_of_birth: req.body.date_of_birth,
    UserId: req.body.UserId,
  };

  try {
    const updatedTeacher = await teacherService.updateTeacher(teacherId, teacherData)
    res.status(200).json({message:"Teacher updated succesfully", updatedTeacher: updatedTeacher})
  } catch (error) {
    res.status(error?.status || 500).json({status: "FAILED", data: {error: error?.message || error}})
  }
};

//TODO rework the response 
const deleteTeacher = async (req, res) => {
  const teacherId = req.params.id;

  try {
    const deletedTeacher = await teacherService.deleteTeacher(teacherId)
    res.status(200).json(deletedTeacher)
  } catch (error) {
    res.status(error?.status || 500).json({status: "FAILED", data: {error: error?.message || error}})
  }


};
module.exports = {
  getAllTeachers,
  getTeacherById,
  createNewTeacher,
  updateTeacher,
  deleteTeacher
}