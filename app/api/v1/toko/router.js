const { getData } = require("./controller.js")
const express = require("express")


const router = express.Router()

router.get("/toko", getData)

module.exports = router