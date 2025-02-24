const express = require("express");
const { getData } = require("./controller.js");

const router = express.Router();

router.get("/menu", getData);

module.exports = router;