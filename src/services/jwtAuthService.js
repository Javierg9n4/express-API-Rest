const jwt = require("jsonwebtoken");
const path = require("path");
const env = require("dotenv").config({
  path: path.resolve(__dirname, "../..", ".env"),
}).parsed;

const JWT_SECRET = `"${env.JWT_SECRET}"`;

const createJWT = () => {
  
  const token = jwt.sign({ data: "jwt value" }, JWT_SECRET, {expiresIn: "24h"});

  return token;
};

module.exports = {
  createJWT,
};
