// function func1(callback){
//     callback();
//     console.log("난 func1 함수야");
// }
// function func2(){
//     console.log(" 안녕~");
// }
// func1(func2);

function func1(callback){
    callback();
}

func1(function (){
    console.log("안녕");
    
});