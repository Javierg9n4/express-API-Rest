const bcrypt = require("bcrypt");


const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    return hashedPassword;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const validatePassword = async (password, hashedPassword) => {
  try {
    const validPassword = await bcrypt.compare(password, hashedPassword);
    
    return validPassword;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  hashPassword,
  validatePassword,
}
