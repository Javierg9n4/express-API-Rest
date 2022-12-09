const express = require("express");
const router = express.Router();
const sessionAuthController = require("../controllers/sessionAuthController");

router.get("/set", sessionAuthController.setSession);
router.get("/delete", sessionAuthController.deleteSession);

module.exports = router;