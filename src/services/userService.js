const userRepository = require("../repositories/userRepository");
const teacherRepository = require("../repositories/teacherRepository");

const getAllUsers = async () => {
  const allUsers = await userRepository.getAllUsers();
  if (!allUsers || allUsers.length === 0) {
    throw { status: 404, message: "No users found" };
  }
  return allUsers;
};

const getUserById = async (userId) => {
  const userById = await userRepository.getUserById(userId);

  if (!userById) {
    throw { status: 404, message: "User not found for provided user id" };
  }

  return userById;
};

const createNewUser = async (userData) => {
  const isAlreadyRegistered = await userRepository.getUserByEmail(
    userData.email
  );

  if (isAlreadyRegistered) {
    throw {
      status: 403,
      message: "User already registered with provided email",
    };
  }

  const newUser = await userRepository.createNewUser(userData);
  return newUser;
};

const updateUser = async (userId, userData) => {
  const userById = await userRepository.getUserById(userId);
  if (!userById) {
    throw { status: 404, message: "User not found provided id" };
  }

  const updatedUser = await userRepository.updateUser(userId, userData);
  return updatedUser;
};

const deleteUser = async (userId) => {
  const user = await userRepository.getUserById(userId);

  if (!user) {
    throw { status: 404, message: "User not found for provided user id" };
  }

  const hasTeacher = await teacherRepository.getTeacherByUserId(userId);
  if (hasTeacher) {
    throw {
      status: 403,
      message: "User cannot be deleted because it has teacher associated",
    };
  }

  const deletedUser = await userRepository.deleteUser(userId);
  return deletedUser;
};

const checkAndUpdateUserStatus = async (userId) => {
  const userById = await userRepository.getUserById(userId);

  if (!userById) {
    throw { status: 404, message: "User not found provided id" };
  }

  if (userById.active === true) {
    return { message: "User already active", userById: userById };
  } else {
    const userData = {
      email: userById.email,
      password: userById.password,
      active: true,
    };
    const activeUser = await userRepository.updateUser(userId, userData);
    return { message: "User status updated", activeUser: activeUser };
  }
};

const checkUserStatus = async (userId) => {
  const userById = await userRepository.getUserById(userId);
  if (!userById) {
    throw { status: 404, message: "User not found provided id" };
  }
  const userStatus = userById.active;
  return userStatus;
};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
  checkAndUpdateUserStatus,
  checkUserStatus,
};
