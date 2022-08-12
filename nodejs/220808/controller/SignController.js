const Login = require("../model/Sign");

exports.get_home = (req, res) => {
    res.render("index");
}
exports.signUp = (req, res) => {
    Login.insert(req.body, function(result){
        res.send(result);
    });
    
}
exports.get_login = (req, res) => {
    Login.signin(req.body, function(result){
        console.log(result);

        if(result){
            if(req.body.passwd === result.passwd){
                res.render("index_logined", {
                    id : result.id,
                    passwd : result.passwd,
                    name: result.name,
                    age: result.age,
                    profileimg: result.profileimg
                });
            }else{
                res.send("비밀번호가 틀립니다.");
            }
        }else{
            res.send("id가 틀립니다.");
        }

        
        
    })
}

exports.editMember = (req, res) => {
    Login.update( req.body, function(result){
        console.log( result);
        res.send("수정 성공");
    })
}
exports.deleteMember = (req, res) => {
    Login.delete(req.body.id, function(result){
        console.log(result);
        res.send("삭제 성공");
    });
}


exports.change_profile = (req, res) => {
    
}
exports.get_info = (req, res) => {
    Login.get_Info( req.query.id, function(result){
        console.log("result : ", result);
        res.send({result: result[0]});
    })
}
