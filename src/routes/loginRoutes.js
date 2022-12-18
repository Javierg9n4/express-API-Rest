const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const { userEmailValidator } = require("../validators/userValidator");

router.get("/login", loginController.showLoginPage);
router.post("/login", loginController.loginUser);
router.post("/logout", loginController.logOut);
router.post("/users", loginController.logOut);
router.post("/token", loginController.loginUserToken);
router.post("/signup", userEmailValidator, loginController.signUp);
module.exports = router;
