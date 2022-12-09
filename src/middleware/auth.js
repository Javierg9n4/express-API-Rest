const jwt = require("jsonwebtoken")
const path = require("path");
const env = require("dotenv").config({
  path: path.resolve(__dirname, "../..", ".env"),
}).parsed;

const JWT_SECRET = `"${env.JWT_SECRET}"`;

const isAuth = (req, res, next) => {
  console.log(req.headers.authorization)
  if (!req.headers.authorization) {
    return res.status(401).json({message: "Authorization Header missing"})
  }

  let authorization = req.headers.authorization;
  let token = authorization.split(" ")[1];
  let jwtData;

  try {
    jwtData = jwt.verify(token, JWT_SECRET);
    console.log(jwtData);
  } catch (error) {
    console.error(error);
    return res.status(401).json({message: "Invalid Token"});
  }

  req.data = jwtData.data;
  next();
};

module.exports = {
  isAuth
}