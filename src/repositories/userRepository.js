const db = require("../db/models");

const getAllUsers = async () => {
  try {
    const allUsers = await db.Users.findAll();

    return allUsers;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getUserById = async (userId) => {
  try {
    const userById = await db.Users.findOne({ where: { id: userId } });

    return userById;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getUserByEmail = async (userData) => {
  try {
    const userByEmail = await db.Users.findOne({
      where: { email: userData },
    });

    return userByEmail
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewUser = async (userData) => {
  try {
    const newUser = await db.Users.create(userData);
    return newUser;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateUser = async (userId, userData) => {
  try {
    await db.Users.update(userData, { where: { id: userId } });
    const updatedUser = await db.Users.findOne({ where: { id: userId } });
    return updatedUser;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteUser = async (userId) => {
  try {
    await db.Users.destroy({ where: { id: userId } });
    return { status: "success", message: "User deletedsuccessfully" };
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail, 
  createNewUser,
  updateUser,
  deleteUser,
};
