const db = require("../db/models");

const getAllStudents = async () => {
  try {
    const allStudents = await db.Students.findAll();

    return allStudents;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getStudentById = async (studentId) => {
  try {
    const studentById = await db.Students.findOne({ where: { id: studentId } });

    return studentById;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewStudent = async (studentData) => {
  try {
    const newStudent = await db.Students.create(studentData);
    return newStudent;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
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
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteStudent = async (studentId) => {
  try {
    await db.Students.destroy({ where: { id: studentId } });
    return { status: "success", message: "Student deleted successfully" };
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getStudentByTeacherId = async (teacherId) => {
  try {
    const studentByTeacherId = await db.Students.findOne({
      where: { TeacherId: teacherId },
    });
    return studentByTeacherId;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getStudentsByTeacherIdOrdered = async (teacherId) => {
  const associatedStudents = await db.Students.findAll({
    where: { TeacherId: teacherId },
    order: [["date_of_birth", "DESC"]],
  });
  return associatedStudents;
};

const getStudentByDni = async (studentData) => {
  try {
    const studentByDni = await db.Students.findOne({
      where: { dni: studentData.dni },
    });
    return studentByDni;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
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
