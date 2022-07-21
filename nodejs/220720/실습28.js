const fs = require("fs").promises;
const http = require("http");

const server = http.createServer(async function(req, res){

    try{
        console.log(req.url);

        if(req.url === '/'){
            const page = await fs.readFile("./../../week 1/220629/실습6.html", 'utf-8');
            res.writeHead(200);
            res.end(page);
        }
        if(req.url === '/grass.png'){
            console.log('picture loading...');
            const data = await fs.readFile('./../../week 1/220629/grass.png');
            res.writeHead(200);
            res.write(data);
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






