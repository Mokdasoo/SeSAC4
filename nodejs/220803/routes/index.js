const express = require("express");
const router = express.Router();
const user = require("../controller/UserController");


router.get("/", user.index);

router.get("/register", user.get_user);

router.get("/receive", user.recGet);

router.post("/receive", user.recPost);

module.exports = router;