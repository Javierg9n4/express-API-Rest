const teacherRepository = require("../repositories/teacherRepository");
const userRepository = require("../repositories/userRepository");
const studentRepository = require("../repositories/studentRepository");

const getAllTeachers = async () => {
  const allTeachers = await teacherRepository.getAllTeachers();
  if (!allTeachers || allTeachers.length === 0) {
    throw { status: 404, message: "No teachers found" };
  }
  return allTeachers;
};

const getTeacherById = async (teacherId) => {
  const teacherById = await teacherRepository.getTeacherById(teacherId);

  if (!teacherById) {
    throw { status: 404, message: "Teacher not found for provided id" };
  }

  return teacherById;
};

const createNewTeacher = async (teacherData) => {
  const isAlreadyRegistered = await teacherRepository.getTeacherByDni(
    teacherData
  );

  if (isAlreadyRegistered) {
    throw {
      status: 403,
      message: "Teacher already registered with provided dni",
    };
  }

  const userExists = await userRepository.getUserById(teacherData.UserId);

  if (!userExists) {
    throw { status: 404, message: "User not found for provided user id" };
  }

  const checkIfUserAlreadyHasTeacher =
    await teacherRepository.getTeacherByUserId(teacherData.UserId);

  if (checkIfUserAlreadyHasTeacher) {
    throw {
      status: 403,
      message: "There is already a teacher associated with provided UserId",
    };
  }

  const newTeacher = await teacherRepository.createNewTeacher(teacherData);

  return newTeacher;
};

const updateTeacher = async (teacherId, teacherData) => {
  const isAlreadyRegistered = await teacherRepository.getTeacherById(teacherId);

  if (!isAlreadyRegistered) {
    throw { status: 404, message: "Teacher not found with provided id" };
  }

  if (isAlreadyRegistered.UserId !== teacherData.UserId) {
    throw { status: 403, message: "Cannot update UserId" };
  }
  await teacherRepository.updateTeacher(teacherId, teacherData);
  const updatedTeacher = await teacherRepository.getTeacherById(teacherId);
  return updatedTeacher;
};

const deleteTeacher = async (teacherId) => {
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
};

const checkIfAssociatedUserAndReturnStudents = async (teacherId) => {
  const isAlreadyRegistered = await teacherRepository.getTeacherById(teacherId);

  if (!isAlreadyRegistered) {
    throw { status: 404, message: "Teacher not found with provided id" };
  }

  const checkAssociatedUser = await userRepository.getUserById(
    isAlreadyRegistered.UserId
  );

  if (!checkAssociatedUser) {
    throw { status: 404, message: "User not found with provided UserId" };
  } else if (checkAssociatedUser.active === false) {
    throw { status: 401, message: "Associated user is not active" };
  }

  const associatedStudents =
    await studentRepository.getStudentsByTeacherIdOrdered(teacherId);

  if (!associatedStudents || associatedStudents.length === 0) {
    throw {
      status: 404,
      message: "Selected teacher has not associated students",
    };
  }

  return associatedStudents;
};

const getTeacherAndStudentsByUserId = async (userId) => {
  const teacherByUserId = await teacherRepository.getTeacherByUserId(userId);

  if (!teacherByUserId) {
    throw {status: 404, message: "Teacher not found with provided user id"};
  }
  const {dataValues} = teacherByUserId;

  const associatedStudents = await studentRepository.getStudentsByTeacherIdOrdered(teacherByUserId.id);

  const studentsData = associatedStudents.map(student => student.dataValues);
  
  const teacherAndStudentData = {teacher: dataValues, students: studentsData};
  
  return teacherAndStudentData
};

const createNewTeacherOrDeleteUser = async (teacherData) => {
  const isAlreadyRegistered = await teacherRepository.getTeacherByDni(
    teacherData
  );

  if (isAlreadyRegistered) {
    await userRepository.deleteUser(teacherData.UserId)
    console.log("teacher already registered, user deleted");
    throw {
      status: 422,
      message: "Teacher already registered with provided dni, user deleted",
    };
  }

  /* const userExists = await userRepository.getUserById(teacherData.UserId);

  if (!userExists) {
    throw { status: 404, message: "User not found for provided user id" };
  }

  const checkIfUserAlreadyHasTeacher =
    await teacherRepository.getTeacherByUserId(teacherData.UserId);

  if (checkIfUserAlreadyHasTeacher) {
    throw {
      status: 403,
      message: "There is already a teacher associated with provided UserId",
    };
  } */

  const newTeacher = await teacherRepository.createNewTeacher(teacherData);

  return newTeacher;
};

module.exports = {
  getAllTeachers,
  getTeacherById,
  createNewTeacher,
  updateTeacher,
  deleteTeacher,
  checkIfAssociatedUserAndReturnStudents,
  getTeacherAndStudentsByUserId,
  createNewTeacherOrDeleteUser
};
