const fs = require("fs").promises;
const http = require("http");

const server = http.createServer(async function(req,res){
    try{
        const data = await fs.readFile("../../week 1/220629/실습6.html");
        res.writeHead(200);
        res.end(data);
    } catch(err){
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
});

server.listen(8080, function(){
    console.log("8080번 포트");
})