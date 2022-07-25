const fs = require("fs").promises;
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use('/public', express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json() );

app.get("/", function(req,res){
    res.render("ex-login");
});

app.post("/login", async function(req,res){
    let{ID, passwd} = req.body;
    console.log(req.body);
    const input = await fs.readFile("./info.txt");
    
   console.log(input.toString().split("/"));
    const [loginID, name, loginPW, ...arr] = input.toString().trim().split("/");

    console.log(ID+"/"+passwd+"/"+loginID+"/"+loginPW);
    if(loginID == ID && loginPW == passwd){
        res.send("<script>alert('login success');</script>");
    }else{
        res.send("<script>alert('login fail');</script>");
    }


})

app.post("/ex32-submit", function(req,res){
    console.log(req.body);
    

    let {yourid, yourname, passwd, gender, birth, email, phoneNumber} = req.body;
    async function exec(){
        try {
            await fs.writeFile("info.txt", yourid +'/'+ 
            yourname +'/'+ passwd +'/'+ gender +'/'+ birth 
            +'/'+ email +'/'+ phoneNumber);
            console.log("파일저장완료");
        } catch (err) {
            throw err;
        }
    }
    exec();

    res.render("ex32-submit", req.body);



})

app.get("/receive", function(req,res){
    console.log(req.body);
    console.log(req.query);
    res.render("receive", req.query);
})
app.post("/receive", function(req,res){
    console.log(req.body);
    res.render("receive", req.body);

})
app.get("/ex30", function(req,res){
    console.log("ex30")
    res.render("ex30-get");
})
app.get("/ex3031-receive", function(req,res){
    console.log(req.query);
    res.render("ex3031-receive", req.query);
})
app.get("/ex31", function(req,res){
    console.log("ex31")
    res.render("ex31-post");
})
app.post("/ex3031-receive", function(req,res){
    console.log(req.body);
    res.render("ex3031-receive", req.body);
})

app.listen(port, ()=> {
    console.log("Server port : ", port);
})