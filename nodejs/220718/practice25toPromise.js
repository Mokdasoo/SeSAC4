function call(name){
    return new Promise( function (resolve, reject){
        setTimeout( function(){
            console.log(name);
            resolve(name);
        },1000);
    });
}
function back(cb){
    return new Promise( function (resolve, reject){
        setTimeout( function(){
            console.log("back");
            resolve("back");
        },1000);
    });
}
function hell(cb){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("callback hell");
        }, 1000);
    });
}
call('lee')
    .then(function(user){
        console.log(user + "반가워");
        return back(user);
    })
    .then(function(txt){
        console.log(txt + "을 실행했구나");
        return hell(txt);
    })
    .then(function(message){
        console.log("여기는 " + message);
    });

