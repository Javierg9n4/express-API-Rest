const studentRepository = require("../repositories/studentRepository");
const teacherRepository = require("../repositories/teacherRepository");

const getAllStudents = async () => {
  const allStudents = await studentRepository.getAllStudents();

  if (!allStudents || allStudents.length === 0) {
    throw { status: 404, message: "No students found" };
  }

  return allStudents;
};

const getStudentById = async (studentId) => {
  const studentById = await studentRepository.getStudentById(studentId);

  if (!studentById) {
    throw { status: 404, message: "Student not found for provided id" };
  }

  return studentById;
};

const createNewStudent = async (studentData) => {
  const studentByDni = await studentRepository.getStudentByDni(studentData);

  if (studentByDni) {
    throw {
      status: 403,
      message: "Student already registered with provided dni",
    };
  }

  const teacherExists = await teacherRepository.getTeacherById(
    studentData.TeacherId
  );

  if (!teacherExists) {
    throw {
      status: 404,
      message: "Teacher not found with provided teacher id",
    };
  }

  const newStudent = await studentRepository.createNewStudent(studentData);
  return newStudent;
};

const updateStudent = async (studentId, studentData) => {
  const isAlreadyRegistered = await studentRepository.getStudentById(studentId);

  if (!isAlreadyRegistered) {
    throw { status: 404, message: "Student not found with provided id" };
  }

  if (isAlreadyRegistered.TeacherId !== studentData.TeacherId) {
    throw { status: 403, message: "Cannot update teacher id" };
  }

  const updatedStudent = await studentRepository.updateStudent(
    studentId,
    studentData
  );
  return updatedStudent;
};

const deleteStudent = async (studentId) => {
  const isAlreadyRegistered = await studentRepository.getStudentById(studentId);

  if (!isAlreadyRegistered) {
    throw { status: 404, message: "Student not found with provided id" };
  }

  const deletedStudent = await studentRepository.deleteStudent(studentId);
  return deletedStudent;
};

module.exports = {
  getAllStudents,
  getStudentById,
  createNewStudent,
  updateStudent,
  deleteStudent,
};
