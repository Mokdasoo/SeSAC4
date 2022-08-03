// Router는 엔드포인트를 나누어 각 요청에 대한 처리를 한다.

const express = require("express");
const userRouter = express.Router();
const user = require("../controller/UserController3");
const multer = require("multer");
const path = require("path");

const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            done(null, 'profileUploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, req.body.yourid + ext);
            filename = req.body.yourid + ext;
        },
    }),
    limits: { fileSize: 10*1024*1024}, //10mb
});

userRouter.get("/", user.index); // ~~/ 로 접속 시 UserController의 index 함수를 실행한다.
userRouter.get("/register", user.register); 
userRouter.post("/register", upload.single('userfile'), user.post_register);

userRouter.get("/login", user.login);
userRouter.post("/login", user.post_login);
userRouter.get("/profile", user.get_profile);
// ~~/register 로 접속 시 UserController의 register 함수를 실행한다.

module.exports = userRouter; 
// 경로와 컨트롤러 내의 함수를 연결시켜놓은 내용을 module로 내보낸다.