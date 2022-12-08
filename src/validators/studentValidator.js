const { check } = require("express-validator");
const { validateResult } = require("../helpers/validationHelper");

const studentParamsValidator = [
  check("dni").exists().not().isEmpty(),
  check("name").exists().not().isEmpty(),
  check("last_name").exists().not().isEmpty(),
  check("date_of_birth").exists().not().isEmpty().isDate(),
  check("TeacherId").exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { 
  studentParamsValidator
}