function call(name){
    return new Promise( function (resolve, reject){
        setTimeout( function(){
            console.log(name);
            resolve(name);
        },1000);
    });
}

// async function call(name){
//     setTimeout( function(){
//         console.log(name);
//         return name;
//     },1000);
    
// }
// *** setTimeout() 자체가 Promise 객체를 반환하지 않기 때문에 async와 await이 먹지 않으므로
//      Promise를 반환하도록 직접 작성한 후에 async와 await을 적용해야 한단다


function back(){
    return new Promise(resolve => setTimeout( function(){
            console.log("back");
            resolve("back");
        },1000)
    );
}
function hell(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("callback hell");
        }, 1000);
    });
}
async function exec(){
    let name = await call('lee');
    console.log(name + "반가워");
    let txt = await back(name);
    console.log(txt + "을 실행했구나");
    let message = await hell(txt);
    console.log("여기는 " + message);
}

exec();
