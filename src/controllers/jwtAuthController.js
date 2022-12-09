const jwtAuthService = require("../services/jwtAuthService");

const setJwtToken = (req, res) => {
  const token = jwtAuthService.createJWT();

  res.status(200).json({token: token})
};

module.exports = {
  setJwtToken
}