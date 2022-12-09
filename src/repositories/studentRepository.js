const db = require("../db/models");

const getAllStudents = async () => {
  try {
    const allStudents = await db.Students.findAll();
    if (!allStudents || allStudents.length === 0) {
      throw { status: 404, message: "No students found" };
    }
    return allStudents;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
};

const getStudentById = async (studentId) => {
  try {
    const studentById = await db.Students.findOne({ where: { id: studentId } });
    if (!studentById) {
      throw { status: 404, message: "Student not found for provided id" };
    }
    return studentById;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
};

const createNewStudent = async (studentData) => {
  try {
    const isAlreadyRegistered = await db.Students.findOne({
      where: { dni: studentData.dni },
    });

    if (isAlreadyRegistered) {
      throw {
        status: 400,
        message: "Student already registered with provided dni",
      };
    }

    const teacherExists = await db.Teachers.findOne({
      where: { id: studentData.TeacherId },
    });

    if (!teacherExists) {
      throw {
        status: 404,
        message: "Teacher not found with provided teacher id",
      };
    }

    const newStudent = await db.Students.create(studentData);
    return newStudent;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
};

const updateStudent = async (studentId, studentData) => {
  try {
    const isAlreadyRegistered = await db.Students.findOne({
      where: { id: studentId },
    });

    if (!isAlreadyRegistered) {
      throw { status: 404, message: "Student not found with provided id" };
    }

    if (isAlreadyRegistered.TeacherId !== studentData.TeacherId) {
      throw { status: 403, message: "Cannot update teacher id" };
    }

    await db.Students.update(studentData, { where: { id: studentId } });
    const updatedStudent = await db.Students.findOne({
      where: { id: studentId },
    });
    return updatedStudent;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
};

const deleteStudent = async (studentId) => {
  try {
    const isAlreadyRegistered = await db.Students.findOne({
      where: { id: studentId },
    });

    if (!isAlreadyRegistered) {
      throw { status: 404, message: "Student not found with provided id" };
    }

    await db.Students.destroy({ where: { id: studentId } });
    return { status: "success", message: "Student deleted successfully" };
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createNewStudent,
  updateStudent,
  deleteStudent,
};
