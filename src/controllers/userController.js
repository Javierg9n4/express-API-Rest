const userService = require("../services/userService");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userService.getAllUsers();

    res.status(200).json(allUsers);
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const userById = await userService.getUserById(userId);
    res.status(200).json(userById);
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewUser = async (req, res) => {
  const userData = {
    email: req.body.email,
    password: req.body.password,
  };
 
  try {
    const newUser = await userService.createNewUser(userData);
    res.status(200).json(newUser);
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  const userData = {
    email: req.body.email,
    password: req.body.password,
    active: req.body.active,
  };

  try {
    const updatedUser = await userService.updateUser(userId, userData);
    res
      .status(200)
      .json({ message: "User updated successfully", updatedUser: updatedUser });
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

//TODO rework the response
const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await userService.deleteUser(userId);
    res.status(200).json(deletedUser);
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const checkAndUpdateUserStatus = async (req, res) => {
  const userId = req.params.id;

  try {
    const activeUser = await userService.checkAndUpdateUserStatus(userId);
    res.status(200).json(activeUser);
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const checkUserStatus = async (req, res) => {
  const userId = req.params.id;

  try {
    const userStatus = await userService.checkUserStatus(userId);
    res.status(200).json({ active: userStatus });
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ status: "FAILED", data: { error: error?.message || error } });
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
