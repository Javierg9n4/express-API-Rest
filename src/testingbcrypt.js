const bcrypt = require("bcrypt");
const saltRounds = 10;
const password = "AdminAdmin";

const hashPassword = async (password, saltRounds) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log(hashedPassword)
  return hashedPassword;
};

const validatePassword = async (password, hashedPassword) => {

  const validPassword = await bcrypt.compare(password, hashedPassword);
  console.log(validPassword)
  return validPassword
}


/* const validateUser = async (password, saltRounds) => {
  const hashedPassword = await hashPassword(password, saltRounds) 

  const valid = await validatePassword(password, hashedPassword)
 console.log(hashedPassword)
 console.log(valid)
} 
 */

const hashedPassword = "$2b$10$arxQ3B0mVfxnj2i4tkWhq.Fy7FNCz1iSH/X6UwoynnqpyxzUE0I.C"
validatePassword(password, hashedPassword)