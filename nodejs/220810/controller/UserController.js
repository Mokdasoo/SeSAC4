const models = require("../model");


exports.get_login = (req,res) => {
    res.render("user");
}

exports.signup = (req, res) => {
    let object = {
        id : req.body.id,
        password : req.body.passwd,
        name : req.body.name,
        age : req.body.age
    }
    models.User.create( object )
    .then((result) => {
        console.log(result);
        res.send(result);
        // res.send({ id: result });
    });
}

exports.post_login = (req, res) => {
    
    models.User.findOne({
        where: { id: req.body.id,}
    }).then((result) => {
        if(result){
            console.log( result);
            if(result.password === req.body.passwd){
                res.send("로그인 성공");
            }else{
                res.send("비밀번호가 틀립니다");
            }
        }
        else{
            res.send("아이디가 틀립니다");
        }
    })
}
exports.MemberManage = (req, res) => {
    models.User.findOne({
        where: { id: req.body.id,}
    }).then((result) => {
        res.send(result);
    });
}

exports.patch_input = (req, res) => {
    let newObj = {
        id : req.body.id,
        password : req.body.password,
        name : req.body.name,
        age : req.body.age
    }
    models.User.update(newObj, { where: { id: req.body.id } })
    .then((result) => {
        console.log(result);
        res.send('수정성공');
    })
}

exports.delete_member = (req, res) => {
    models.User.destroy({
        where: { id: req.body.id }
    }).then((result) => {
        console.log( result );
        res.send("삭제 성공");
    })
}