const db = require("../db/models");

const getAllStudents = async () => {
  try {
    const allStudents = await db.Students.findAll();

    return allStudents;
  } catch (error) {
    throw { status: 500, message: "Database error while getting all students" };
  }
};

const getStudentById = async (studentId) => {
  try {
    const studentById = await db.Students.findOne({ where: { id: studentId } });

    return studentById;
  } catch (error) {
    throw {
      status: 500,
      message: "Database error while getting student by id",
    };
  }
};

const createNewStudent = async (studentData) => {
  try {
    const newStudent = await db.Students.create(studentData);
    return newStudent;
  } catch (error) {
    throw {
      status: 500,
      message: "Database error while creating a new student",
    };
  }
};

const updateStudent = async (studentId, studentData) => {
  try {
    await db.Students.update(studentData, { where: { id: studentId } });
    const updatedStudent = await db.Students.findOne({
      where: { id: studentId },
    });
    return updatedStudent;
  } catch (error) {
    throw { status: 500, message: "Database error while updating student" };
  }
};

const deleteStudent = async (studentId) => {
  try {
    await db.Students.destroy({ where: { id: studentId } });
    return { status: "success", message: "Student deleted successfully" };
  } catch (error) {
    throw { status: 500, message: "Database error while deleting student" };
  }
};

const getStudentByTeacherId = async (teacherId) => {
  try {
    const studentByTeacherId = await db.Students.findOne({
      where: { TeacherId: teacherId },
    });
    return studentByTeacherId;
  } catch (error) {
    throw {
      status: 500,
      message: "Database error while getting student by TeacherId",
    };
  }
};

const getStudentsByTeacherIdOrdered = async (teacherId) => {
  try {
    const associatedStudents = await db.Students.findAll({
      where: { TeacherId: teacherId },
      order: [["date_of_birth", "DESC"]],
    });
    return associatedStudents;
  } catch (error) {
    throw {
      status: 500,
      message: "Database error while getting all sttudents by TeacherId: ",
    };
  }
};

const getStudentByDni = async (studentData) => {
  try {
    const studentByDni = await db.Students.findOne({
      where: { dni: studentData.dni },
    });
    return studentByDni;
  } catch (error) {
    throw {
      status: 500,
      message: "Database error while getting student by dni",
    };
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createNewStudent,
  updateStudent,
  deleteStudent,
  getStudentByTeacherId,
  getStudentsByTeacherIdOrdered,
  getStudentByDni,
};
