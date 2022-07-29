const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs").promises;

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/",function(req,res){
    res.render("ex-login");
});

app.post("/login",function(req,res){
    // console.log( req.body );

    let {ID, passwd} = req.body;
    
    console.log( ID + passwd);
    
    fs.readFile("./info2.txt", (err, data) => {
        if(err) throw err;
        else{
            console.log(data);
        }
    }).then((value)=>{
        return value.toString().split('//');
    }).then((txtlist)=>{
        console.log(txtlist);
        let [a,b] = txtlist;
       
        console.log(a,b);


        if(ID == a && passwd == b){
            res.send("<script>alert('login success');</script>");
        } else{
            res.send("<script>alert('login fail');</script>");
        }

    })


    
});

app.listen(port, ()=> {
    console.log("Server port : ", port);
})