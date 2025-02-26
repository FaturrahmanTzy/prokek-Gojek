const { getData, createData } = require("./controller.js")
const express = require("express")
const uploadImage = require("../../../middleware/uploadimage.js");


const router = express.Router()

router.get("/toko", getData)
router.post("/toko/create",uploadImage.single("logo, benner"), createData)

module.exports = router