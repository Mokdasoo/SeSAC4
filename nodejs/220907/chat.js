var express = require( "express" );
var app = express();
var http = require( "http" ).Server( app );
var io = require( "socket.io" )( http );

app.get("/", function( req, res ){
    console.log("client");
    res.sendFile( __dirname + "/chat.html");  //ejs를 안썼기 때문에 senFile씀 ejs는 render 불러오면 됨
});

var saveList = {};
io.on("connection", function(socket){
    console.log("Server Socket Connected");
    console.log("connected : ", socket.id);
    

    socket.on("sendNick", function(data){
        saveList[socket.id] = data.nickname;
        io.emit("newEnter", {id: socket.id, nickA:saveList[socket.id]});
        io.emit("list", saveList);
    });


    socket.on("setNickName", function(data){
        saveList[socket.id] = data.nick;
    });

    socket.on("send", function(data){
        console.log(data);
        data["is_dm"] = false;
        data["nickname"] = saveList[socket.id];
        if ( data.to == "전체" ) {
            io.emit("newMSG", data);
        } else {
            data["is_dm"] = true;
            let socketID = Object.keys(saveList).find( (key) => { return saveList[key] === data.to; } );
            console.log(socketID);
            io.to(socketID).emit("newMSG", data);
            socket.emit("newMSG", data);
        }

    });

    socket.on("disconnect", function(){
        console.log(saveList[socket.id]);
        io.emit("notice", saveList[socket.id]);
        delete saveList[socket.id];
        io.emit("list", saveList);
    });
});


http.listen( 8000, function(){
    console.log( "Listening on *: ", 8000);
});