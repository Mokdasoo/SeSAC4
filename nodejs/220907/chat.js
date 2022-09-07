var express = require( "express" );
var app = express();
var http = require( "http" ).Server( app );
var io = require( "socket.io" )( http );

app.get("/", function( req, res ){
    console.log("client");
    res.sendFile( __dirname + "/chat.html");  //ejs를 안썼기 때문에 senFile씀 ejs는 render 불러오면 됨
});

var index = 0;
var obj = {
};
io.on("connection", function(socket){
    console.log("Server Socket Connected");
    console.log("connected : ", socket.id);
    index++;
    obj[socket.id] = "사용자"+index;
    io.emit("newEnter", obj[socket.id]);
    socket.emit("info", {id:socket.id, user:obj[socket.id]});

    socket.on("setNickName", function(data){
        obj[socket.id] = data.nick;
    });

    socket.on("send", function(data){
        io.emit("newMSG", data);
    });

    socket.on("disconnect", function(){
        console.log(obj[socket.id]);
        io.emit("notice", obj[socket.id]);
        delete obj[socket.id];
    });
});


http.listen( 8000, function(){
    console.log( "Listening on *: ", 8000);
});