const fs = require("fs").promises;
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const multer = require("multer");
const path = require("path");
let filename;
const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, req.body.yourid + ext);
            filename = req.body.yourid + ext;
        },
    }),
    limits: { fileSize: 5*1024*1024}, //5mb
});


app.set("view engine", "ejs");
app.use("/aa", express.static( "uploads" ) );
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json() );

app.get("/", test, test2, function(req,res){
    res.render("signup");
});



app.post("/signup", upload.single('profileimg'), function(req,res){
    console.log(req.body);
    
    let {yourid, yourname, passwd, gender, birth, email, phoneNumber} = req.body;
    async function exec(){
        try {
            await fs.writeFile("signupList.txt", yourid +'/'+ 
            yourname +'/'+ passwd +'/'+ gender +'/'+ birth 
            +'/'+ email +'/'+ phoneNumber);
            console.log("파일저장완료");
        } catch (err) {
            throw err;
        }
    }
    exec();
    res.send({name : yourname});
})


app.post("/upload", upload.single('userfile'), function(req,res){
    console.log(req.body);
    console.log(req.file);
    console.log(__dirname + "/" + filename);
    res.render('imgview', { filename : req.file.filename });
});





app.post("/upload/array", upload.array('userfile'), function(req,res){
    console.log(req.body);
    console.log(req.files);
    res.send("Upload Array");
});
app.post("/upload/fields", upload.fields([{name:'userfile'}, {name:'userfile2'}, {name:'userfile3'}]), function(req,res){
    console.log(req.body);
    console.log(req.files);
    res.send("Upload Fields");
});

function test(req, res, next){
    console.log("test함수");
    console.log(req.path);
    next();
}
function test2(req,res, next){
    console.log("test2 함수");
    next();
}
app.listen(port, ()=>{
    console.log("Server Port : ", port );
})