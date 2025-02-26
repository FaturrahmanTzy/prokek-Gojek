const express = require("express");
const { getData, createData } = require("./controller.js");
const uploadImage = require("../../../middleware/uploadimage.js");

const router = express.Router();

router.get("/produk", getData);
router.post("/produk/create",uploadImage.single(" gambar"), createData);

module.exports = router;