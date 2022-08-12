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
            console.log(req.body);
            const ext = path.extname(file.originalname);
            done(null, req.body.myid + ext);
            filename = req.body.myid + ext;
        },
    }),
    limits: { fileSize: 10*1024*1024}, //10mb
});

//, 
router.get("/", sign.get_home);
router.post("/register", sign.signUp);
router.post("/signin", sign.get_login);
router.patch("/signin/edit", sign.editMember);
router.delete("/signin/delete", sign.deleteMember);
router.patch("/signin/edit/profile", upload.single('profileimg'), sign.change_profile);
router.get("/signin/get", sign.get_info);

module.exports = router;