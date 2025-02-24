const express = require("express");
const { getData } = require("./controller.js");

const router = express.Router();

router.get("/poster", getData);

module.exports = router;