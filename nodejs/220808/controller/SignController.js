const Login = require("../model/Sign");

exports.get_home = (req, res) => {
    res.render("index");
}
exports.signUp = (req, res) => {
    Login.insert(req.body, req.file, function(result){
        res.send(result);
    });
    
}
exports.get_login = (req, res) => {
    Login.signin(req.body, function(result){
        console.log(result);

        if(result){
            if(req.body.passwd === result.passwd){
                res.render("login_info", {info : result});
            }else{
                res.send("비밀번호가 틀립니다.");
            }
        }else{
            res.send("id가 틀립니다.");
        }

        
        
    })
}