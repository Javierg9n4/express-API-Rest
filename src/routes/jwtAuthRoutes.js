const express = require("express");
const router = express.Router();
const jwtAuthController = require("../controllers/jwtAuthController");

router.get("/set", jwtAuthController.setJwtToken)

module.exports = router;