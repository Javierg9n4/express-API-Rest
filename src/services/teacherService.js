const teacherRepository = require("../repositories/teacherRepository");

const getAllTeachers = async () => {
  try {
    const allTeachers = await teacherRepository.getAllTeachers();
    return allTeachers;
  } catch (error) {
    throw error;
  }
};

const getTeacherById = async (teacherId) => {
  try {
    const teacherById = await teacherRepository.getTeacherById(teacherId);
    return teacherById;
  } catch (error) {
    throw error;
  }
};

const createNewTeacher = async (teacherData) => {
  try {
    const newTeacher = await teacherRepository.createNewTeacher(teacherData);
    return newTeacher;
  } catch (error) {
    throw error;
  }
};

const updateTeacher = async (teacherId, teacherData) => {
  try {
    const updatedTeacher = await teacherRepository.updateTeacher(
      teacherId,
      teacherData
    );
    return updatedTeacher;
  } catch (error) {
    throw error;
  }
};

const deleteTeacher = async (teacherId) => {
  try {
    const deletedTeacher = await teacherRepository.deleteTeacher(teacherId);
    return deletedTeacher;
  } catch (error) {
    throw error;
  }
};

const checkIfAssociatedUserIsActive = async (teacherId) => {
  try {
    const associatedStudents =
      await teacherRepository.checkIfAssociatedUserIsActive(teacherId);
    return associatedStudents;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTeachers,
  getTeacherById,
  createNewTeacher,
  updateTeacher,
  deleteTeacher,
  checkIfAssociatedUserIsActive,
};
