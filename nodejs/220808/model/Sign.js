
const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234', // Sesac1234*
    database: 'sesac'
});

exports.insert = ( data, file, cb ) => {
    var sql = "INSERT INTO signlist(id, passwd, name, age, profileimg) VALUES('" + data.yourid + "', '" + 
    data.passwd + "', '" + data.yourname + "', '" + data.birth + "', '" + file.filename +"')";
    cnn.query( sql, (err, rows) => {
        if ( err ) throw err;

        console.log( rows );
        cb("회원가입성공");
    });
}
exports.signin = (data, cb) => {
    console.log(data);
    cnn.query( `select * from signlist where id = '${data.yourid}' limit 1;`, (err,rows) => {
        if(err) throw err;
        
        cb(rows[0]);
    })
}
