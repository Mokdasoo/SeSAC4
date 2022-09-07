var express = require( "express" );
var app = express();
var http = require( "http" ).Server( app );
var io = require( "socket.io" )( http );

app.get("/", function( req, res ){
    console.log("client");
    res.sendFile( __dirname + "/index.html");  //ejs를 안썼기 때문에 senFile씀 ejs는 render 불러오면 됨
});

app.get("/ex50", function( req, res ){
    console.log("client");
    res.sendFile( __dirname + "/ex50.html");  //ejs를 안썼기 때문에 senFile씀 ejs는 render 불러오면 됨
});
var msg = {hello: "안녕!", study: "공부합시다!", bye: "잘가~"};
io.on("connection", function(socket){
    console.log("Server Socket Connected");
    socket.emit("hello", "server hello"); //이벤트명이 동일해야만 받을 수 있음
    socket.on("click", function(data){
        console.log("client : ", data);
        socket.emit("clickResponse", 'success');
        io.emit("clickResponse", "io success");
    });

    // 실습50번
    socket.on("send", function(data){
        console.log("client : ", data);
        socket.emit("clickResponse", data + " : " + msg[data]);
    })

    // 실습50번 end



});


http.listen( 8000, function(){
    console.log( "Listening on *: ", 8000);
});