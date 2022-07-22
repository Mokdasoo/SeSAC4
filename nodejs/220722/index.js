const express = require("express");
const app = express();
const port = 8080;


app.use('/abc', express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    var list = ['apple', 'banana'];
    res.render("실습6", {list:list});
});
app.listen(port, () => {
    console.log('Server port : ', port);
});
//express Method =>
//get = 요청 받을 때, 쿼리 주소에 보이는 거
//post = 뭔가를 만들 때, 주소에 보이면 안되는 것
//put = 어떤 걸 수정할 때/ a라는 객체를 보내면 다 덮어쓰기
//patch = 수정할 때 / 보낸 값만 바뀜
//delete = 삭제


//nohup node index.js &
//netstat -tnlp
//kill -9 PID