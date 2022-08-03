exports.get_user = (req,res) => {
    res.send("Get User");
}
exports.index = (req,res) => {
    res.render("index");
}

exports.recGet = (req,res) => {
    console.log("recGET");
    console.log( req.query );
    res.render("receive", req.query);
}

exports.recPost = (req,res) => {
    console.log("recPOST");
    console.log( req.body );
    res.render("receive", req.body);

    //res.render("receive", { a:1, b:2 });
}

///////////////////
/*
function get_user(){

}
function a(){

}
module.exports = {
    get_user,
    a
} 
*/