const jwt = require("jsonwebtoken");
const path = require("path");
const env = require("dotenv").config({
  path: path.resolve(__dirname, "../..", ".env"),
}).parsed;

const JWT_SECRET = `"${env.JWT_SECRET}"`;

const isAuthBySessionOrJwt = (req, res, next) => {
  if (req.session.isSessionSet === true) {

    return next();
  }
  if (req.headers.authorization) {
    let authorization = req.headers.authorization;
    let token = authorization.split(" ")[1];
    let jwtData;

    try {
      jwtData = jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    
    req.jwt = jwtData.data;
    return next();
  }
  

  res.status(401).render("error-login");
};

const isLogedIn = (req, res, next) => {
  if (req.session.isSessionSet === true) {

    return next();
  }
  if (req.headers.authorization) {
    let authorization = req.headers.authorization;
    let token = authorization.split(" ")[1];
    let jwtData;

    try {
      jwtData = jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    
    req.jwt = jwtData.data;

    return next();
  }
  
  res.status(401).redirect("/login");
};

module.exports = {
  isAuthBySessionOrJwt,
  isLogedIn
};
