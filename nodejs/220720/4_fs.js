const fs = require("fs").promises;

// fs.readFile('./test.txt', function(err, data){
//     if(err) throw err;
    
//     console.log(data);
//     console.log(data.toString());
    
// });
//appenFile 은 이어서 적는거


// fs.writeFile('./write.txt', '안녕')
//     .then(() => {
//         console.log("작성완료");
//     })
//     .catch((err) => {
//         throw err;
//     });

// fs.copyFile("./write.txt", "./new.txt")
//     .then(() => {
//         console.log("복사완료");
//     })
//     .catch(() => {
//         throw err;
//     });

async function exec(){
    await fs.writeFile("./write.txt", "안녕");
    await fs.copyFile("./write.txt", "./new.txt");
}
exec();