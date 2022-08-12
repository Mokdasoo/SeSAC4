const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();




router.get("/", user.get_login);
router.post("/signup", user.signup);
router.post("/login", user.post_login);
router.post("/login_success", user.MemberManage);
router.patch("/edit", user.patch_input);
router.delete("/delete", user.delete_member);

module.exports = router;