const teacherRepository = require("../repositories/teacherRepository");
const userRepository = require("../repositories/userRepository");
const studentRepository = require("../repositories/studentRepository");

const getAllTeachers = async () => {
  try {
    const allTeachers = await teacherRepository.getAllTeachers();
    if (!allTeachers || allTeachers.length === 0) {
      throw { status: 404, message: "No teachers found" };
    }
    return allTeachers;
  } catch (error) {
    throw error;
  }
};

const getTeacherById = async (teacherId) => {
  try {
    const teacherById = await teacherRepository.getTeacherById(teacherId);

    if (!teacherById) {
      throw { status: 404, message: "Teacher not found for provided id" };
    }

    return teacherById;
  } catch (error) {
    throw error;
  }
};

const createNewTeacher = async (teacherData) => {
  try {
    const isAlreadyRegistered = await teacherRepository.getTeacherByDni(teacherData);

    if (isAlreadyRegistered) {
      throw {statusbar: 404, message: "Teacher already registered with provided dni"};
    }

    const userExists = await userRepository.getUserById(teacherData.UserId);

    if (!userExists) {
      throw { status: 404, message: "User not found for provided user id" };
    }

    const checkIfUserAlreadyHasTeacher = await teacherRepository.getTeacherByUserId(teacherData.UserId);

    if (checkIfUserAlreadyHasTeacher) {
      throw {
        status: 404,
        message: "There is already a teacher associated with provided UserId",
      };
    }

    const newTeacher = await teacherRepository.createNewTeacher(teacherData);

    return newTeacher;
  } catch (error) {
    throw error;
  }
};

const updateTeacher = async (teacherId, teacherData) => {
  try {
    const isAlreadyRegistered = await teacherRepository.getTeacherById(teacherId)

    if (!isAlreadyRegistered) {
      throw { status: 404, message: "Teacher not found with provided id" };
    }

    if (isAlreadyRegistered.UserId !== teacherData.UserId) {
      throw { status: 403, message: "Cannot update UserId" };
    }
    await teacherRepository.updateTeacher(
      teacherId,
      teacherData
    );
    const updatedTeacher = await teacherRepository.getTeacherById(teacherId)
    return updatedTeacher;
  } catch (error) {
    throw error;
  }
};

const deleteTeacher = async (teacherId) => {
  try {
    const isAlreadyRegistered = await teacherRepository.getTeacherById(teacherId);

    if (!isAlreadyRegistered) {
      throw { status: 404, message: "Teacher not found with provided id" };
    }

    const hasStudents = await studentRepository.getStudentByTeacherId(teacherId);

    if (hasStudents) {
      throw {
        status: 403,
        message: "Teacher cannot be deleted because it has students associated",
      };
    }

    const deletedTeacher = await teacherRepository.deleteTeacher(teacherId);
    return deletedTeacher;
  } catch (error) {
    throw error;
  }
};

const checkIfAssociatedUserAndReturnStudents = async (teacherId) => {
  try {
    const isAlreadyRegistered = await teacherRepository.getTeacherById(teacherId);

    if (!isAlreadyRegistered) {
      throw { status: 404, message: "Teacher not found with provided id" };
    }

    const checkAssociatedUser = await userRepository.getUserById(isAlreadyRegistered.UserId);

    if (!checkAssociatedUser) {
      throw { status: 404, message: "User not found with provided UserId" };
    } else if (checkAssociatedUser.active === false) {
      throw { status: 401, message: "Associated user is not active" };
    }

    const associatedStudents = await studentRepository.getStudentsByTeacherIdOrdered(teacherId);

    if (!associatedStudents || associatedStudents.length === 0) {
      throw {
        status: 404,
        message: "Selected teacher has not associated students",
      };
    }
    
    return associatedStudents
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
  checkIfAssociatedUserAndReturnStudents
};
