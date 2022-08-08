const express = require("express");
const sign = require("../controller/SignController");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            done(null, 'profiles/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, req.body.yourid + ext);
            filename = req.body.yourid + ext;
        },
    }),
    limits: { fileSize: 10*1024*1024}, //10mb
});

router.get("/", sign.get_home);
router.post("/register", upload.single('userfile'), sign.signUp);
router.post("/signin", sign.get_login);

module.exports = router;