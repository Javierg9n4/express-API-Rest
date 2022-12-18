const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.renderUsers);
router.get("/home", userController.userIsNotAdmin);

module.exports = router;
