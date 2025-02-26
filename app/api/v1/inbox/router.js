const express = require("express");
const { getData, create } = require("./controller.js");
const uploadImage = require("../../../middleware/uploadimage.js");

const router = express.Router();

router.get("/inbox", getData);
router.post("/inbox/create", uploadImage.single("foto_poster"), create);

module.exports = router;
