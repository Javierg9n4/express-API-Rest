const db = require("../db/models");

const getAllUsers = async () => {
  try {
    const allUsers = await db.Users.findAll();

    return allUsers;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: "Database error while getting all users, please try again",
    };
  }
};

const getUserById = async (userId) => {
  try {
    const userById = await db.Users.findOne({ where: { id: userId } });

    return userById;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: "Database error while getting user by id, please try again",
    };
  }
};

const getUserByEmail = async (userData) => {
  try {

    const userByEmail = await db.Users.findOne({
      where: { email: userData },
    });

    return userByEmail;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: "Database error while gettin user by email, please try again",
    };
  }
};

const createNewUser = async (userData) => {
  try {
    const newUser = await db.Users.create(userData);
    return newUser;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: "Database error while creating new user, please try again",
    };
  }
};

const updateUser = async (userId, userData) => {
  try {
    await db.Users.update(userData, { where: { id: userId } });
    const updatedUser = await db.Users.findOne({ where: { id: userId } });
    return updatedUser;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: "Database error while updating user, please try again",
    };
  }
};

const deleteUser = async (userId) => {
  try {
    await db.Users.destroy({ where: { id: userId } });
    return { message: "User deleted successfully" };
  } catch (error) {
    throw {
      status: 500,
      message: "Database error while deleting user, please try again",
    };
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
