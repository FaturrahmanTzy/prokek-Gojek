const express = require("express");
const { getData, createData, deleteData } = require("./controller.js");

const router = express.Router();

router.get("/pesanan", getData);
router.post("/pesanan", createData);
router.delete("/pesanan/:id", deleteData);

module.exports = router;