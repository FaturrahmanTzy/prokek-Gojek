const express = require("express");
const { getUsers, createUser, updateUser} = require("./controller.js");
const uploadImage = require("../../../middleware/uploadimage.js");

const router = express.Router();

router.get("/user",getUsers);
router.post("/user/create", uploadImage.single("foto"),createUser);
router.put("/user/:id",updateUser);
module.exports = router;
 