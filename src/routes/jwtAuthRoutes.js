const express = require("express");
const router = express.Router();
const jstAuthController = require("../controllers/jwtAuthController");

router.get("/set", jstAuthController.setJwtToken)

module.exports = router;