const userRepository = require("../repositories/userRepository");
const pswEncryption = require("../authentication/pswEncryption")


const loginUser = async (userData) => {

  const userExists = await userRepository.getUserByEmail(userData.email);

  if (!userExists) {
    throw { status: 404, message: "User not found provided email" };
  }

  const checkPassword = await pswEncryption.validatePassword(userData.password, userExists.password);

  if (!checkPassword) {
    throw { status: 403, message: "Invalid username or password" };
  }
  return userExists
};



module.exports = {
  loginUser
}