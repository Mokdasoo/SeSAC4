
const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234', // Sesac1234*
    database: 'sesac'
});

exports.insert = ( data, cb ) => {
    console.log(data);
    var sql = "INSERT INTO signlist(id, passwd, name, age) VALUES('" + data.yourid + "', '" + 
    data.passwd + "', '" + data.yourname + "', '" + data.age +"')";
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


exports.update = (data, cb) => {
    let sql = `UPDATE signlist SET passwd='${data.passwd}', name='${data.name}', age=${data.age} WHERE id='${data.id}'`;

    cnn.query( sql, (err, rows) => {
        if(err) throw err;
        cb(rows);
    })
}
exports.delete = (id, cb) => {
    cnn.query( `DELETE FROM signlist WHERE id='${id}'`, (err, rows) => {
        if(err) throw err;
        cb(rows);
    })
}
exports.get_Info = (data, cb) => {
    // id 컬럼의 값이 id 인 데이터를 1개만 검색한다.
    cnn.query( `select * from signlist where id = '${data}' limit 1;`, (err,rows) => {
        if(err) throw err;

        cb(rows);
    })
}