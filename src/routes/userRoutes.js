const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { userParamsValidator } = require("../validators/userValidator");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userParamsValidator, userController.createNewUser);
router.put("/:id", userParamsValidator, userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/:id/active", userController.checkAndUpdateUserStatus);
router.get("/:id/active", userController.checkUserStatus);


module.exports = router;
