const db = require("../db/models");

const getAllTeachers = async () => {
  try {
    const allTeachers = await db.Teachers.findAll();
    if (!allTeachers || allTeachers.length === 0) {
      throw { status: 404, message: "No teachers found" };
    }
    return allTeachers;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getTeacherById = async (teacherId) => {
  try {
    const teacher = await db.Teachers.findOne({ where: { id: teacherId } });

    if (!teacher) {
      throw { status: 404, message: "Teacher not found for provided id" };
    }
    return teacher;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const createNewTeacher = async (teacherData) => {
  try {
    const isAlreadyRegistered = await db.Teachers.findOne({
      where: { dni: teacherData.dni },
    });

    if (isAlreadyRegistered) {
      throw {
        status: 400,
        message: "Teacher already registered with provided dni",
      };
    }

    const userExists = await db.Users.findOne({
      where: { id: teacherData.UserId },
    });

    if (!userExists) {
      throw { status: 404, message: "User not found for provided user id" };
    }

    const checkIfUserAlreadyHasTeacher = await db.Teachers.findOne({
      where: { UserId: teacherData.UserId },
    });

    if (checkIfUserAlreadyHasTeacher) {
      throw {
        status: 404,
        message: "There is already a teacher associated with provided UserId",
      };
    }

    const newTeacher = await db.Teachers.create(teacherData);

    return newTeacher;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateTeacher = async (teacherId, teacherData) => {
  try {
    const isAlreadyRegistered = await db.Teachers.findOne({
      where: { id: teacherId },
    });

    if (!isAlreadyRegistered) {
      throw { status: 404, message: "Teacher not found with provided id" };
    }

    if (isAlreadyRegistered.UserId !== teacherData.UserId) {
      throw { status: 403, message: "Cannot update UserId" };
    }

    await db.Teachers.update(teacherData, { where: { id: teacherId } });
    const updatedTeacher = await db.Teachers.findOne({
      where: { id: teacherId },
    });
    return updatedTeacher;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const deleteTeacher = async (teacherId) => {
  try {
    const isAlreadyRegistered = await db.Teachers.findOne({
      where: { id: teacherId },
    });

    if (!isAlreadyRegistered) {
      throw { status: 404, message: "Teacher not found with provided id" };
    }

    const hasStudents = await db.Students.findOne({
      where: { TeacherId: teacherId },
    });

    if (hasStudents) {
      throw {
        status: 403,
        message: "Teacher cannot be deleted because it has students associated",
      };
    }

    await db.Teachers.destroy({ where: { id: teacherId } });
    return { status: "success", message: "Teacher deleted successfully" };
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const checkIfAssociatedUserIsActive = async (teacherId) => {
  try {
    const isAlreadyRegistered = await db.Teachers.findOne({
      where: { id: teacherId },
    });

    if (!isAlreadyRegistered) {
      throw { status: 404, message: "Teacher not found with provided id" };
    }

    const checkAssociatedUser = await db.Users.findOne({
      where: { id: isAlreadyRegistered.UserId },
    });

    if (!checkAssociatedUser) {
      throw { status: 404, message: "User not found with provided UserId" };
    } else if (checkAssociatedUser.active === false) {
      throw { status: 401, message: "Associated user is not active" };
    }

    const associatedStudents = await db.Students.findAll({
      where: { TeacherId: teacherId },
      order: [["date_of_birth", "DESC"]],
    });

    if (!associatedStudents || associatedStudents.length === 0) {
      throw {
        status: 404,
        message: "Selected teacher has not associated students",
      };
    }
    return associatedStudents;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
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

/* 

const getUserById = async (userId) => {
  try {
    const user = await db.Users.findOne({ where: { id: userId } });
    console.log(user);

    if (!user) {
      throw { status: 404, message: "User not found for provided user id" };
    }
    return user;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const createNewUser = async (userData) => {
  try {
    const isAlreadyRegistered = await db.Users.findOne({
      where: { email: userData.email },
    });
    if (isAlreadyRegistered) {
      throw {
        status: 400,
        message: "User already registered with provided email",
      };
    }
    const newUser = await db.Users.create(userData);
    return newUser;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateUser = async (userId, userData) => {
  try {
    const isAlreadyRegistered = await db.Users.findOne({
      where: { id: userId },
    });
    if (!isAlreadyRegistered) {
      throw { status: 404, message: "User not found provided id" };
    }
    await db.Users.update(userData, { where: { id: userId } });
    const updatedUser = await db.Users.findOne({ where: { id: userId } });
    return updatedUser;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await db.Users.findOne({ where: { id: userId } });
    console.log(user);

    if (!user) {
      throw { status: 404, message: "User not found for provided user id" };
    }

    const hasStudents = await db.Teachers.findOne({where: { UserId: userId }});
    if (hasStudents) {
      throw {
        status: 403,
        message: "User cannot be deleted because it has teacher associated",
      };
    }
    await db.Users.destroy({ where: { id: userId } });
    return { status: "success", message: "User deletedsuccessfully" };
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
};
 */
