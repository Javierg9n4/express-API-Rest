const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createNewUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);


module.exports = router




/* const { userParamsValidator, checkUserMail, checkUserId, checkUserTeacher } = require("../../validations/usersValidations");

router.get("/", usersController.getAllUsers);
router.post("/", userParamsValidator, checkUserMail, usersController.createUser);
router.put("/:id", userParamsValidator, checkUserId, usersController.updateUser);
router.delete("/:id", checkUserId, checkUserTeacher, usersController.deleteUser);
router.get("/:id", checkUserId, usersController.getOneUser);

module.exports = router; */