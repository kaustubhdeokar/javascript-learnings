

function fireEvery3Secs(callback){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
        console.log("log");
        console.log(callback());
        resolve();
    }, 5000);
})};

function print(){
    let count = 0;
    for(let i=0;i<10;i++){
        count+=1;
    }
    return count;
}

function call(){
    fireEvery3Secs(print);
}

call();
