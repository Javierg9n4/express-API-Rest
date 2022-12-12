const db = require("../db/models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = async (password, saltRounds) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    return hashedPassword;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const validatePassword = async (password, hashedPassword) => {
  try {
    const validPassword = await bcrypt.compare(password, hashedPassword);
    if (!validPassword) {
      throw { status: 403, message: "Invalid password" };
    }

    return validPassword;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getAllUsers = async () => {
  try {
    const allUsers = await db.Users.findAll();
    if (!allUsers || allUsers.length === 0) {
      throw { status: 404, message: "No users found" };
    }
    return allUsers;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getUserById = async (userId) => {
  try {
    const user = await db.Users.findOne({ where: { id: userId } });
    console.log(user);

    if (!user) {
      throw { status: 404, message: "User not found for provided user id" };
    }
    return user;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getUserByUserName = async (userData) => {
  try {
    const userRegistered = await db.Users.findOne({
      where: { email: userData.email },
    });
    if (!userRegistered) {
      throw {
        status: 404,
        message: "User not found with provided email",
      };
    }
    const hashedPassword = userRegistered.password;
    const validPassword = await validatePassword(
      userData.password,
      hashedPassword
    );
    if (!validPassword) {
      throw { status: 403, message: "Invalid password" };
    }
    return {
      id: userRegistered.id,
      email: userRegistered.email,
      type: userRegistered.type,
    };
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
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

    const hashedPassword = await hashPassword(userData.password, saltRounds);
    const newUserData = {
      email: userData.email,
      password: hashedPassword,
    };
    const newUser = await db.Users.create(newUserData);
    return newUser;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
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
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await db.Users.findOne({ where: { id: userId } });
    console.log(user);

    if (!user) {
      throw { status: 404, message: "User not found for provided user id" };
    }

    const hasStudents = await db.Teachers.findOne({
      where: { UserId: userId },
    });
    if (hasStudents) {
      throw {
        status: 403,
        message: "User cannot be deleted because it has teacher associated",
      };
    }
    await db.Users.destroy({ where: { id: userId } });
    return { status: "success", message: "User deletedsuccessfully" };
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const checkAndUpdateUserStatus = async (userId) => {
  try {
    const isAlreadyRegistered = await db.Users.findOne({
      where: { id: userId },
    });

    if (!isAlreadyRegistered) {
      throw { status: 404, message: "User not found provided id" };
    }

    if (isAlreadyRegistered.active === true) {
      return isAlreadyRegistered;
    } else {
      await db.Users.update({ active: true }, { where: { id: userId } });

      const activeUser = await db.Users.findOne({ where: { id: userId } });

      return activeUser;
    }
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const checkUserStatus = async (userId) => {
  try {
    const isAlreadyRegistered = await db.Users.findOne({
      where: { id: userId },
    });

    if (!isAlreadyRegistered) {
      throw { status: 404, message: "User not found provided id" };
    }
    const userStatus = isAlreadyRegistered.active;
    return userStatus;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
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
  getUserByUserName,
};
