const express = require("express");
const router = express.Router();
const uploadImage = require("../middleware/uploadimage.js");
const { creatData } = require("./controller.js");
const userController = require("./controller.js");

router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);
router.post("/user/create", uploadImage.single("profil"), creatData);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
 