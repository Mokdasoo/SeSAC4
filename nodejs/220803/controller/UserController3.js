const User = require("../model/User");

exports.index = (req,res) => {
    res.render("index3");
}
exports.register = (req,res) => {
    res.render("register");   
}

exports.post_register = (req,res)=>{
    User.post_user(req.body, req.file);
    res.send("회원가입완료");
}






exports.login = (req,res) => {
    res.render("login");
}

var p;

exports.post_login = async (req,res) => {
    var data = await User.get_user();
    const info = data.split("\n");
    console.log(req.body);
    console.log(info);
    var i;

    for(i=0; i<info.length; i++){
        p = info[i].split("//");
        if(p[0] == req.body.yourid){
            break;
        }
    }
    console.log(p);
    if(i == info.length){
        res.send("id가 다름");
    }else{
        if(p[1] != req.body.passwd){
            res.send("pw가 다름");
        }else{
            res.redirect("/user/profile");
        }
    }
        
}

exports.get_profile = (req,res) => {
    res.render("login_info", { 
        myid : p[0],
        mypasswd : p[1],
        myname : p[2],
        myold : p[3],
        filename : p[4]
     });   
}