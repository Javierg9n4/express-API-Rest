const db = require("../db/models");

const getAllTeachers = async () => {
  try {
    const allTeachers = await db.Teachers.findAll();

    return allTeachers;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: "Database error while getting all teachers, please try again",
    };
  }
};

const getTeacherById = async (teacherId) => {
  try {
    const teacherbyId = await db.Teachers.findOne({ where: { id: teacherId } });

    return teacherbyId;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: "Database error while getting teacher by id, please try again",
    };
  }
};

const createNewTeacher = async (teacherData) => {
  try {
    const newTeacher = await db.Teachers.create(teacherData);

    return newTeacher;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: "Database error while creating a new teacher, please try again",
    };
  }
};

const updateTeacher = async (teacherId, teacherData) => {
  try {
    await db.Teachers.update(teacherData, { where: { id: teacherId } });
    return;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: "Database error while updating a teacher, please try again",
    };
  }
};

const deleteTeacher = async (teacherId) => {
  try {
    await db.Teachers.destroy({ where: { id: teacherId } });

    return { status: "success", message: "Teacher deleted successfully" };
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: "Database error while deleting a teacher, please try again",
    };
  }
};

const getTeacherByUserId = async (userId) => {
  try {
    const teacherByUserId = await db.Teachers.findOne({
      where: { UserId: userId },
    });
    return teacherByUserId;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message:
        "Database error while getting a teacher by UserId, please try again",
    };
  }
};

const getTeacherByDni = async (teacherData) => {
  try {
    const teacherByDni = await db.Teachers.findOne({
      where: { dni: teacherData.dni },
    });
    return teacherByDni;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: "Database error while getting teacher by dni, please try again",
    };
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
