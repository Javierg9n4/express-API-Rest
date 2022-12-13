const userRepository = require("../repositories/userRepository");
const teacherRepository = require("../repositories/teacherRepository")

const getAllUsers = async () => {
  try {
    const allUsers = await userRepository.getAllUsers();
    if (!allUsers || allUsers.length === 0) {
      throw { status: 404, message: "No users found" };
    }
    return allUsers;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const userById = await userRepository.getUserById(userId);

    if (!userById) {
      throw { status: 404, message: "User not found for provided user id" };
    }

    return userById;
  } catch (error) {
    throw error;
  }
};

const createNewUser = async (userData) => {
  try {
    const isAlreadyRegistered = await userRepository.getUserByEmail(userData.email);

    if (isAlreadyRegistered) {
      throw {
        status: 400,
        message: "User already registered with provided email",
      };
    }

    const newUser = await userRepository.createNewUser(userData);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (userId, userData) => {
  try {
    const userById = await userRepository.getUserById(userId);
    if (!userById) {
      throw { status: 404, message: "User not found provided id" };
    }

    const updatedUser = await userRepository.updateUser(userId, userData);
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
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
  } catch (error) {
    throw error;
  }
};

const checkAndUpdateUserStatus = async (userId) => {
  try {
    const userById = await userRepository.getUserById(userId);
    
    if (!userById) {
      throw { status: 404, message: "User not found provided id" };
    }

    if (userById.active === true) {
      return userById;
    } else {
      const userData = {
        email: userById.email,
        password: userById.password,
        active: true
      }
      const activeUser  = await userRepository.updateUser(userId, userData);
      return activeUser
    }
  } catch (error) {
    throw error;
  }
};

const checkUserStatus = async (userId) => {
  try {
    const userById = await userRepository.getUserById(userId);
    if (!userById) {
      throw { status: 404, message: "User not found provided id"};
    }
    const userStatus = userById.active;
    return userStatus
  } catch (error) {
    throw error;
  }
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
