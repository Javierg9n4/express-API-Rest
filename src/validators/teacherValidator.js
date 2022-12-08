const { check } = require("express-validator");
const { validateResult } = require("../helpers/validationHelper");

const teacherParamsValidator = [
  check("dni").exists().not().isEmpty(),
  check("name").exists().not().isEmpty(),
  check("last_name").exists().not().isEmpty(),
  check("date_of_birth").exists().not().isEmpty().isDate(),
  check("UserId").exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  teacherParamsValidator,
};
