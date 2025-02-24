const express = require("express");
const { getData } = require("./controller.js");

const router = express.Router();

router.get("/inbox", getData);

module.exports = router;
