const fs = require("fs");
const http = require("http");

const server = http.createServer( function(req, res){
    fs.readFile("./실습6.html", function(err, data){
        if(err){
            //promise 에서의 catch
            console.error(err);
            res.writeHead(404);
            res.end(err.message);
        }else{
            //promise 에서의 try
            console.log(req.url);
            res.writeHead(200);
            res.end(data);
        }
    });
    // try{
    //     console.log(req.url);
    //     const data = fs.readFile("./실습6.html");
    //     res.writeHead(200);
    //     res.end(data);
    // } catch(err){
    //     console.error(err);
    //     res.writeHead(404);
    //     res.end(err.message);
    // }
    
});

server.listen(8000, function(){
    console.log("8000번 포트");
})

server.on( "request", function(){
    console.log( "Client Request");
})
server.on("connection", function(){
    console.log( "Client Connection");
})
server.on("checkContinue", function(){
    console.log( "Client checkContinue");
})