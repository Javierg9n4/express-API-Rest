const { check } = require("express-validator");
const { validateResult } = require("../helpers/validationHelper");

const userParamsValidator = [
  check("email").exists().isEmail(),
  check("password").exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const userEmailValidator = [
  check("email").exists().isEmail(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
]

module.exports = {
  userParamsValidator,
  userEmailValidator
};
