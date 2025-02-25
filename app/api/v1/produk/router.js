const express = require("express");
const { getData } = require("./controller.js");

const router = express.Router();

router.get("/produk", getData);

module.exports = router;