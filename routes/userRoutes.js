const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const busController = require("../controllers/busController");

router.get("/user",userController.getUser);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.post("/bus",busController.createBus);
router.get("/bus/:seat",busController.getBusByAvailableSeat);

module.exports = router;
