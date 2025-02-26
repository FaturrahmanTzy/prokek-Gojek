const express = require("express");
const { getData, createData } = require("./controller.js");
const uploadImage = require("../../../middleware/uploadimage.js");

const router = express.Router();

router.get("/poster", getData);
router.post("/poster/create", uploadImage.single("fotoposter"), createData);

module.exports = router;