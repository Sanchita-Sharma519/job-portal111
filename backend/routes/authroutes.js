const express = require("express");
const { signin } = require("../controllers/authController");
const router = express.Router();

router.get('/api',signin);

module.exports = router;