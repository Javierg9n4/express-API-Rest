const db = require("../db/models");

const getAllTeachers = async () => {
  try {
    const allTeachers = await db.Teachers.findAll();

    return allTeachers;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getTeacherById = async (teacherId) => {
  try {
    const teacherbyId = await db.Teachers.findOne({ where: { id: teacherId } });

    return teacherbyId;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewTeacher = async (teacherData) => {
  try {
    const newTeacher = await db.Teachers.create(teacherData);

    return newTeacher;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateTeacher = async (teacherId, teacherData) => {
  try {
    await db.Teachers.update(teacherData, { where: { id: teacherId } });
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteTeacher = async (teacherId) => {
  try {
    await db.Teachers.destroy({ where: { id: teacherId } });

    return { status: "success", message: "Teacher deleted successfully" };
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getTeacherByUserId = async (userId) => {
  const teacherByUserId = await db.Teachers.findOne({
    where: { UserId: userId },
  });
  return teacherByUserId;
};

const getTeacherByDni = async (userData) => {
  try {
    const teacherByDni = await db.Teachers.findOne({
      where: { dni: userData.dni },
    });
    return teacherByDni;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllTeachers,
  getTeacherById,
  createNewTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacherByUserId,
  getTeacherByDni,
};
