const fs = require("fs");
const http = require("http");





const server = http.createServer(function(req, res){

    try{
        console.log(req.url);

        if(req.url === '/'){
            var filePath = "./../../week 1/220629/실습6.html";
            var getdata = function(filePath, callback){
                fs.readFile(filePath, function(err, data){
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, data);
                    }
                });
            }
            res.writeHead(200);
            res.end(getdata);
        }
        if(req.url === '/grass.png'){
            filePath = './../../week 1/220629/grass.png';
            getdata = function(filePath, callback){
                fs.readFile(filePath, function(err, data){
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, data);
                    }
                });
            }
            console.log('picture loading...');
            res.writeHead(200);
            res.write(getdata);
            res.end();
        }
    } catch(err){
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
});

server.listen(8080, function(){
    console.log("8080번 포트");
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






