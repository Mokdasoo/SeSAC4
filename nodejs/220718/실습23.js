const os = require("os");
console.log("사용가능 메모리 : " + (os.freemem()/1024/1024/1024).toFixed(2) + " GB");
console.log("전체 메모리 : " + (os.totalmem()/1024/1024/1024).toFixed(2) + " GB");
console.log("홈 디렉토리 경로 : " + os.homedir());

const path = require("path");

console.log("경로 구분자 : " + path.sep);
console.log("현재 파일 확장자 : " + path.extname(__filename));
console.log("현재 파일의 경로를 분리 출력 :\n" + __dirname.split(path.sep));