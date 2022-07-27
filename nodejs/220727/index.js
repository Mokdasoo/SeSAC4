const fs = require("fs").promises;
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use('/public', express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json() );

app.get("/", function(req,res){
    res.render("ex34_loginForm");
})

app.post("/signup", function(req,res){
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

app.post("/login", async function(req,res){
    let{myid, mypasswd} = req.body;
    console.log(req.body);
    const input = await fs.readFile("./signupList.txt");
    
   console.log(input.toString().split("/"));
    const [loginID, name, loginPW, ...arr] = input.toString().trim().split("/");

    console.log(myid+"/"+mypasswd+"/"+loginID+"/"+loginPW);
    if(loginID === myid && loginPW === mypasswd){
        res.send( {sf : 1, name : name} );
    }else{
        res.send( {sf : 0} );
    }


})



app.get("/test", function(req,res){
    res.send("test");
})

app.get("/receive", function(req,res){
    console.log(req.query);
    let name = req.query.name;
    let msg = req.query.name + "GET 안녕";
    res.send({name: name, message: msg});
})
app.get("/ex3031-receive", function(req,res){
    console.log(req.query);
    let name = req.query.name;
    let gender = req.query.gender;

    res.send({name: name, gender: gender});
})

app.post("/receive", function(req,res){
    console.log(req.body);
    let name = req.body.name;
    let msg = req.body.name + "안녕";
    res.send({name: name, message: msg});
})

app.listen(port, ()=> {
    console.log("Server port : ", port);
})