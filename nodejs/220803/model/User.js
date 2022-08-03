const fs = require("fs").promises;



exports.post_user = function( data, file ){
    console.log(data);
    console.log(file);
    let {yourid, passwd,yourname, birth} = data;
    let filename = file.filename;
    async function exec(){
        try {
            await fs.appendFile("signupList.txt", yourid +'//'+ passwd +'//'+ 
            yourname +'//'+ birth + '//' + filename +'\n');
            console.log("파일저장완료");
        } catch (err) {
            throw err;
        }
    }
    exec();
}
exports.get_user = async function(){
    var buffer = await fs.readFile("./signupList.txt");
    return buffer.toString();
}