const express = require("express");
const { getUsers, updateUser} = require("./controller.js");
const router = express.Router();

router.get("/user",getUsers);
router.put("/user/:id",updateUser);
module.exports = router;
 