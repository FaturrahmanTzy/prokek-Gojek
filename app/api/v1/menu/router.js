const express = require("express");
const { getData, createData } = require("./controller.js");
const uploadImage = require("../../../middleware/uploadimage.js");

const router = express.Router();

router.get("/menu", getData);
router.post("/menu/create", uploadImage.single(" gambar"), createData);

module.exports = router;