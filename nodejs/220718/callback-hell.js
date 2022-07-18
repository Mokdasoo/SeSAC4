function login(id, pw, cb){
    setTimeout(() => {
        console.log("사용자 입장");
        cb(id);
    }, 3000);
}
function getVideo(id, cb){
    setTimeout(() => {
        cb(['아이언맨1', '아이언맨2']);
    }, 2000);
}
function getDetail(video, cb){
    setTimeout(() => {
        cb("비디오 제목은 : " + video);
    }, 1000);
}
login('lee', '1234', user => {
    console.log( 'user님 환영');
    getVideo(user, (videos) => {
        console.log( videos );
        getDetail(videos[0], title => {
            console.log(title);
        });
    });
});
//콜백 함수는 함수가 실행되고 실행되는 함수
// login 실행 -> setTimeout -> 사용자 입장 -> 