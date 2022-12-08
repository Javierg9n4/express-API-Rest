const studentRepository = require("../repositories/studentRepository");

const getAllStudents = async () => {
  try {
    const allStudents = await studentRepository.getAllStudents();
    return allStudents;
  } catch (error) {
    throw error;
  }
};

const getStudentById = async (studentId) => {
  try {
    const studentById = await studentRepository.getStudentById(studentId);
    return studentById;
  } catch (error) {
    throw error;
  }
};

const createNewStudent = async (studentData) => {
  try {
    const newStudent = await studentRepository.createNewStudent(studentData);
    return newStudent;
  } catch (error) {
    throw error;
  }
};

const updateStudent = async (studentId, studentData) => {
  try {
    const updatedStudent = await studentRepository.updateStudent(
      studentId,
      studentData
    );
    return updatedStudent;
  } catch (error) {
    throw error;
  }
};

const deleteStudent = async (studentId) => {
  try {
    const deletedStudent = await studentRepository.deleteStudent(studentId);
    return deletedStudent;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createNewStudent,
  updateStudent,
  deleteStudent,
};
