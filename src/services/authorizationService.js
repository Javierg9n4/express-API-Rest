
const jwt = require("jsonwebtoken");
const path = require("path");
const env = require("dotenv").config({
  path: path.resolve(__dirname, "../..", ".env"),
}).parsed;

const JWT_SECRET = `"${env.JWT_SECRET}"`;

const createJWT = (logedUserData) => {
  const token = jwt.sign({ data: logedUserData }, JWT_SECRET, {expiresIn: "15m"});
  return token;
};

const createJWT2 = (userName) => {
  const token = jwt.sign({data: userName}, JWT_SECRET, {expiresIn: "15m"});
  return token;
};

const setSession = (req, logedUserData) => {
  req.session.isSessionSet = true;
  req.session.user = logedUserData;
  console.log("Session set");
  return 
};

const deleteSession = (req) => {
  delete req.session.isSessionSet;
  delete req.session.user;
  console.log("Session deleted");
  return 
};

module.exports = {
  createJWT,
  createJWT2,
  setSession,
  deleteSession,
};