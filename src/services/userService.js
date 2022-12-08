const userRepository = require("../repositories/userRepository");

const getAllUsers = async () => {
  try {
    const allUsers = await userRepository.getAllUsers();
    return allUsers;
  } catch (error) {
    throw error
  }
};

const getUserById = async (userId) => {
  try {
    const userById = await userRepository.getUserById(userId);
    return userById;
  } catch (error) {
    throw error
  }
};

const createNewUser = async (userData) => {
  try {
    const newUser = await userRepository.createNewUser(userData);
    return newUser;
  } catch (error) {
    throw error
  }
};

const updateUser = async (userId, userData) => {
  try {
    const updatedUser = await userRepository.updateUser(userId, userData)
    return updatedUser;
  } catch (error) {
    throw error
  }
};

const deleteUser = async (userId) => {
  try {
    const deletedUser = await userRepository.deleteUser(userId);
    return deletedUser;
  } catch (error) {
    throw error
  }
};


module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser
};
