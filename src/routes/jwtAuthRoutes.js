const express = require("express");
const router = express.Router();
const jstAuthController = require("../controllers/jwtAuthController");

router.get("/", jstAuthController.setJwtToken)

module.exports = router;