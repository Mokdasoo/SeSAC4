const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const port = 8000;

app.use(cookieParser('1234'));//비밀키
app.use(session({
    secret: 'secret key',
    // resave: false,
    // saveUninitialized: true

}))
app.set("view engine", "ejs");

const cookieConfig = {
    maxAge: 20000,
    path: '/',  //경로에 해당하는 것들만 쿠키를 볼 수 있음
    httpOnly: true, //클라이언트에서 document 쿠키 접근불가능
    signed: true // 쿠키값 암호화
}

app.get("login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    var flag = true;
    if(flag) {
        res.session.id = req.body.id;
        res.redirect("profile");
    }
    else res.redirect("login");
});
app.get("/profile", (req, res) => {
    if( req.session.id == undefined || req.session.id == ""){
        res.redirect("/login");
        return false;
    }
    //req.session.id로 작업~~
 
 
    res.render("profile");
})

app.get("/", (req, res) => {
    req.session.name = '홍길동';
    res.cookie('key', 'value', cookieConfig);
    res.cookie('key2', 'value2', cookieConfig);
    res.render("index");
});

app.get("/get", (req,res) => {
    console.log(req.session.name);
    console.log( req.cookies);
    res.send(req.cookies);
})


app.get("/cookie", (req, res) => {
    res.render("cookie");
})
app.get("/destroy", (req, res) => {
    // res.render("cookie");
    req.session.destroy(function(err){
        res.send("삭제");
    })
    //req.session.name = "";    속성중에 하나만 지우고 싶을때는 destroy 대신에 빈값으로 바꾼다.
})


app.get("/ex48", (req, res) => {
    res.render("ex48");
})
app.get("/ex48/popup", (req,res) => {
    res.render("ex48_popup");
})

app.listen(8000, () => {
    console.log("Server : ", port);
})
